<template>
  <div id="app">
    <!-- <ThreeC2/> -->
    <div id="load" ref="cdd">
        <div  id="countdown"></div>
    </div>
    <div :class="{noe}">
    <div id="cursor" class="cursor_point"></div>
    <canvas id="cursor" class="cursor_canvas" resize></canvas>
      <router-view />
    </div>
  </div>
</template>

<script>
import {initCursor} from '@/data/cursor.js'
import {TimelineMax} from "gsap"
//import ThreeC2 from '@/components/ThreeC2.vue'
export default {
  components:{
    //ThreeC2
  },
  name: "App",
  data(){
    
    return{
      cursor:Object,
      tween: new TimelineMax(),
      noe:false
    }
  },
  mounted(){
    this.init() 
    this.cursor = new initCursor('#app')
    
  },
  updated(){
    this.cursor = new initCursor('#app')
  },
  methods: {
     init() {
            var timeleft = 100
            window.id = setInterval(() =>{
            if(timeleft <= 0){
                clearInterval(window.id)
                this.tween.to(this.$refs.cdd,{y:-500,opacity:0, ease: "none"})  
                this.noe = false
            }
            else {
                document.getElementById("countdown").innerHTML = timeleft
                this.noe = true
            }    
            timeleft -= 1
            }, 5)
            
     }
 }
}


</script>

<style lang="scss" scoped>

 #load{
     position: fixed;
     text-align: center;
     background-color: #000000 ;
     width: 100vw;
     height: 100%;
     z-index: 1;
    animation: animate_2 5s linear infinite;

     #countdown{
       bottom: 2rem;
         position: relative;
         font-family: 'Orbitron', sans-serif;
         //color:#000000;
         font-size: 40vw;
         animation: animate_2 5s linear infinite;
         animation: glow 1s ease-in-out infinite alternate;
     }
        @keyframes glow {
         from {
           text-shadow: 0 0 1000px #00f7ff, 0 0 20px rgb(255, 255, 255),
         }
        
         to {
           text-shadow: 0 0 2000px rgb(9, 220, 235), 
         }
      }
      @keyframes animate_2 {
            0%,100%
            {
              filter: hue-rotate(0);
            }
            50%
            {
              filter: hue-rotate(-0.15turn);
            }
        }
 }   
</style>

<style lang="scss">

   ::-webkit-scrollbar {
     display: none;
     -ms-overflow-style: none;  /* IE and Edge */
     scrollbar-width: none;  /* Firefox */
     }
  
  .noe{
    display: none;
  }
  #cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    }
    .cursor_point {
    width: 5px;
    height: 5px;
    left: -2.5px;
    top: -2.5px;
    border-radius: 50%;
    z-index: 11000;
    background:red;
    }
    .cursor_canvas {
      width: 100vw;
      height: 100%;
      z-index: 12000;
    }

</style>
  
<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; /*vue transition animation*/
  
  body{
      overflow-x: hidden;
      position: relative;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      background-color: black;
      cursor: none;
  }
  #app{
    
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1000;
  }

.nav{
  position: relative;
  z-index: 0;
  transform: rotate(-90deg);
  
}
.nav.navigace {
  transform: rotate(360deg);
  position: absolute;
  bottom: 600px;
  left: 100px;
}
#routa{
  padding: 10px;
  margin: 10px;
  text-decoration: none;
}
@media only screen and (max-width: 680px) {
  html,body {
    overflow-x: hidden;
  }
}
</style>