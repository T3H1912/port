<template>
  <div id="home" ref="hme"> 
    
    <div class="video-container">
      <video class="" id="back_video" autoplay muted loop>
        <source src="https://www.dropbox.com/s/c5j0la3cp0hwuaa/Tunel_walking_sci-fi.mp4?dl=1" type="video/mp4">
      </video> 
    </div>
    <ScrollBarComponent/> 

    <div class="container">
      <div class="row">
 
        <div class="col-lg-12 col-md-12 col-sm-12 blkb">
          <h3 class="NadText">TECHNOLOGY</h3>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 blk">
          <div class="name"><GlitchComponent glitch="CREATIVE" /></div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 art">
          <h3 class="PodText">ART, IDEAS</h3>
        </div>
      </div>   
    </div>

    <div id="fhrou_X">

    <div class="roolText">
      <NameTextComponent/>
    </div> 

    <div class="container_2">
      <div class="row">
          
          <div class="background_1"></div>
          <img @mouseenter="start" class="img_hlava" ref="head_2" src="@/assets/image/hlava.png">
          <img class="img_hlava_2" ref="head" src="@/assets/image/hlava_2.png">
          <img @mouseenter="start" class="img_ruka_2" ref="hand" src="@/assets/image/ruka_2.png">
          <div class="col-lg-12 col-md-12 col-sm-12 HiThere">
            <h3 @mouseenter="start" class="HiThere_">HI THERE,</h3>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 Iam">
            <h3 class="Iam_">I AM</h3>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 MyName1">
            <h3 @mouseenter="start" class="MyName_1">TOMAS</h3>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 Designer">
            <h3 @mouseenter="start" class="Designer_">DESIGNER / PROGRAMMER</h3>
          </div>
          <div id="curse" class=" link col-sm-6 getCVcoll">
            <h4 @mouseenter="start" class="getCV" @click="onClick()">get CV</h4>
            <h4 id="curse" class="getCV" @click="onClick()">click</h4> 
          </div>
          <div class="tipping">
            <div id="curse" class="note_tipping">
            </div>
                <div class="container">
                  <div class=" coll-sm-2 _tipping">
                    <h1 class="ac" >
                        {{ string }} 
                        <div :class="{ cursor_tipping }">&nbsp;</div>
                    </h1>
                  </div>  
                </div>
          </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="background_2"></div>
          <div id="M_NiceToMeeT" class="col-lg-6 col-md-6 col-sm-6 NiceToMeetColl" >
            <h3 class="NiceToMeet">
              nice to meet you. Please take a look around!
            </h3>  
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 TextAboutMeColl">
            <p class="TextAboutMe">
              I am passionate about building excellent software/design "zero to hero" that gives nice smiles 
              in a face and effeciently improves the lives of those around worldwide.
               I love in creating software and design for Front end "There when is end.
                It is coming finding and searching for new styles possibilities. 
                Perhaps from the Never-never land? ". just a call API or games? Let do it. 
                Would you like to know more about me "get the CV"
            </p>
          </div>
      </div>
    </div>

    <div class="video_container_2">
      <div class="video_2">
        <video id="video_2"  autoplay muted loop>
        <source src="https://www.dropbox.com/s/nk8vf0iqcaqwm3j/stutzdukt.mp4?dl=1" type="video/mp4">
      </video>
      </div>
    </div>

    <div class="container_progress">
      <div class="_progress ">
          <ProgresCardsComponent/> 
      </div>
    </div>

    <div class="container_3">
      <div class="video_3_vue">
        <VideoVueComponent/>
      </div>
    </div>

    <div class="container_Babilon">
      <div class="Babylon">
        <ImageComponent selectedIMG="VT"/>
      </div>
    </div>

    <div class="container_Babilon">
      <div class="Babylon">
        <ImageComponent selectedIMG="nohy"/>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import gsap from "gsap"

import ProgresCardsComponent from '@/components/ProgresCardsComponent.vue'
import ScrollBarComponent from '@/components/ScrollBarComponent.vue'
import GlitchComponent from '@/components/GlitchComponent.vue'
import NameTextComponent from '@/components/NameTextComponent.vue'
import VideoVueComponent from '@/components/VideoVueComponent.vue'
import ImageComponent from '@/components/ImageComponent.vue'


export default {
  name: 'Home',

  components: {
    ScrollBarComponent,
    NameTextComponent,
    GlitchComponent,
    ProgresCardsComponent,
    VideoVueComponent,
    ImageComponent,
  },
  title: 'Tomas Komrska',
  
  data(){
    return {
      string: '',
      array: ['NOTE: Do you want to get my resume? Just click "get cv" and start downloading. There you can get more information about me. let˙s go'],
      arrayIndex: 0,
      step: 0,
      cursor_tipping:false,
    }
  },
  mounted(){

    this.scrolll()
    this.animHead()
  },

  methods:{
    scrolll(){
      const BG = document.getElementById('back_video')
      window.addEventListener('scroll',() => {
        BG.style.opacity = 1 - + window.pageYOffset/250 + ''
      })
    },
    animHead(){
            const hand = this.$refs.hand
                    const head = this.$refs.head

            console.clear();

            //matchMediaList
            const smallMediaQuery = window.matchMedia("(max-width:767px)"),
                mediumMediaQuery = window.matchMedia("(min-width:768px) and (max-width:991px)"),
                largeMediaQuery = window.matchMedia("(min-width:992px)");

            //SMALL 767px
            const smallListener = function(e){
              if(e.matches){
                const container = document.querySelectorAll(".container_2")
                  container.forEach(item => {
                  item.addEventListener("mouseenter", () => {
                    new gsap.timeline({repeat:-1})
                    .to(hand,2, {y:10, x:10, ease: "none"}, 1)
                    .to(hand,2, {y:-10, x:-10, ease: "none"}, 1.5)
                    .to(hand,2, {y: 10, x: 10, ease: "none"}, 2)
                    .to(hand,2, {rotate:40,y:50,x:40, ease: "none"}, 3)
                    .to(head,1, {opacity:1, ease: "none"}, 4)
                    .to(head,1, {y:5, ease: "none"}, 5)
                    .to(head,1, {y:-5, ease: "none"}, 5.5)
                    .to(head,1, {y:5, ease: "none"}, 6)
                    .to(head,1, {y:-5, ease: "none"}, 6.5)
                    .to(head,1, {y:5, ease: "none"}, 7)
                    .to(head,1, {y:-5, ease: "none"}, 7.5)
                    .to(head,1, {y:5, ease: "none"}, 8)
                    .to(head,1, {y:-5, ease: "none"}, 9.5)
                    .to(head,1, {opacity:0, ease: "none"}, 10)
                    .to(hand,2, {rotate:0,y:10,x:10, ease: "none"}, 11)
                  })
                })
                container.forEach(item => {
                  item.addEventListener("mouseleave", () => {
                    new gsap.timeline({repeat:-1})
                    .to(head, {opacity:0, ease: "none" ,x:0, y:0})
                    .to(hand, {y:0, x:0, ease: "none"})
                  })
                })
                
                
                console.log('small')
              }
            };

            //MEDIUM 768-991
            const mediumListener = function(e){
              if(e.matches){
                
                    
                console.log('medium')
              }
            };

            //LARGE 992px
            const largeListener = function(e){
              if(e.matches){
               const container = document.querySelectorAll(".container_2")
                  container.forEach(item => {
                  item.addEventListener("mouseenter", () => {
                    new gsap.timeline({repeat:-1})
                    .to(hand,2, {y:10, x:10, ease: "none"}, 1)
                    .to(hand,2, {y:-10, x:-10, ease: "none"}, 1.5)
                    .to(hand,2, {y: 10, x: 10, ease: "none"}, 2)
                    .to(hand,2, {rotate:40,y:150,x:70, ease: "none"}, 3)
                    .to(head,1, {opacity:1, ease: "none"}, 4)
                    .to(head,1, {y:5, ease: "none"}, 5)
                    .to(head,1, {y:-5, ease: "none"}, 5.5)
                    .to(head,1, {y:5, ease: "none"}, 6)
                    .to(head,1, {y:-5, ease: "none"}, 6.5)
                    .to(head,1, {y:5, ease: "none"}, 7)
                    .to(head,1, {y:-5, ease: "none"}, 7.5)
                    .to(head,1, {y:5, ease: "none"}, 8)
                    .to(head,1, {y:-5, ease: "none"}, 9.5)
                    .to(head,1, {opacity:0, ease: "none"}, 10)
                    .to(hand,2, {rotate:0,y:10,x:10, ease: "none"}, 11)
                  })
                })
                container.forEach(item => {
                  item.addEventListener("mouseleave", () => {
                    new gsap.timeline({repeat:-1})
                    .to(head, {opacity:0, ease: "none" ,x:0, y:0})
                    .to(hand, {y:0, x:0, ease: "none"})
                  })
                })
                console.log('large')
              }
            };

            smallMediaQuery.addListener(smallListener);
            mediumMediaQuery.addListener(mediumListener);
            largeMediaQuery.addListener(largeListener);

            smallListener(smallMediaQuery); 
            mediumListener(mediumMediaQuery); 
            largeListener(largeMediaQuery);

    },

        onClick() {
              axios({
                    url: 'https://dl.dropbox.com/s/to5690x2tamxghf/pr_2.png?dl=1',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'file.png');
                     document.body.appendChild(fileLink);

                     fileLink.click();
                });
        },
          start(){
              this.cursor_tipping = true
              window.id = setInterval(() => {
                  this.text()
              }, 100)
          },
          text(){
              if( this.step < this.array[this.arrayIndex].length){
                  this.string += this.array[this.arrayIndex].charAt(this.step)
                  this.step += 1 
              }
          }
   }
}             
</script>

<style lang="scss" scoped>

  #home{
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100%;
    background-color:transparent;
    z-index: 0;

    #back_video {
    position: fixed; 
    //filter: brightness(0.6) contrast(2.9);
    right: 0;
    bottom: 0;
    min-width:100vw; 
    min-height: 100%;
    transform: translate(15%,0%);
    z-index: -1;
    
    }
    

    .red{
      position: absolute;
      justify-content: center;
      z-index: 0;

      #IconNav{
        position: fixed;
        justify-content: center;
        margin: 0;
        padding: 0;
        top: 10%;
        left: 48%;
        color: transparent;
        transform: translate(-50%, -50%);
        font-size: calc(10px + 4.2vw);
        z-index: 0;
        animation: glow 1s ease-in-out infinite alternate;

      }
    }
    .grn{
      position: absolute;
      display: block;
      padding: 0;
      margin: 0;
      width: 30vw;
      height: 100vh;
      top: 0%;
      left: 40%;
      transform: translate(50%, 0%);
      background-size: 28rem 100vh;
      background-repeat: no-repeat;
      z-index: -1;

    }
    .blkb{
      position: absolute;
      text-align: center;
      margin: 0;
      padding: 0;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;

      .NadText{
        position: relative;
        text-align: center;
        margin: 0;
        padding: 0;
        left:0;
        text-transform: uppercase;
        letter-spacing: 5vw;
        font-size: calc(14px + 1.8vw);
        font-weight: 100;
        font-family: 'Montserrat', sans-serif;
        color: #00f7ff;

      }
    }
    .blk{
      position: absolute;
      margin: 0;
      padding: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      
      .name{
        position: relative;
        text-align: center;
        margin: 0;
        padding: 0;
        left:0;
        text-transform: uppercase;
        letter-spacing: 5vw;
        font-size: calc(8px + 11vw);;
        color:transparent;
        font-family: 'Orbitron', sans-serif;
        animation: glow 1s ease-in-out infinite alternate;
        }
        @keyframes glow {
         from {
           text-shadow: 0 0 10px rgb(9, 235, 178), 0 0 20px rgb(9, 235, 178),
         }
        
         to {
           text-shadow: 0 0 20px rgb(9, 235, 178), 
         }
      }
    }
    .art{
      position: absolute;
      text-align: center;
      margin: 0;
      padding: 0;
      top: 70%;
      left: 0;
      transform: translate(-22%, -50%);
      z-index: 0;

      .PodText{
        position: relative;
        text-align: center;
        margin: 0;
        padding: 0;
        left:0;
        text-transform: uppercase;
        letter-spacing: 1vw;
        font-size: calc(14px + 1.8vw);
        font-weight: 100;
        font-family: 'Montserrat', sans-serif;
        color: #00f7ff;

      }

    }
//......................................container_2........................... 

// ....................................IMG ................................

      
      .background_1 {
        position: absolute;
        display: block;
        padding: 0;
        margin: 0;
        width:100vw;
        height: 150vh;
        left:0;
        top:40rem;
        background-color: black;
      }
      .img_hlava {
        position: absolute;
        display: block;
        padding: 0;
        margin: 0;
        width: 88vw;
        height: auto;
        top: 38rem;
        right: 0;
        z-index: 1;
      }
      .img_hlava_2 {
        position: absolute;
        display: block;
        padding: 0;
        margin: 0;
        width: 88vw;
        height: auto;
        top: 38rem;
        right: 0;
        opacity: 0;
        z-index: 1;
        animation: glow 1s ease-in-out infinite alternate;
      }
      .img_ruka_2 {
        overflow-x: hidden;
        position: absolute;
        display: block;
        padding: 0;
        margin: 0;
        width: 23.5vw;
        height: auto;
        top: 59rem;
        right: 0;
        z-index: 1;
      }
    // ....................................IMG END ................................
      .HiThere{
        position: absolute;
        text-align: center;
        margin: 0;
        padding: 0;
        top: 73rem;
        left: 0;
        transform: translate(-30%, -50%);
        z-index: 1;
        

        .HiThere_{
          position: relative;
          text-align: center;
          margin: 0;
          padding: 0;
          left:0;
          transform: rotate(-90deg);
          text-transform: uppercase;
          letter-spacing: 1vw;
          font-size: calc(14px + 3vw);
          font-family: 'Montserrat', sans-serif;
          color:#00f7ff;
          z-index: 1;
        }
      }
      
      .Iam{
        position: absolute;
        text-align: center;
        margin: 0;
        padding: 0;
        top: 80rem;
        left: 0;
        transform: translate(-26%, -50%);
        z-index: 1;

        .Iam_{
          position: relative;
          text-align: center;
          margin: 0;
          padding: 0;
          left:0;
          transform: rotate(-90deg);
          text-transform: uppercase;
          letter-spacing: 1vw;
          font-size: calc(14px + 3vw);
          font-family: 'Montserrat', sans-serif;
          color:#00f7ff;
          z-index: 1;
        }
      }
      .MyName1{
        position: absolute;
        text-align: center;
        margin: 0;
        padding: 0;
        top: 70rem;
        left: 0;
        transform: translate(-18%, -50%);
        z-index: 1;

        .MyName_1{
          position: relative;
          text-align: center;
          margin: 0;
          padding: 0;
          transform: rotate(-90deg);
          text-transform: uppercase;
          letter-spacing: 1vw;
          font-size: calc(8px + 8vw);
          color:transparent;
          font-family: 'Orbitron', sans-serif;
          background: -webkit-linear-gradient(#00f7ff, #f700ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animate_2 5s linear infinite;
          animation: glow_2 1s ease-in-out infinite alternate;
          z-index: 100;
        }
      }
      .Designer{
        position: absolute;
        text-align: center;
        margin: 0;
        padding: 0;
        top: 72rem;
        left: 0;
        transform: translate(-11%, -50%);
        z-index: 1;

        .Designer_{
          position: relative;
          text-align: center;
          margin: 0;
          padding: 0;
          left:0;
          transform: rotate(-90deg);
          text-transform: uppercase;
          font-size: calc(6px + 1.7vw);
          letter-spacing: 0.2vw;
          font-family: 'Montserrat', sans-serif;
          color:#00f7ff;
           z-index: 1;
        }
      } 
      .getCVcoll {
        position: absolute;
        text-align: center;
        margin: 0;
        padding: 0;
        top: 78rem;
        left: 0;
        transform: translate(80%, -50%);
        z-index: 1;

        .getCV{
          position: relative;
          margin: 0;
          padding: 0;
          left:0;
          font-size: calc(10px + 1vw);
          letter-spacing: 0.2vw;
          font-family: 'Montserrat', sans-serif;
          color:#00f7ff;
          z-index: 1;
          animation: glow 1s ease-in-out infinite alternate;
        }
      }
      .tipping {
        position: absolute;
        top: 77rem;
        transform: translate(70%, -50%);
        z-index: 1;
      }
      .note_tipping {
          position: absolute;
          display: flex;
          animation: glow 1s ease-in-out infinite alternate;
          z-index: 100;
      }
      ._tipping {
        position: absolute;
        width: 15rem;
        height: 15rem;
        display: flex;
        z-index: 100;
    }
      .ac {
        position: relative;
        display: block;
        font-size: calc(5px + 1vw);
        letter-spacing: none;
        font-family: 'Cutive Mono', monospace;
        color: #00f7ff;
        
        .cursor_tipping {
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
  //.................................................About.....................................


      //-----------------------------------------------container_3 video 2 ...............................
    .video_2 {
      top: 90rem;
      position: absolute;
      width: 100vh;
      height: 100%;
    }
    .background_2{
      position: absolute;
      width: 100vw;
      height: 400vh;
      background-color: black;
      left: 0;
      top: 110rem;
      z-index: 0;
    }

      .NiceToMeetColl{
        position: absolute;
        margin: 0;
        padding: 0;
        top: 134rem;
        left: 0;
        z-index: 2;

        .NiceToMeet {
          margin: 2vw;
          padding:0;
          text-align: right;
          text-transform: uppercase;
          letter-spacing: 0.2vw;
          font-size: calc(14px + 1.8vw);
          font-weight: 100;
          font-family: 'Orbitron', sans-serif;
          color: #00f7ff;
          text-shadow: 2px 2px 2px  black;
        }
      }
      .TextAboutMeColl {
        position: absolute;
        margin: 0;
        padding: 0;
        right:2%;
        top: 134rem;
        z-index: 2;

        .TextAboutMe{
          margin: 2vw;
          padding:0;
          text-align: left;
          font-size: calc(4px + 0.9vw);
          font-weight: 100;
          font-family: 'Montserrat', sans-serif;
          color: #00f7ff;
          text-shadow: 2px 2px 2px black,2px 2px 2px black;;
        }
      }

  //.................................................end about....................................
  
  //..................................Video_3_Vue...........................
    .video_3_vue {
      top: 192rem;
      position: absolute;
      width: 100vw;
      height: 100%;
      z-index: 2;
    }
    
    .roolText {
      position: relative ;
      white-space: nowrap;
      top: 94rem;
      z-index: 1;
    }
    ._progress {
      top: 135rem;
      position: absolute;
      align-content: center;
      justify-content: center;
      transform: translate(0%,50%);
      z-index: 2;
    }
    .Babylon {
      top: 235rem;
      position: relative;
      align-content: center;
      justify-content: center;
      width: 100vw;
      height: auto;
      z-index: 100;
    }
    .fhrou_X{
          top: 1660rem
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
    @keyframes glow_2 {
         from {
           text-shadow: 0 0 10px #00f7ff, 0 0 20px #f700ff,
         }
        
         to {
           text-shadow: 0 0 20px #f700ff, 
         }
      }

      
      //.......................................MEDIA.................................
      //.......................................MAX  680.................................
      @media only screen and (max-width: 680px) {
        
         #back_video {
          right: 0;
          bottom: 0;
          min-width:100%; 
          min-height: 100%;
          transform: translate(33.5%,20%);
         }
      }

      //.......................................MAX  991.................................

      @media only screen and (max-width: 991px) {
        
         // ....................................IMG ................................
          .background_1 {
            top:40rem;
          }
        // ....................................IMG END ................................
         .HiThere{
          top: 44rem;
          left: 10%;
          

          .HiThere_{
            left:0;
            transform: rotate(0deg);
          }
        }
        
        .Iam{
          top: 47rem;
          left: -7%;

          .Iam_{
            left:0;
            transform: rotate(0deg);
          }
        }
        .MyName1{
          top: 51rem;
          left: 0;

          .MyName_1{
            transform: rotate(0deg);
          }
        }
          .Designer{
          top: 54rem;
          left: 10%;

          .Designer_{
            transform: rotate(0deg);
          }
        } 
        .tipping{
          top:60rem;
        }
        .roolText {
          top: 60rem;
        }
         #video_2 {
          position: absolute;
          bottom:31rem;
          width:100%; 
          height:100%;
          left:-10%;
        }
        .NiceToMeetColl{
          top: 64rem;
          left: 8%;
          width:80%; 
          height:80%;
          .NiceToMeet {
            font-size: calc(12px + 0.9vw);
            text-align: center;
          }
        }
        .TextAboutMeColl {
          top: 69rem;
          left: 8%;
          width:80%; 
          height:80%;
          .TextAboutMe{
            font-size: calc(12px + 0.9vw);
            text-align: center;
          }
        }
        ._progress {
          top: 64rem;
        }
        .video_3_vue {
          top: 152rem;
        }

      //.......................................MAX  330.................................
        
      }
      @media only screen and (max-width: 359px) {
        
        .img_hlava {
            top: 40.5rem;
          }
          .img_hlava_2 {
            top: 40.5rem;
          }
          .img_ruka_2 {
            top: 45.6rem;
          }
          .background_1 {
            top:40rem;
          }
         .HiThere{
          top: 47rem;
          left: 10%;
          

          .HiThere_{
            left:0;
            transform: rotate(0deg);
          }
        }
        
        .Iam{
          top: 50rem;
          left: -6%;

          .Iam_{
            left:0;
            transform: rotate(0deg);
          }
        }
        .MyName1{
          top: 54rem;
          left: 0;

          .MyName_1{
            transform: rotate(0deg);
          }
        }
          .Designer{
          top: 56rem;
          left: -2%;

          .Designer_{
            transform: rotate(0deg);
          }
        } 
        .getCVcoll{
            top:65rem;
            transform: translateX(0%);
          }
          .tipping{
            top:57.6rem;
            left:-72%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 16rem;
          }
        .roolText {
          top: 60rem;
        }
        .background_2{
            top: 60rem;
          }
         #video_2 {
          position: absolute;
          bottom:27rem;
          width:130%; 
          height:130%;
          left:-14%;
        }
        .NiceToMeetColl{
          top: 82rem;
          left: 8%;
          width:80%; 
          height:80%;
          .NiceToMeet {
            font-size: calc(12px + 0.9vw);
            text-align: center;
          }
        }
        .TextAboutMeColl {
          top: 87rem;
          left: 8%;
          width:80%; 
          height:80%;
          .TextAboutMe{
            font-size: calc(12px + 0.9vw);
            text-align: center;
          }
        }
        ._progress {
          top: 82rem;
        }
        .video_3_vue {
          top: 170rem;
        }
      }

      //.......................................MIN 360 MAX 400.................................

      @media only screen and (min-width: 360px) and (max-width: 400px) {
        
        .img_hlava {
            top: 46.5rem;
          }
          .img_hlava_2 {
            top: 46.5rem;
          }
          .img_ruka_2 {
            top: 52.6rem;
          }
          .background_1 {
            top:46rem;
          }
        
         .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
        
          .Iam{
            top: 56rem;
            left: -6%;

            .Iam_{
              left:0;
              transform: rotate(0deg);
            }
          }
          .MyName1{
            top: 60rem;
            left: 0;

            .MyName_1{
              transform: rotate(0deg);
            }
          }
            .Designer{
            top: 62.2rem;
            left: -5%;

            .Designer_{
              transform: rotate(0deg);
            }
          } 
          .getCVcoll{
            top:73rem;
            transform: translateX(0%);
          }
          .tipping{
            top:64.6rem;
            left:-72%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 16rem;
          }
          .roolText {
            top: 69rem;
            
          }
          #video_2 {
            position: absolute;
            bottom:18rem;
            width:140%; 
            height:140%;
            left:-10%;
          }
          .background_2{
            top: 70rem;
          }
          .NiceToMeetColl{
            top: 88rem;
            left: 8%;
            width:80%; 
            height:80%;
            .NiceToMeet {
              text-align: center;
            }
          }
          .TextAboutMeColl {
            top: 92rem;
            left: 8%;
            width:80%; 
            height:80%;
            .TextAboutMe{
              text-align: center;
            }
        }
        ._progress {
          top: 91rem;
        }
        .video_3_vue {
          top: 178rem;
        }
          
  
      }
  //.......................................MIN 401 MAX 425.................................

      @media only screen and (min-width: 401px) and (max-width: 450px) {
        .img_hlava {
            top: 47.8rem;
          }
          .img_hlava_2 {
            top: 47.8rem;
          }
          .img_ruka_2 {
            top: 55rem;
          }
          .background_1 {
            top:46rem;
          }
        
         .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
        
          .Iam{
            top: 56rem;
            left: -6%;

            .Iam_{
              left:0;
              transform: rotate(0deg);
            }
          }
          .MyName1{
            top: 60rem;
            left: 0;

            .MyName_1{
              transform: rotate(0deg);
            }
          }
            .Designer{
            top: 62.2rem;
            left: -5%;

            .Designer_{
              transform: rotate(0deg);
            }
          } 
          .getCVcoll{
            top:73rem;
            transform: translateX(0%);
          }
          .tipping{
            top:64.6rem;
            left:-70%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 20rem;
          }
          .roolText {
            top: 67rem;
            
          }
          #video_2 {
            position: absolute;
            bottom:18rem;
            width:140%; 
            height:140%;
            left:-10%;
          }
          .background_2{
            top: 70rem;
          }
          .NiceToMeetColl{
            top: 88rem;
            left: 8%;
            width:80%; 
            height:80%;
            .NiceToMeet {
              text-align: center;
            }
          }
          .TextAboutMeColl {
            top: 92rem;
            left: 8%;
            width:80%; 
            height:80%;
            .TextAboutMe{
              text-align: center;
            }
        }
        ._progress {
          top: 91rem;
        }
        .video_3_vue {
          top: 178rem;
        }
   //.......................................MIN 451 MAX 535px.................................

      }
      @media only screen and (min-width: 451px) and (max-width: 535px) {
        .img_hlava {
            top: 45.8rem;
          }
          .img_hlava_2 {
            top: 45.8rem;
          }
          .img_ruka_2 {
            top: 54rem;
          }
          .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
        
          .Iam{
            top: 56rem;
            left: -6%;

            .Iam_{
              left:0;
              transform: rotate(0deg);
            }
          }
          .MyName1{
            top: 60rem;
            left: 0;

            .MyName_1{
              transform: rotate(0deg);
            }
          }
            .Designer{
            top: 62.2rem;
            left: -5%;

            .Designer_{
              transform: rotate(0deg);
            }
          } 
          .getCVcoll{
            top:73rem;
            transform: translateX(0%);
          }
          .tipping{
            top:64.6rem;
            left:-70%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 20rem;
          }
          .roolText {
            top: 67rem;
            
          }
          #video_2 {
            position: absolute;
            bottom:18rem;
            width:140%; 
            height:140%;
            left:-10%;
          }
          .background_2{
            top: 70rem;
          }
          .NiceToMeetColl{
            top: 88rem;
            left: 8%;
            width:80%; 
            height:80%;
            .NiceToMeet {
              text-align: center;
            }
          }
          .TextAboutMeColl {
            top: 92rem;
            left: 8%;
            width:80%; 
            height:80%;
            .TextAboutMe{
              text-align: center;
            }
        }
        ._progress {
          top: 91rem;
        }
        .video_3_vue {
          top: 178rem;
        }
  
      }

      //.......................................MIN 536px MAX 652px.................................
      @media only screen and (min-width: 536px) and (max-width: 571px) {
        .getCVcoll{
            top:70rem;
            transform: translateX(12%);
          }
      }

      @media only screen and (min-width: 536px) and (max-width: 652px) {
        .img_hlava {
            top: 41.2rem;
          }
          .img_hlava_2 {
            top: 41.2rem;
          }
          .img_ruka_2 {
            top: 51rem;
          }
          .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
        
          .Iam{
            top: 56rem;
            left: -6%;

            .Iam_{
              left:0;
              transform: rotate(0deg);
            }
          }
          .MyName1{
            top: 60rem;
            left: 0;

            .MyName_1{
              transform: rotate(0deg);
            }
          }
            .Designer{
            top: 62.2rem;
            left: -5%;

            .Designer_{
              transform: rotate(0deg);
            }
          } 
          .getCVcoll{
            top:67rem;
            left: 10%;
          }
          .tipping{
            top:64.6rem;
            left:-70%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 20rem;
          }
          .roolText {
            top: 67rem;
            
          }
          #video_2 {
            position: absolute;
            bottom:14rem;
            width:170%; 
            height:170%;
            left:-10%;
          }
          .background_2{
            top: 70rem;
          }
          .NiceToMeetColl{
            top: 88rem;
            left: 8%;
            width:80%; 
            height:80%;
            .NiceToMeet {
              text-align: center;
            }
          }
          .TextAboutMeColl {
            top: 92rem;
            left: 8%;
            width:80%; 
            height:80%;
            .TextAboutMe{
              text-align: center;
            }
        }
        ._progress {
          top: 91rem;
        }
        .video_3_vue {

          top: 178rem;
        }
  
      }

      //.......................................MIN 653px MAX 681px.................................

      @media only screen and (min-width: 653px) and (max-width: 681px) {
        .img_hlava {
            top: 3.2rem;
          }
          .img_hlava_2 {
            top: 36.2rem;
          }
          .img_ruka_2 {
            top: 47rem;
          }
          .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
        
          .Iam{
            top: 56rem;
            left: -6%;

            .Iam_{
              left:0;
              transform: rotate(0deg);
            }
          }
          .MyName1{
            top: 60rem;
            left: 0;

            .MyName_1{
              transform: rotate(0deg);
            }
          }
            .Designer{
            top: 62.2rem;
            left: -5%;

            .Designer_{
              transform: rotate(0deg);
            }
          } 
          .getCVcoll{
            top:67rem;
            left: 10%;
          }
          .tipping{
            top:64.6rem;
            left:-70%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 20rem;
          }
          .roolText {
            top: 67rem;
            
          }
          #video_2 {
            position: absolute;
            bottom:14rem;
            width:170%; 
            height:170%;
            left:-10%;
          }
          .background_2{
            top: 70rem;
          }
          .NiceToMeetColl{
            top: 88rem;
            left: 8%;
            width:80%; 
            height:80%;
            .NiceToMeet {
              text-align: center;
            }
          }
          .TextAboutMeColl {
            top: 92rem;
            left: 8%;
            width:80%; 
            height:80%;
            .TextAboutMe{
              text-align: center;
            }
        }
        ._progress {
          top: 91rem;
        }
        .video_3_vue {
          top: 178rem;
        }
  
      }
      //.......................................MAX  680.................................
      @media only screen and (max-width: 681px) {
        
         #back_video {
          right: 0;
          bottom: 0;
          min-width:100%; 
          min-height: 100%;
          transform: translate(33.5%,20%);
         }
      }

      //.......................................MIN 682px MAX ?.................................

      @media only screen and (min-width: 682px) and (max-width: 800px) {
        
        #back_video {
          right: 0;
          bottom: 0;
          min-width:100%; 
          min-height: 100%;
          transform: translate(13.5%,20%);
        } 
        .img_hlava {
            top: 36.2rem;
          }
          .img_hlava_2 {
            top: 36.2rem;
          }
          .img_ruka_2 {
            top: 47rem;
          }
          .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
        
          .Iam{
            top: 56rem;
            left: -6%;

            .Iam_{
              left:0;
              transform: rotate(0deg);
            }
          }
          .MyName1{
            top: 60rem;
            left: 0;

            .MyName_1{
              transform: rotate(0deg);
            }
          }
            .Designer{
            top: 62.2rem;
            left: -5%;

            .Designer_{
              transform: rotate(0deg);
            }
          } 
          .getCVcoll{
            top:67rem;
            left: 10%;
          }
          .tipping{
            top:64.6rem;
            left:-70%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 20rem;
          }
          .roolText {
            top: 67rem;
            
          }
          #video_2 {
            position: absolute;
            bottom:14rem;
            width:170%; 
            height:170%;
            left:-10%;
          }
          .background_2{
            top: 70rem;
          }
          .NiceToMeetColl{
            top: 88rem;
            left: 8%;
            width:80%; 
            height:80%;
            .NiceToMeet {
              text-align: center;
            }
          }
          .TextAboutMeColl {
            top: 92rem;
            left: 8%;
            width:80%; 
            height:80%;
            .TextAboutMe{
              text-align: center;
            }
        }
        ._progress {
          top: 91rem;
        }
        .video_3_vue {
          top: 178rem;
        }
          

  
      }
  }
</style>
