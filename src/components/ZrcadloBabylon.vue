<template>
    <canvas id="canvas" touch-action="none" style="width:100%; height:100vh; "></canvas>
</template>

<script>
import * as BABYLON from '@babylonjs/core'
import '@babylonjs/loaders'

export default {

    name: "FirstBabylon",

    data(){
        return{
            scena:null,
            camera:null,
            light:null,
            box:null,
            canvas:null
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.canvas = document.getElementById("canvas");
            this.engine = new BABYLON.Engine(this.canvas, true);
            const scene = this.createScene()
            window.addEventListener("keydown", (ev) => {
                    // Shift+Ctrl+Alt+I
                    if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                        if (scene.debugLayer.isVisible()) {
                            scene.debugLayer.hide();
                        } else {
                            scene.debugLayer.show();
                        }
                    }
                });
            this.engine.runRenderLoop(function(){scene.render()});
            window.addEventListener("resize",this.engine.resize());
        },
        createScene(){
            const engine = this.engine
            const canvas = this.canvas
                    // This creates a basic Babylon Scene object (non-mesh)
            var scene = new BABYLON.Scene(engine);

            // This creates and positions a free camera (non-mesh)
            var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

            // This targets the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());

            // This attaches the camera to the canvas
            camera.attachControl(canvas, true);

            // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

            // Default intensity is 1. Let's dim the light a small amount
            light.intensity = 0.7;

            // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
            BABYLON.SceneLoader.ImportMesh("", "https://dl.dropbox.com/s/zvktkrx3fs5xdgp/","ches_knight_wood_texture_002.glb", scene, 
            function (newMeshes) {
            var hero = newMeshes[0]; 
            
            hero.rotation.x = -Math.PI / 2;
            hero.bakeCurrentTransformIntoVertices();

            // Move the sphere upward 1/2 its height
            hero.position.y = 3
            
            hero.rotation.y += 0.01;
            
            window.addEventListener("mousemove", function () {
                // We try to pick an object
                var pickResult = scene.pick(scene.pointerX, scene.pointerY);
                if (pickResult.hit) {
                    hero.lookAt(pickResult.pickedPoint);
                }
            })
            })
            scene.clearColor = BABYLON.Color3.Black();


            var createScene = function() {
  var scene = new BABYLON.Scene(engine);
  //scene.clearColor = BABYLON.Color3.Black;
  var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
  camera.setPosition(new BABYLON.Vector3(0, 10, -50));
  camera.attachControl(canvas, true);
  /*
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 0, 0), scene);
  light.intensity = 0.85;
  light.specular = new BABYLON.Color3(0.95, 0.95, 0.81);
  */
  var pl = new BABYLON.PointLight("pl", new BABYLON.Vector3(0, 0, 0), scene);
  pl.diffuse = new BABYLON.Color3(1, 1, 1);
  pl.intensity = 1.0;
  
  var nb = 20000;    		// nb of triangles
  var fact = 30; 			// cube size
  	
 // custom position function for SPS creation
 var myPositionFunction = function(particle, i, s) {
      particle.position.x = (Math.random() - 0.5) * fact;
      particle.position.y = (Math.random() - 0.5) * fact;
      particle.position.z = (Math.random() - 0.5) * fact;
      particle.rotation.x = Math.random() * 3.15;
      particle.rotation.y = Math.random() * 3.15;
      particle.rotation.z = Math.random() * 1.5;
      particle.color = new BABYLON.Color4(particle.position.x / fact + 0.5, particle.position.y / fact + 0.5, particle.position.z / fact + 0.5, 1.0);
  };
 
   // model : triangle
   var triangle = BABYLON.SceneLoader.ImportMesh("", "https://dl.dropbox.com/s/zvktkrx3fs5xdgp/","ches_knight_wood_texture_002.glb", scene, )
  
  // SPS creation
  var SPS = new BABYLON.SolidParticleSystem('SPS', scene);
  SPS.addShape(triangle, nb);
  var mesh = SPS.buildMesh();
  // dispose the model
  triangle.dispose();
  
  // SPS init
  SPS.initParticles = function () {
	  for (var p = 0; p < SPS.nbParticles; p++) {
		  myPositionFunction(SPS.particles[p]);
	  }
  }

  SPS.updateParticle = function (particle) {
	  particle.rotation.x += particle.position.z / 100;
	  particle.rotation.z += particle.position.x / 100;
  }
 
  SPS.initParticles();
  SPS.setParticles();
  
  // Optimizers after first setParticles() call
  // will be used only for the next setParticles() calls
  SPS.computeParticleColor = false;
  SPS.computeParticleTexture = false;

  // SPS mesh animation
  scene.registerBeforeRender(function() {
    pl.position = camera.position;
    SPS.mesh.rotation.y += 0.01;
	SPS.setParticles();
  });

  return scene;
};



            return scene
        }
    }

}
</script>