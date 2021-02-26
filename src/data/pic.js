function main() {
    // Get A WebGL context
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById("canvas");
    const gl = canvas.getContext("webgl");
    if (!gl) {
      return;
    }
  
    let originalImage = { width: 1, height: 1 }; // replaced after loading
    const originalTexture = twgl.createTexture(gl, {
      src: "https://i.imgur.com/xKYRSwu.jpg", crossOrigin: '',
    }, (err, texture, source) => {
      originalImage = source;
    });
  
    // compile shaders, link program, lookup location
    const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);
  
    // calls gl.createBuffer, gl.bindBuffer, gl.bufferData for a quad
    const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);
  
    requestAnimationFrame(render);
    
    function render(time) {
      time *= 0.001;  // seconds
      
      twgl.resizeCanvasToDisplaySize(gl.canvas);
  
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
  
      gl.useProgram(programInfo.program);
  
      // calls gl.bindBuffer, gl.enableVertexAttribArray, gl.vertexAttribPointer
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  
      const canvasAspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const imageAspect = originalImage.width / originalImage.height;
      const mat = m3.scaling(imageAspect / canvasAspect, -1);
      
      // calls gl.activeTexture, gl.bindTexture, gl.uniformXXX
      twgl.setUniforms(programInfo, {
        u_matrix: mat,
        u_originalImage: originalTexture,
        u_distortionAmount: 0.003,  // .3%
        u_distortionRange: 100,
        u_time: time * 10,
      });
  
      // calls gl.drawArrays or gl.drawElements
      twgl.drawBufferInfo(gl, bufferInfo);
      
      requestAnimationFrame(render);
    }
  }
  
  main();
  body { margin: 0; }
  canvas { width: 100vw; height: 100vh; display: block; }
  <script src="https://twgljs.org/dist/3.x/twgl-full.min.js"></script>
  <canvas id="canvas"></canvas>
  
 
  <script id="vs" type="f">
  attribute vec2 position;
  attribute vec2 texcoord;
  
  uniform mat3 u_matrix;
  
  varying vec2 v_texcoord;
  
  void main() {
     gl_Position = vec4((u_matrix * vec3(position, 1)).xy, 0, 1);
     v_texcoord = texcoord;
  }
  </script>
  <!-- fragment shader -->
  <script id="fs" type="x-shader/x-fragment">
  precision mediump float;
  
  uniform float u_time;
  uniform float u_distortionAmount;
  uniform float u_distortionRange;
  
  // our textures
  uniform sampler2D u_originalImage;
  
  // the texcoords passed in from the vertex shader.
  varying vec2 v_texcoord;
  
  void main() {
     vec2 distortion = vec2(
        sin(u_time + v_texcoord.y * u_distortionRange), 0) * u_distortionAmount;
     vec4 original = texture2D(u_originalImage, v_texcoord + distortion);
     gl_FragColor = original;
  }
  </script>
  <script src="https://webglfundamentals.org/webgl/resources/m3.js"></script>