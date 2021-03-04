<template>
  <div id="ProgressCard" class="way">
      <div class="container-fluid con_ " @mouseenter="gDown" @mouseleave="gUp">
        <div class="row ">

          <div class="radiusBG">
            <div class="radius r_1" :class="{col_or}" ></div>
            <div class="radius r_2" :class="{col_or}"></div>
            <div class="radius r_3" :class="{col_or}" ></div>
            <div class="radius r_4" :class="{col_or}"></div>
          </div>  

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid " > 
              <div id="M_L1" class="layer">
                      <img class="img_1" src="@/assets/image/prog.png" alt="creative">
                    <div class="info info_L">
                      <div class="glowing">
                        <p id="title" class="title">Design</p>
                        <p id="title2">CREATIVE</p>
                        <p id="title3">INOVATIVE DESIGN</p>
                      </div>
                      <div class="ff_12R s_1">
                          <p id="ff_12">Show things in a fully new way.</p>
                      </div>
                    </div>
              </div>
            </div>  
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 grid ">
              <div id="M_L2" class="layer">
                      <img class="img_3" src="@/assets/image/pr_2.png" alt="creative">
                  <div class="info info_P">
                      <div class="glowing">
                        <p id="title" class="title">Programming</p>
                        <p id="title2">INTUITIVE</p>
                        <p id="title3">TECHNOLOGY.</p>
                      </div>
                      <div class="ff_12R ff_12_R s_2">
                          <p id="ff_12">Sometimes being successful means <br> being different</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>
            
<script>
import gsap from "gsap";

export default {

    name:"PC",

    data(){
      return{
        col_or:true
      }
    },

    mounted(){
        this.card()
    },
    methods: {
        gDown(){
          this.col_or = false
        },
        gUp(){
          this.col_or = true
        },
        card(){
            const layer = document.querySelectorAll(".layer")
            const container = document.querySelectorAll(".con_")
            const glowing = document.querySelectorAll(".glowing")
            const Image_1 = document.querySelector(".img_1")
            const Image_3 = document.querySelector(".img_3")
            const s_1 = document.querySelector(".s_1")
            const s_2 = document.querySelector(".s_2")
            const r_1 = document.querySelector(".r_1")
            const r_2 = document.querySelector(".r_2")
            const r_3 = document.querySelector(".r_3")
            const r_4 = document.querySelector(".r_4")
            

            container.forEach(item => {
              item.addEventListener("mousemove", e => {
              let x = (window.innerWidth / 2 - e.pageX) / 200
              let y = (window.innerHeight / 2 - e.pageY) / 200
              new gsap.timeline()
              .set(layer, {rotateX: y, rotateY: x })
              })
            })
            

            const smallMediaQuery = window.matchMedia("(max-width:767px)"),
                  mediumMediaQuery = window.matchMedia("(min-width:768px) and (max-width:991px)"),
                  largeMediaQuery = window.matchMedia("(min-width:992px)");

            const smallListener = function(e){
              if(e.matches){
                container.forEach(item => {
                    item.addEventListener("mouseenter", () => {  
                    new gsap.timeline()
                    .set(glowing, { color:'#fff',textShadow: "3px 3px px '#000'",})
                    .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                    .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                    .set(s_1, { translateZ:0, color: '#f403e0', rotateZ:0})
                    .set(s_2, { translateZ:0, color: '#f403e0', rotateZ:0})
                    })
                  })
                  container.forEach(item => {
                    item.addEventListener("mouseleave", () => {
                    new gsap.timeline()
                    .set(glowing, { color:'#242424'})
                    .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                    .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                    .set(s_1, { translateZ:0, color: '#242424', rotateZ:0})
                    .set(s_2, { translateZ:0,color: '#242424', rotateZ:0})
                    .set(layer, {rotateX: 0, rotateY: 0 })
                    })
                  })
                
               // console.log('small')
              }
            };

            const mediumListener = function(e){
              if(e.matches){
                container.forEach(item => {
                    item.addEventListener("mouseenter", () => {  
                    new gsap.timeline()
                    .set(glowing, { color:'#fff',})
                    .set(Image_1, {translateZ:100, rotateZ:0, x:0, y:30})
                    .set(Image_3, {translateZ:100, rotateZ:0, x:0, y:-40})
                    .set(s_1, { translateZ:50, color: '#f403e0', rotateZ:0,})
                    .set(s_2, { translateZ:50,color: '#f403e0', rotateZ:0})
                    })
                  })
                  container.forEach(item => {
                    item.addEventListener("mouseleave", () => {
                    new gsap.timeline()
                    .set(glowing, { color:'#242424'})
                    .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                    .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                    .set(s_1, { translateZ:0,color: '#242424', rotateZ:0})
                    .set(s_2, { translateZ:0, color: '#242424', rotateZ:0})
                    .set(layer, {rotateX: 0, rotateY: 0 })
                    })
                  })
                //console.log('medium')
              }
            };

            const largeListener = function(e){
              if(e.matches){
                container.forEach(item => {
                    item.addEventListener("mouseenter", () => {  
                    new gsap.timeline()
                      .set(glowing, { color:'#fff',})
                      .set(Image_1, {translateZ:200, rotateZ:-6, x:60, y:90})
                      .set(Image_3, {translateZ:150, rotateZ:10, x:-60, y:90})
                      .set(s_1, { translateZ:60, color: '#f403e0',})
                      .set(s_2, { translateZ:60, color: '#f403e0',})
                      .set(r_1, {scaleX:0.4, x:-270, y:250, opacity:0, backgroundColor:"#163328"})
                      .set(r_2, {scaleX:0.4,scaleY:0.01,y:-140,opacity:0,  x:-270, backgroundColor:"#163328"})
                      .set(r_3, {scaleX:0.4, x:270, y:250,opacity:0, backgroundColor:"#163328"})
                      .set(r_4, {scaleX:0.4,scaleY:0.01,y:-140, x:270,opacity:0, backgroundColor:"#163328"})
                    })
                  })
                  container.forEach(item => {
                    item.addEventListener("mouseleave", () => {
                    new gsap.timeline()
                      .set(glowing, { color:'#242424'})
                      .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                      .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                      .set(s_1, { translateZ:0, color: '#242424',})
                      .set(s_2, { translateZ:0, color: '#242424',})
                      .set(layer, {rotateX: 0, rotateY: 0 })
                      .set(r_1, {scaleX:1, x:0, y:0, opacity:1, backgroundColor:"#00f7ff"})
                      .set(r_2, {scaleX:1,scaleY:1,y:0, x:0,opacity:1, backgroundColor:"#00f7ff"})
                      .set(r_3, {scaleX:1, x:0, y:0,opacity:1, backgroundColor:"#00f7ff"})
                      .set(r_4, {scaleX:1,scaleY:1,y:0, x:0,opacity:1, backgroundColor:"#00f7ff"})
                    })
                  })
                //console.log('large')
              }
            };

            smallMediaQuery.addListener(smallListener);
            mediumMediaQuery.addListener(mediumListener);
            largeMediaQuery.addListener(largeListener);

            smallListener(smallMediaQuery); 
            mediumListener(mediumMediaQuery); 
            largeListener(largeMediaQuery);
        },
    }
}
</script>

<style lang="scss" scoped>

#ProgressCard {
  
  .con_ {
    position: relative;
    perspective: 1000px;
    margin-top:20vw;
    width: 101vw;
    height: auto;
    z-index: 2;
  }

  .radiusBG {

  
    .radius {
        position: absolute;
        width: 100vw;
        height: 30vh;
        background-color: #00f7ff;
        z-index: -2;
        transition: all 3s ease-out;
      }
    }
    .col_or {
      animation: animate_2 5s linear infinite;
    }

  .grid {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    text-align: center;
    align-content: center;
    justify-content: center;
    
  }
  .layer {
    position: relative;
    transform-style: preserve-3d;
    border: none;
    text-align: center;
    align-content: center;
    z-index: 1000;
  }
      .img_1 {
        position: relative;
        bottom:8.5vw ;
        width: 27vw;
        z-index: 2;
        transition: all 0.75s ease-out;
        z-index: 1;
      }
      .img_1:hover {
        animation: animate_2 5s linear infinite;
      }
      .img_3 {
        position: relative;
        bottom: 10vw;
        width: 25vw;
        z-index: 2;
        transition: all 0.75s ease-out;
        z-index: 1;
      }
      .img_3:hover {
        animation: animate_3 5s linear infinite;
      }


      
    .info {
      position: relative;
      text-align: start;
      text-align: center;
      z-index: 0;
    }
    .glowing {
      color: #242424;
      font-family: 'Montserrat', sans-serif;
      font-size: calc(13px + 2vw);
      transition: all 0.75s ease-out;
      animation: glow 1s ease-in-out infinite alternate;
    }
  }
  .info_P {
    position: relative;
    bottom: 6.5vh;
  }
  .ff_12R {
    text-align: center;
    color: #242424;
    font-size: calc(13px + 1vw);
    transition: all 0.75s ease-out;
    font-family: 'Orbitron', sans-serif;
  }
  
        @keyframes animate_2 {
            0%,100%
            {
              filter: hue-rotate(0);
            }
            50%
            {
              filter: hue-rotate(-0.65turn);
            }
        }
        @keyframes animate_3 {
            0%,100%
            {
              filter: hue-rotate(0);
            }
            50%
            {
              filter: hue-rotate(0.95turn);
            }
        }
        @keyframes glow {
         from {
           text-shadow: 0 0 10px #1d1d1d, 0 0 20px #000000,
         }
        
         to {
           text-shadow: 0 0 20px #161616, 
         }
        }
        @keyframes glow_2 {
         from {
           text-shadow: 0 0 4px #383838, 0 0 6px #4e4e4e,
         }
        
         to {
           text-shadow: 0 0 8px #000000, 
         }
        }


            //.................................MEDIA......................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
        
      //.......................................MAX 480px.................................

      @media only screen  and (max-width: 480px) {
        .text_ef{
          opacity: 0;
        }

        .container {
          position: relative;
          width: 100%;
          z-index: -2;
        }

        .radius {
            visibility: hidden;
          }
        .grid {
          width:100vw;
        }
        .layer {
          margin: 10vw;
          max-width: 100vw;
        }
        #title {
          color:#fff;
        }
        #title2 {
          color:#fff;
        }
        #title3 {
          color:#fff;
        }
            .img_1 {
              left: -5%;
              min-width: 85vw;
              z-index: 10;
            }
            .img_3 {
              min-width: 90vw;
            }
            #ff_12{
              color:#f403e0;
            }
            .componentImg{
              opacity: 0.2;
            }
        } 
      //.......................................MIN 576px MAX 575px.................................

      @media only screen and (min-width: 481px) and (max-width: 575px) {
        .text_ef{
          opacity: 0;
        }
        .container {
          position: relative;
          width: 100%;
          z-index: -2;
        }

        .radius {
            visibility: hidden;
          }
        .grid {
          width:100vw;
        }
        .layer {
          margin: 10vw;
          max-width: 100vw;
        }
        #title {
          color:#fff;
        }
        #title2 {
          color:#fff;
        }
        #title3 {
          color:#fff;
        }
            .img_1 {
              left: -5%;
              min-width: 85vw;
              z-index: 10;
            }
            .img_3 {
              min-width: 90vw;
            }
            #ff_12{
              color:#f403e0;
            }
            .componentImg{
              opacity: 0.2;
            }
        }
    //.......................................MIN 576px MAX 758px.................................

      @media only screen and (min-width: 576px) and (max-width: 757px) {
        .text_ef{
          opacity: 0;
        }
        .container {
          position: relative;
          width: 100%;
          z-index: -2;
        }

        .radius {
            visibility: hidden;
          }
        .grid {
          width:100vw;
        }
        .layer {
          max-width: 100vw;
        }
        #title {
          color:#fff;
        }
        #title2 {
          color:#fff;
        }
        #title3 {
          color:#fff;
        }
            .img_1 {
              left: -5%;
              z-index: 10;
            }
            .img_3 {
            }
            #ff_12{
              color:#f403e0;
            }
            .componentImg{
              opacity: 0.2;
            }
        }  

      //.......................................MIN 758px MAX 991px.................................


    @media only screen and (min-width: 758px) and (max-width: 991px) {
        
        .container {
          position: relative;
          width: 100%;
          z-index: -2;
        }

        .radius {
            visibility: hidden;
          }
        .grid {
          width:100vw;
        }
        .layer {
          max-width: 100vw;
        }
        #title {
          color:#fff;
        }
        #title2 {
          color:#fff;
        }
        #title3 {
          color:#fff;
        }
            .img_1 {
              left: -5%;
              max-width: 15rem;
              z-index: 10;
            }
            .img_3 {
              max-width: 15rem;
            }
            #ff_12{
              color:#f403e0;
            }
        }

        
      
</style>