<template>
  <div id="Video">
        <img 
            class="link image_act" 
            :class="{ActiveImageAct}"  
            ref="vidd"
            @click="activ1"
            @mouseenter="start"
            src="@/assets/image/vue_06.png"
        >
        <div id="curse" class=" note" 
            ref="not" 
            @click="activ1" 
        >
        <p id="curse" @click="activ1" >click</p>
        </div>
            <div class="container" ref="con" @click="activ1" >
                <h1 class="ac" @click="activ1">
                    {{ string }} 
                    <div :class="{ cursor }">&nbsp;</div>
                </h1>
            </div>
        <video class="video_3" 
               ref="video" 
               controls 
               @mouseleave="Leave"
            >
            <source src="https://www.dropbox.com/s/o5lo18o6kc5xawq/My%20Video1.mp4?dl=1" type="video/mp4">
            Your browser does not support HTML5 video.
        </video> 
        
  </div>
</template>

<script>
import {TimelineMax} from "gsap"

export default {
    data(){
        return{
            ActiveImageAct:false,
            string: '',
            array: ['Note: Here you can watch this video about a simple application in the Vue ecosystem. This application suggests using vue + router + store. I hope it gonna be a little fun. !! Attention sound !!'],
            arrayIndex: 0,
            step: 0,
            cursor:false,
            tween: new TimelineMax()
        }
    },
    methods: {
        activ1(){ 
            
            this.tween.to(this.$refs.vidd,{rotateX:90, rotateY:90},0).to(this.$refs.con,4,{x:-500},0).to(this.$refs.not,4,{x:-700},0)
            
            const playPromise = this.$refs.video.play()
            if (playPromise !== undefined) {
            playPromise.then( () => {
            })
            .catch(error => {
                console.log(error)
            });
          }
        },
        Leave(){
            this.$refs.video.pause()
            //this.tween.to(this.$refs.vidd,2,{rotateX:0, rotateY:0}).to(this.$refs.con,2,{x:0}).to(this.$refs.not,2,{x:650, ease: "elastic.out(1, 0.3)"})
        },
        start(){
            this.cursor = true
            window.id = setInterval(() => {
                this.text()
            }, 100)
        },
        text(){
            if( this.step < this.array[this.arrayIndex].length){
                this.string += this.array[this.arrayIndex].charAt(this.step)
                this.step += 1 
            }
        },
        destroyed(){
            this.Leave()
        }
    }
}
</script>

<style lang="scss" scoped>
    #video {
      position: absolute;
      width: 100vw;
      height: 100%;
      background-color: black;
    }
      .image_act {
          position: absolute;
          width: 100rem;
          height: 100%;
          z-index: 1;
      }
      .ActiveImageAct {
          opacity: 0;
          transition: 2s ease-in-out;
          z-index: -1;
      }
      .video_3{
          position: absolute;
          width: 100vw;
            height: 100%;
          z-index: 0;
      }
      .note {
          position: absolute;
          display: flex;
          transform: translate(49vw,48vh);
          text-align: center;
          font-family: 'Orbitron', sans-serif;
          animation: glow 1s ease-in-out infinite alternate;
          z-index: 100;
      }
      .container {
        position: absolute;
        margin: 5vw;
        width: 20rem;
        height: 20rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }
      .ac {
        position: relative;
        font-size: calc(5px + 1vw);
        letter-spacing: none;
        font-family: 'Cutive Mono', monospace;
        color: #00f7ff;
        
        .cursor {
        opacity: 1;
        display:inline-block;
        margin-left: 3px;
        width: 1.5px;
        height: calc(5px + 1vw);
        background-color:#00f7ff;
        animation: cursorBlink 2s infinite;
        transition: all .1s ease-in-out; 
        }
        }
        @keyframes cursorBlink {
            49% { background-color: #00f7ff; }
            50% { background-color: transparent; }
            99% { background-color: transparent; }
        }
        
        @keyframes glow {
         from {
           text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff,
         }
        
         to {
           text-shadow: 0 0 20px rgb(255, 255, 255), 
         }
      }
      @media screen and (max-width: 534px) {
          .image_act {
          max-width: 50rem;
          left: -50%;
          max-height: auto;
        }
      }
      @media screen and (min-width: 534px) and (max-width: 680px) {
          .image_act {
          max-width: 50rem;
          left: -20%;
          max-height: auto;
        }
      }
    
</style>