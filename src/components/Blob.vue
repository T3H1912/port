<template>
   <div id="blob">
       <canvas id="canvas"  resize ></canvas>
   </div>
</template>

<script>
const paper = require('paper')

export default {
    mounted() {
        this.init()
    },
    methods: {
        init() {
            // by paper.js http://paperjs.org/
            paper.setup("canvas");

            let view = paper.view;
            let numPoints = 13;
            let path = new paper.Path();
            let mousePos = view.center.divide(7);
            let pathHeight = mousePos.y;
            let width, height, center;
            
            path.strokeColor = '#00f7ff';

            path.strokeWidth = 10;

            view.on({frame: onFrame,});

            initializePath();

            function initializePath() {
            
            center = view.center;
            width = view.size.width;
            height = view.size.height / 2;
            path.segments = [];
            path.add(view.bounds.topLeft);
            
            for (let i = 1; i < numPoints; i++) {
                let point = new paper.Point(width / numPoints * i, center.y);
                path.add(point);
            }
            
            path.add(view.bounds.bottomRight);
            path.fullySelected = false;
            }

            function onFrame(e) {
            
            pathHeight += (center.y - mousePos.y - pathHeight) / 10;
            
            for (let i = 1; i < numPoints; i++) {    
                let sinSeed = e.count + (i + i % 10) * 100;
                let sinHeight = Math.sin(sinSeed / 200) * pathHeight;
                let yPos = Math.sin(sinSeed / 100) * sinHeight + height;
                path.segments[i].point.y = yPos;
            }
            
                path.smooth({ type: "continuous" });
            }  
       }
    }
}
</script>

<style lang="scss" scoped>

 .blob {
  width: 100vw;
  height:100%;
}

#canvas {
  position: relative;
  margin: 0;
  padding: 0;
  left:-2%;
  width: 101vw;
  height: 100%;
}

</style>