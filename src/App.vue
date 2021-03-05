<template>
  <div id="app">
    <div id="load" ref="cdd">
        <div ref="cdd" id="countdown"></div>
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

export default {

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
          this.tween.to(this.$refs.cdd,3,{opacity:0, zIndex:-10000, ease: "none",})  
          this.noe = false
        }
        else {
          document.getElementById("countdown").innerHTML = timeleft
          this.noe = true
        }    
        timeleft -= 1
        }, 160)
            
    }
  }
}
</script>

<style lang="scss" scoped>

 #load{
   position: absolute;
     text-align: center;
     background-color: #000000 ;
     width: 100vw;
     height: 100%;
     z-index: 10;
     animation: animate_2 5s linear infinite;

    #countdown{
      bottom: 2rem;
      position: relative;
      font-family: 'Orbitron', sans-serif;
      font-size: 40vw;
      animation: animate_2 5s linear infinite;
      animation: glow 1s ease-in-out infinite alternate;
      z-index: 1;
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
    position: fixed;
    width: 10px;
    height: 20px;
    z-index: 1000;
  }
  ::-webkit-scrollbar-track {
    position: fixed;
    z-index: 1000;
    background: black;
    
  }
  ::-webkit-scrollbar-thumb {
    position: fixed;
      background:#131313;
      animation: animate 5s linear infinite; 
      cursor: pointer;
      z-index: 1000;
    
  }
  ::-webkit-scrollbar-thumb:hover {
    position: fixed;
    background:#00ffff;
    z-index: 1000;
      animation: animate 5s linear infinite; 
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
      width: 100%;
      height: 100%;
      z-index: 12000;
    }

</style>
  
<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=Quicksand&family=Raleway:wght@100&display=swap');
/*@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1"; vue transition animation*/
  
  html,body{
    
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      background: black;
      cursor: none;
      
  }
  #app{
    
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1000;
  }

  @media only screen and (max-width: 1124px) {
      ::-webkit-scrollbar {
      width: 2px;
      height: 10px;
    }
  
  }
  @media only screen and (max-width: 991px) {
     .cursor_point{
      opacity: 0;
     }
     .cursor_canvas{
       opacity: 0;
     }
  
  }
</style>