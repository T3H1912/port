<template>
  <div id="ProgressCard" class="way">
      <div class="container" @mouseenter="gDown" @mouseleave="gUp">
        <div class="row justify-content-center">
          <div class="radius r_1" :class="{col_or}" ></div>
          <div class="radius r_2" :class="{col_or}"></div>
          <div class="radius r_3" :class="{col_or}" ></div>
          <div class="radius r_4" :class="{col_or}"></div>

          <div class=" grid col-6 " >
              <div id="M_L1" class="layer">
                      <img class="img_1" src="@/assets/image/prog.png" alt="">
                    <div class="info info_L">
                      <div class="glowing">
                        <h1 id="title" class="title">Design</h1>
                        <h3 id="title2">CREATIVE</h3>
                        <h3 id="title3">INOVATIVE DESIGN</h3>
                      </div>
                      <div class="ff_123R s_1">
                          <p id="ff_12">Show things in a fully new way. Sometimes being successful means being different </p>
                      </div>
                    </div>
              </div>
            </div>  

            <div class=" grid col-6 ">
              <div id="M_L2" class="layer">
                      <img class="img_3" src="@/assets/image/pr_2.png" alt="">
                  <div class="info info_P">
                      <div class="glowing">
                        <h1 id="title" class="title">Programming</h1>
                        <h3 id="title2">INTUITIVE</h3>
                        <h3 id="title3">TECHNOLOGY.</h3>
                      </div>
                      <div class="ff_123R s_2">
                          <p id="ff_12">sidfhsudhf sdkfhhshf sdifshdikf sdkfhhskdjfksdhfsd fskjdfbksjdhfsdf sdjkfsjdhf </p>
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
            const container = document.querySelectorAll(".container")
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
            
            console.clear();

            //Create matchMediaList
            const smallMediaQuery = window.matchMedia("(max-width:767px)"),
                mediumMediaQuery = window.matchMedia("(min-width:768px) and (max-width:991px)"),
                largeMediaQuery = window.matchMedia("(min-width:992px)");

            //Create listener for SMALL
            const smallListener = function(e){
              if(e.matches){
                container.forEach(item => {
                    item.addEventListener("mouseenter", () => {  
                    new gsap.timeline()
                    .set(glowing, { color:'#fff'})
                    .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                    .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                    .set(s_1, { translateZ:0, y:0,x:0, color: '#f403e0', rotateZ:0})
                    .set(s_2, { translateZ:0, y:0,x:0, color: '#f403e0', rotateZ:0})
                    })
                  })
                  container.forEach(item => {
                    item.addEventListener("mouseleave", () => {
                    new gsap.timeline()
                    .set(glowing, { color:'#242424'})
                    .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                    .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                    .set(s_1, { translateZ:0, y:0,x:0, color: '#242424', rotateZ:0})
                    .set(s_2, { translateZ:0, y:0,x:0, color: '#242424', rotateZ:0})
                    .set(layer, {rotateX: 0, rotateY: 0 })
                    })
                  })
                
                console.log('small')
              }
            };

            //Create listener for MEDIUM
            const mediumListener = function(e){
              if(e.matches){
                container.forEach(item => {
                    item.addEventListener("mouseenter", () => {  
                    new gsap.timeline()
                    .set(glowing, { color:'#fff',})
                    .set(Image_1, {translateZ:100, rotateZ:0, x:0, y:30})
                    .set(Image_3, {translateZ:100, rotateZ:0, x:0, y:-40})
                    .set(s_1, { translateZ:50, y:0,x:0, color: '#f403e0', rotateZ:0,})
                    .set(s_2, { translateZ:50, y:0, x:0, color: '#f403e0', rotateZ:0})
                    })
                  })
                  container.forEach(item => {
                    item.addEventListener("mouseleave", () => {
                    new gsap.timeline()
                    .set(glowing, { color:'#242424'})
                    .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                    .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                    .set(s_1, { translateZ:0, y:0,x:0, color: '#242424', rotateZ:0})
                    .set(s_2, { translateZ:0, y:0,x:0, color: '#242424', rotateZ:0})
                    .set(layer, {rotateX: 0, rotateY: 0 })
                    })
                  })
                console.log('medium')
              }
            };

            //Create listener for Large
            const largeListener = function(e){
              if(e.matches){
                container.forEach(item => {
                    item.addEventListener("mouseenter", () => {  
                    new gsap.timeline()
                    .set(glowing, { color:'#fff',})
                    .set(Image_1, {translateZ:200, rotateZ:-6, x:60, y:90})
                    .set(Image_3, {translateZ:150, rotateZ:10, x:-60, y:90})
                    .set(s_1, { translateZ:60, y:-450,x:530, color: '#f403e0',})
                    .set(s_2, { translateZ:60, y:-450, x:-530, color: '#f403e0',})
                    .set(r_1, {scaleX:0.4, x:-270, y:250, backgroundColor:"#163328"})
                    .set(r_2, {scaleX:0.4,scaleY:0.01,y:-140, x:-270, backgroundColor:"#163328"})
                    .set(r_3, {scaleX:0.4, x:270, y:250, backgroundColor:"#163328"})
                    .set(r_4, {scaleX:0.4,scaleY:0.01,y:-140, x:270, backgroundColor:"#163328"})
                    })
                  })
                  container.forEach(item => {
                    item.addEventListener("mouseleave", () => {
                    new gsap.timeline()
                    .set(glowing, { color:'#242424'})
                    .set(Image_1, {translateZ:0, rotateZ:0, x:0, y:0})
                    .set(Image_3, {translateZ:0, rotateZ:0, x:0 , y:0})
                    .set(s_1, { translateZ:0, y:0,x:0, color: '#242424',})
                    .set(s_2, { translateZ:0, y:0,x:0, color: '#242424',})
                    .set(layer, {rotateX: 0, rotateY: 0 })
                    .set(r_1, {scaleX:1, x:0, y:0, backgroundColor:"#00f7ff"})
                    .set(r_2, {scaleX:1,scaleY:1,y:0, x:0, backgroundColor:"#00f7ff"})
                    .set(r_3, {scaleX:1, x:0, y:0, backgroundColor:"#00f7ff"})
                    .set(r_4, {scaleX:1,scaleY:1,y:0, x:0, backgroundColor:"#00f7ff"})
                    })
                  })
                console.log('large')
              }
            };

            //Add the listener to MediaQueryList
            smallMediaQuery.addListener(smallListener);
            mediumMediaQuery.addListener(mediumListener);
            largeMediaQuery.addListener(largeListener);

            // Initialise onload
            smallListener(smallMediaQuery); 
            mediumListener(mediumMediaQuery); 
            largeListener(largeMediaQuery);
        }
    }
}
</script>

<style lang="scss" scoped>

#ProgressCard {
  width:100vw;
  height: 200vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  z-index: 1000;
  color: #242424;
  font-family: 'Montserrat', sans-serif;
  background-color: black;

  

  .container {
    position: relative;
    width: 100%;
    left:0;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .radius {
      position: absolute;
      top:15vh;
      width: 100vw;
      height: 30vh;
      background-color: #00f7ff;
      z-index: -2;
      transition: all 3s ease-out;
    }
    .col_or {
      animation: animate_2 5s linear infinite;
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
  .grid {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    text-align: center;
    justify-content: center;
    
  }
  .layer {
    position: relative;
    transform-style: preserve-3d;
    //width:50vw;
    border: none;
  }
      .img_1 {
        position: relative;
        padding-top: 2rem;
        width: 23rem;
        left: 5%;
        z-index: 2;
        transition: all 0.75s ease-out;
        z-index: 1;
      }
      .img_1:hover {
        animation: animate_2 5s linear infinite;
      }
      .img_3 {
        position: relative;
        width: 22rem;
        z-index: 2;
        transition: all 0.75s ease-out;
        z-index: 1;
      }
      .img_3:hover {
        animation: animate_3 5s linear infinite;
      }
    .info {
      position: relative;
      padding-left: 1.5vw;
      padding-right: 1.5vw;
      text-align: start;
      text-align: center;
      z-index: 0;
    }
    .info_L {
      margin-top: 2rem;
    }
    .glowing {
      transition: all 0.75s ease-out;
      animation: glow 1s ease-in-out infinite alternate;
    }
  }
  .ff_123R {
    display: flex;
    width: 25rem;
    transition: all 0.75s ease-out;
    font-family: 'Orbitron', sans-serif;
  }

@keyframes glow {
         from {
           text-shadow: 0 0 10px #494848, 0 0 20px #353434,
         }
        
         to {
           text-shadow: 0 0 20px #161616, 
         }
      }


//.................................MEDIA......................................



      @media only screen and (max-width: 991px) {
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

        @media only screen and (max-width: 450px) {
          .ff_123R {
            width: 18rem;
          }

        }
      
</style>