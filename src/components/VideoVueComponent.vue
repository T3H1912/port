<template>
  <div id="Video">
    <div class="container con_2">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <img 
                    class="image_act" 
                    :class="{ActiveImageAct}"  
                    ref="vidd"
                    @click="activ1"
                    src="@/assets/image/vue_06.png"
                >
                <div class=" note" >
                    <div  class=" col-xl-12 col-lg-12 col-md-12 col-sm-12 clicNote_">
                        <div class="container_" ref="con" @click="activ1" >
                        <h1 class="ac" @click="activ1">
                            {{ string }} 
                            <div :class="{ cursor }">&nbsp;</div>
                        </h1>
                    </div>
                        <p  ref="not_" class="link clicNote" @click="touch"  >Note: Click</p>
                    </div>     
                </div>   
                    <div class=" note_video" >
                        <div ref="not" class=" col-xl-12 col-lg-12 col-md-12 col-sm-12 clicK">
                            <p  ref="not" class="link clicKc" @click="activ1" >Video: click</p>
                        </div>     
                    </div>
                <div class="imageBorder" ref="boredimag_">    
                <video class="video_3" 
                    ref="video_" 
                    controls 
                    @mouseout="Leave"
                    >
                    <source src="https://www.dropbox.com/s/zei36tjydbzw6rt/vue_video.mp4?dl=1" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video> 
                </div>
            </div> 
        </div>
    </div>  
  </div>
</template>

<script>
import {TimelineMax, TimelineLite} from "gsap"

export default {
    data(){
        return{
            ActiveImageAct:false,
            string: '',
            array: ['Note: Here you can watch this video about a simple application in the Vue ecosystem. This application suggests using vue + router + store. I hope it gonna be a little fun. !! Attention sound !!'],
            arrayIndex: 0,
            step: 0,
            cursor:false,
            tween: new TimelineMax(true),
            gsap: new TimelineLite (true)

        }
    },
    methods: {
        touch() {
            this.tween.to(this.$refs.not_,4,{scale:0},3)
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
        activ1(){ 
            
            this.gsap
            .to(this.$refs.vidd,{ x:-2000,opacity:0,},0)
            .to(this.$refs.not,{x:-2000,opacity:0},0)
            .to(this.$refs.boredimag_,{opacity:1},0)
            .to(this.$refs.video_,{opacity:1},0)
            
            const playPromise = this.$refs.video_.play()
            if (playPromise !== undefined) {
            playPromise.then( () => {
            })
            .catch(error => {
                console.log(error)
            });
          }
        },
        Leave(){
            this.$refs.video_.pause(()=>{
            })
            
        },
    }
}
</script>

<style lang="scss" scoped>
    .con_2 {
      position: relative;
      display: block;
      justify-content: center;
      min-width: 100vw;
      min-height: 100%;
    }
      .image_act {
          position: absolute;
          width: 100vw;
          height: 100%;
          bottom: 0;
          z-index: 1;
          transition: 2s ease-in-out;

          
      }
      .clicNote_{
          position: relative;
          font-size: calc(13px + 1vw);
          opacity: 1;
          .clicNote {
              position: relative;
              opacity: 1;
          }
      }
      .ActiveImageAct {
          opacity: 0;
          transition: 2s ease-in-out;
          z-index: -1;
      }
      .imageBorder {
        position: relative;
        display: block;
            margin: 0 auto;
        width: 80vw;
        height: auto;
        opacity: 0;
        border: 0.5vw solid rgb(0, 255, 242);
        border-radius: 10px;
        overflow: hidden;

        video{
            position: relative;
            display: block;
            margin: 0 auto;
            width: 80vw;
            height: auto;
            left: 0;
            height: auto;
            opacity: 0;
            z-index: 0;
            cursor: default;
        }
      }
      .note {
          position: relative ;
          text-align: center;
          font-family: 'Orbitron', sans-serif;
          animation: glow 1s ease-in-out infinite alternate;
          z-index: 1;
      }
      .note_video {
          position: relative ;
          text-align: center;
          font-family: 'Orbitron', sans-serif;
          animation: glow 1s ease-in-out infinite alternate;
          z-index: 1;
      
        .clicK {
            position: absolute;
            top:20vw;
            font-size: calc(13px + 1vw);
            z-index: 2;  
            transition: 1s ease-in-out; 
        }
      }
      .container_ {
        position: absolute;
        margin: 4vw;
        display: block;
        width: 50vw;
        height: 10vh;
        height: auto;
        z-index: 100;
        transition: 2s ease-in-out;
    
        .ac {
            position: absolute;
            bottom: 10vh;
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
        }   
        @keyframes cursorBlink {
            49% { background-color: #00f7ff; }
            50% { background-color: transparent; }
            99% { background-color: transparent; }
        }
        
        @keyframes glow {
         from {
           text-shadow: 0 0 10px #464646, 0 0 20px #424242,
         }
        
         to {
           text-shadow: 0 0 20px rgb(77, 77, 77), 
         }
      }
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
        
      //.......................................MAX 480px.................................

      @media only screen  and (max-width: 480px) {
        .clicNote {
              position: relative;
              transform: translate(0%,-150%);
          }
          .container_ {
                 margin: 2vw;
                width: 76vw;
                height: 10vh;
            
                .ac {
                    bottom: 9vh;
                    font-size: calc(8px + 2vw);
                    
                    .cursor {
                    width: 1.5px;
                    height: calc(8px + 2vw); 
                    }
                }
            }   

          
      }  
      //.......................................MIN 576px MAX 575px.................................

      @media only screen and (min-width: 481px) and (max-width: 575px) {
         
          .clicNote {
              position: relative;
              transform: translate(0%,-150%);
          }
        .container_ {
                 margin: 2vw;
                width: 76vw;
                height: 10vh;
            
                .ac {
                    bottom: 9vh;
                    font-size: calc(8px + 2vw);
                    
                    .cursor {
                    width: 1.5px;
                    height: calc(8px + 2vw); 
                    }
                }
            } 
      }
    //.......................................MIN 576px MAX 758px.................................

      @media only screen and (min-width: 576px) and (max-width: 757px) {
        .clicNote_{
            opacity: 0;
            .clicNote{
                opacity: 0;
            }
        }
        .container_ {
                opacity: 0;
            
                .ac {
                    opacity: 0;
                    
                    .cursor {
                        opacity: 0; 
                    }
                }
            } 
      }  

      //.......................................MIN 758px MAX 991px.................................


    @media only screen and (min-width: 758px) and (max-width: 991px) {
        
    }

      //.......................................MIN 1921px .................................


    @media only screen and (min-width: 1921px) {
    }
    
    
</style>