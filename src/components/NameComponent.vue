<template>
  <div id="name">
      <div class="container-fluid con_2" > 
          <div class="row row_flex">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 HiThere">
                <h3  class="HiThere_">HI THERE,</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 Iam">
                <h3 class="Iam_">I AM</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 MyName1">
                <h3 @mouseenter="start" class="MyName_1">TOMAS</h3>
              </div>
            </div>
            <div class="row">  
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 Designer">
                <h3  class="Designer_">DESIGNER / PROGRAMMER</h3>
              </div>
            </div>
          <div class="row">
            <div  class="link col-xl-12 col-lg-12 col-md-12 col-sm-12 getCVcoll">
              <h4 @click="start" class="note_click" >Note: touch</h4> 
            </div>
            <div  class="link col-xl-12 col-lg-12 col-md-12 col-sm-12 getCVcoll">
              <h4 @mouseenter="start" class="link getCV" @click="onClick()">get CV</h4>
              <h4 @mouseenter="start" class="link getCV" @click="onClick()">click</h4> 
            </div>
          </div>
          <div class="tipping">
            <div  class="note_tipping">
            </div>
                <div class="container">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 _tipping">
                    <h1 class="ac" >
                        {{ string }} 
                        <div :class="{ cursor_tipping }">&nbsp;</div>
                    </h1>
                  </div>  
                </div>
          </div> 
      </div>
       <div class="background">
            <img @mouseenter="start" class="img_hlava" ref="head_2" src="@/assets/image/hlava.png">
            <img class="img_hlava" ref="head" src="@/assets/image/hlava_3.png">
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {TimelineMax} from "gsap"

export default {
    data(){
    return {
      string: '',
      array: ['NOTE: Do you want to get my resume? Just click "get cv" and start downloading. There you can get more information about me. let˙s go'],
      arrayIndex: 0,
      step: 0,
      cursor_tipping:false,
      scrollPosition: null
    }
  },
  mounted(){
    this.animHead()
  },
  updated() {
    this.$nextTick(function () {
      new TimelineMax()
    })
  },
  methods: {
    animHead(){
            const head = this.$refs.head

            //console.clear();

            //matchMediaList
            const smallMediaQuery = window.matchMedia("(max-width:991px)"),
                //mediumMediaQuery = window.matchMedia("(min-width:768px) and (max-width:991px)"),
                largeMediaQuery = window.matchMedia("(min-width:992px)");

            //SMALL 767px
            const smallListener = function(e){
              if(e.matches){
                    new TimelineMax({repeat:-1})
                    
                    .to(head,1, {opacity:1, ease: "none"}, 4)
                    .to(head,1, {y:5, ease: "none"}, 5)
                    .to(head,1, {y:-5, ease: "none"}, 5.5)
                    .to(head,1, {y:5, ease: "none"}, 6)
                    .to(head,1, {y:-5, ease: "none"}, 6.5)
                    .to(head,1, {y:5, ease: "none"}, 7)
                    .to(head,1, {y:-5, ease: "none"}, 7.5)
                    .to(head,1, {y:5, ease: "none"}, 8)
                    .to(head,1, {y:0, ease: "none"}, 9.5)
                    .to(head,1, {opacity:1, ease: "none"}, 10)
                
                
               // console.log('small')
              }
            };

            //MEDIUM 768-991
            // const mediumListener = function(e){
            //   if(e.matches){      
            //     console.log('medium')
            //   }
            // };GE 992px
            const largeListener = function(e){
              if(e.matches){
               const container = document.querySelectorAll(".con_2")
                  container.forEach(item => {
                  item.addEventListener("mouseenter", () => {
                    new TimelineMax({repeat:-1})
                    
                    .to(head,1, {opacity:1, ease: "none"}, 2)
                    .to(head,1, {y:5, ease: "none"}, 3)
                    .to(head,1, {y:-5, ease: "none"}, 5.5)
                    .to(head,1, {y:5, ease: "none"}, 6)
                    .to(head,1, {y:-5, ease: "none"}, 6.5)
                    .to(head,1, {y:5, ease: "none"}, 7)
                    .to(head,1, {y:-5, ease: "none"}, 7.5)
                    .to(head,1, {y:5, ease: "none"}, 8)
                    .to(head,1, {y:-5, ease: "none"}, 9.5)
                    .to(head,1, {opacity:0, ease: "none"}, 10)
                  })
                })
                //console.log('large')
              }
            };

            smallMediaQuery.addListener(smallListener);
            //mediumMediaQuery.addListener(mediumListener);
            largeMediaQuery.addListener(largeListener);

            smallListener(smallMediaQuery); 
            //mediumListener(mediumMediaQuery); 
            largeListener(largeMediaQuery);

    },

        onClick() {
              axios({
                    url: 'https://dl.dropbox.com/s/7hgeljr8xjyfgxj/Tomas_Komrska_CV.pdf?dl=1',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');

                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'Tomas_Komrska_CV.pdf');
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
.con_2 {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  text-align: center;

    .background{
      right: -1%;
      margin: 0;
      padding: 0;
      position: relative;
      z-index: 0;
      
        .img_hlava  {
            position: absolute;
            padding: 0;
            margin: 0;
            max-width: 81vw;
            max-height: auto;
            right: -1%;
            z-index: -1;
          }
    }
      // .................................... start text name................................
    .row_flex{  
      position: relative;
      display: flex;
      text-align: center;
      z-index: 2;

      .HiThere{
        position: relative;
        margin: 0;
        padding: 0;
        left: 0;
        transform: translate(-15%, 0%);
        z-index: 1;
        

        .HiThere_{
          position: relative;
          margin: 0;
          padding: 0;
          left:0;
          top: 50vh;
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
        position: relative;
        text-align: center;
        margin: 0;
        padding: 0;
        left: 0;
        transform: translate(-5%, -50%);
        z-index: 1;

        .Iam_{
          position: relative;
          text-align: center;
          margin: 0;
          padding: 0;
          left:0;
          top: 50vh;
          transform: rotate(-90deg);
          letter-spacing: 1vw;
          font-size: calc(14px + 3vw);
          font-family: 'Montserrat', sans-serif;
          color:#00f7ff;
          z-index: 1;
        }
      }
      .MyName1{
        position: relative;
        margin: 0;
        padding: 0;
        transform: translate(10%, -100%);
        z-index: 1;

        .MyName_1{
          position: relative;
          margin: 0;
          padding: 0;
          top: 35vh;
          transform: rotate(-90deg);
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
        position: relative;
        margin: 0;
        padding: 0;
        left: 0;
        transform: translate(20%, -100%);
        z-index: 1;

        .Designer_{
          position: relative;
          margin: 0;
          padding: 0;
          left:0;
          top: 4vh;
          transform: rotate(-90deg);
          font-size: calc(6px + 1.7vw);
          letter-spacing: 0.2vw;
          font-family: 'Montserrat', sans-serif;
          color:#00f7ff;
           z-index: 1;
        }
      } 
    }  
     // .................................... END text name................................ 

     // .................................... tiping Note................................ 
      .note_click {
        position: relative;
        opacity: 0;
        margin: 0;
        padding: 0;
        transform: translate(0%, -100%);
        font-size: calc(10px + 1vw);
        letter-spacing: 0.2vw;
        font-family: 'Montserrat', sans-serif;
        color:#00f7ff;
        z-index: 100;
        animation: glow 1s ease-in-out infinite alternate; 
        z-index: 100;
      }
      .getCVcoll {
        position: relative;
        margin: 0;
        padding: 0;
        transform: translate(0%, -100%);
        z-index: 100;

        .getCV{
          position: relative;
          margin: 0;
          padding: 0;
          font-size: calc(10px + 1vw);
          letter-spacing: 0.2vw;
          font-family: 'Montserrat', sans-serif;
          color:#00f7ff;
          z-index: 100;
          animation: glow 1s ease-in-out infinite alternate;
        }
      }
      .tipping {
        position: relative;
        transform: translate(50%, -20vw);
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
        width: 25vw;
        height: 10vh;
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
      // ....................................END tiping Note................................ 
        @keyframes cursorBlink {
            49% { background-color: #00f7ff; }
            50% { background-color: transparent; }
            99% { background-color: transparent; }
        }
        @keyframes glow_2 {
         from {
           text-shadow: 0 0 10px #00f7ff, 0 0 20px #f700ff,
         }
        
         to {
           text-shadow: 0 0 20px #f700ff, 
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

      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
        
      //.......................................MAX 480px.................................

      @media only screen  and (max-width: 480px) {
        
         .background{
            right: -3%;
      

        .img_hlava  {
            max-width: 203vw;
          }
          .img_hlava_3 {
            max-width: 203vw;
            opacity: 1;
          }
        }

     .row_flex{  
        position: relative;
        display: default;
        top:16vh;
        
            .HiThere{
              margin: 0;
              padding: 0;
              left: 0;
              transform: translate(0, 0);
              

              .HiThere_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 5vw);
              }
            }
            
            .Iam{
              left: 0;
              transform: translate(0,0);

              .Iam_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 5vw);
              }
            }
            .MyName1{
              transform: translate(0, 0);

              .MyName_1{
                top: 0;
                margin: 4vw;
                transform: rotate(0deg);
                font-size: calc(8px + 10vw);
                
              }
            }
            .Designer{
              left: 0;
              bottom: 12vh;
              transform: translate(0,0);

              .Designer_{
                left:0%;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(6px + 1.7vw);
              }
            } 
        
        }
        .note_click {
          opacity: 1;
        }
        .getCVcoll {
          transform: translate(0%, 0%);
        }
        .tipping {
          text-align: center;
          bottom: 35vh;
          transform: translate(0%, 0%);
          left:3%
        }
        ._tipping {
          width: 75vw;
          height: 10vh;
        }
        .ac {
          font-size: calc(5px + 2vw);
        }
      }  
      //.......................................MIN 576px MAX 575px.................................

      @media only screen and (min-width: 481px) and (max-width: 575px) {
        
         .background{
            right: -3%;
      

        .img_hlava  {
            max-width: 203vw;
          }
          .img_hlava_3 {
            max-width: 203vw;
            opacity: 1;
          }
        }

     .row_flex{  
        position: relative;
        display: default;
        top:16vh;
        
            .HiThere{
              margin: 0;
              padding: 0;
              left: 0;
              transform: translate(0, 0);
              

              .HiThere_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 5vw);
              }
            }
            
            .Iam{
              left: 0;
              transform: translate(0,0);

              .Iam_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 5vw);
              }
            }
            .MyName1{
              transform: translate(0, 0);

              .MyName_1{
                top: 0;
                margin: 4vw;
                transform: rotate(0deg);
                font-size: calc(8px + 10vw);
                
              }
            }
            .Designer{
              left: 0;
              bottom: 12vh;
              transform: translate(0,0);

              .Designer_{
                left:0%;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(6px + 1.7vw);
              }
            } 
        
        }
        .note_click {
          opacity: 1;
        }
        .getCVcoll {
          transform: translate(0%, 0%);
        }
        .tipping {
          text-align: center;
          bottom: 30vh;
          transform: translate(0%, 0%);
          left:6%
        }
        ._tipping {
          width: 75vw;
          height: 10vh;
        }
        .ac {
          font-size: calc(5px + 2vw);
        }
      }
    //.......................................MIN 576px MAX 758px.................................

      @media only screen and (min-width: 576px) and (max-width: 757px) {
        
        .background{
            right: -3%;
      

        .img_hlava  {
            max-width: 183vw;
          }
          .img_hlava_3 {
            max-width: 183vw;
            opacity: 1;
          }
        }

     .row_flex{  
        position: relative;
        display: default;
        top:16vh;
        
            .HiThere{
              margin: 0;
              padding: 0;
              left: 0;
              transform: translate(0, 0);
              

              .HiThere_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 4vw);
              }
            }
            
            .Iam{
              left: 0;
              transform: translate(0,0);

              .Iam_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 4vw);
              }
            }
            .MyName1{
              transform: translate(0, 0);

              .MyName_1{
                top: 0;
                margin: 4vw;
                transform: rotate(0deg);
                font-size: calc(8px + 9vw);
                
              }
            }
            .Designer{
              left: 0;
              bottom: 12vh;
              transform: translate(0,0);

              .Designer_{
                left:3%;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(6px + 1.7vw);
              }
            } 
        
      }
      .note_click {
          opacity: 1;
        }
      .getCVcoll {
        transform: translate(0%, 0%);
      }
      .tipping {
        bottom: 30vh;
        transform: translate(0%, 0%);
      }
      ._tipping {
        width: 75vw;
        height: 10vh;
      }
      }  

      //.......................................MIN 758px MAX 991px.................................


    @media only screen and (min-width: 758px) and (max-width: 991px) {
        
      .background{
      right: -3%;
      

        .img_hlava  {
            max-width: 143vw;
          }
          .img_hlava_3 {
            max-width: 143vw;
            opacity: 1;
          }
        }

     .row_flex{  
        position: relative;
        display: default;
        top:16vh;
        
            .HiThere{
              margin: 0;
              padding: 0;
              left: 0;
              transform: translate(0, 0);
              

              .HiThere_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 4vw);
              }
            }
            
            .Iam{
              left: 0;
              transform: translate(0,0);

              .Iam_{
                left:0;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(14px + 4vw);
              }
            }
            .MyName1{
              transform: translate(0, 0);

              .MyName_1{
                top: 0;
                margin: 4vw;
                transform: rotate(0deg);
                font-size: calc(8px + 9vw);
                
              }
            }
            .Designer{
              left: 0;
              bottom: 12vh;
              transform: translate(0,0);

              .Designer_{
                left:3%;
                top: 0;
                transform: rotate(0deg);
                font-size: calc(6px + 1.7vw);
              }
            } 
        
      }
      .note_click {
          opacity: 1;
        }
      .getCVcoll {
        transform: translate(0%, 0%);
      }
      .tipping {
        bottom: 30vh;
        transform: translate(0%, 0%);
      }
      ._tipping {
        width: 75vw;
        height: 10vh;
      }
    }

      //.......................................MIN 1921px .................................


    @media only screen and (min-width: 1921px) {
      .tipping {
        position: relative;
        transform: translate(30%, -20vw);
        z-index: 1;
      }
    }
}
</style>