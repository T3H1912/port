<template>
  <div id="des">
      <div class="container-fluid con_">
          <div class="row grigText ">
            <Blob class="blob"/>

              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 text_1">
                <h4 class="text_ anim_1">
                  Be sitting in a late evenings with a big cup of coffee and solve <span class="hover_">
                    unsolvable questions?</span>
                  Yeah, hell for someone and someone calls it <span class="hover_">fun.</span>
                </h4>
              </div> 
            
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 text_1">
                <h4 class="text_ anim_2">
                  Insanely <span class="hover_">friendly</span> with a passion for the effects of 3D 
                  animation and the creation of <span class="hover_">intuitive</span> 
                  dynamic environments.
                </h4>
              </div>

              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 text_1">
                <h4 class="text_ anim_4">
                  "At the beginning of the journey was Python and ... and...  Actualy,   that's a different story."
                </h4>
              </div>

              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 text_1">
                <h4 class="text_ anim_5">
                  OK
                </h4>
              </div>

              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 text_1">
                <h4 class="text_ anim_6">
                  Let's do it steeply
                </h4>
              </div>

              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 text_1">
                <h4 class="text_ anim_7">
                  I love programming design and <span class="hover_">free world</span>. 
                  I like to drink <span class="hover_">coffee</span>, pure and black as night.
                  I fell in love with <span class="hover_">JS, TS</span> mainly Vue with Nuxt "beautiful and
                   <span class="hover_">stubborn</span> tool".
                  Babylon.js and Three.js my best too.
                </h4>
              </div>

              <img class="img_1" src="@/assets/image/img/VT1.png" alt="END">
            </div>
      </div>
  </div>
</template>

<script>
import Blob from '@/components/Blob.vue'
import gsap from "gsap";

export default {

  components: {
    Blob,
  },

    mounted(){
        this.card()
    },
    methods: {
        card(){
            const container = document.querySelectorAll(".con_")
            const text_ = document.querySelectorAll(".text_")
            const hover_ = document.querySelectorAll(".hover_")
            const grigText = document.querySelectorAll(".text_1")

             container.forEach(item => {
               item.addEventListener("mousemove", e => {
               let x = (window.innerWidth / 2 - e.pageX) / 20
               let y = (window.innerHeight / 2 - e.pageY) / 20
               new gsap.timeline()
              .set(text_, {rotateX: x, rotateY: y })
              })
             })
            
                grigText.forEach(item => {
                    item.addEventListener("mouseenter", () => {  
                    new gsap.timeline()
                    .set(hover_, { color:'#00f7ff'})
                    })
                  })
                  grigText.forEach(item => {
                    item.addEventListener("mouseleave", () => {
                    new gsap.timeline()
                    .set(hover_, { color:'#f403e0'})
                    })
                  })
              
        }
    }
}
</script>


<style lang="scss" scoped>
    .grigText{
      position: relative;
      width: 98vw;
      justify-content: center;
      
      .img_1 {
        position: absolute;
        opacity: 0.1;
        top:35vw;
        animation:opaci  3s ease-in-out infinite alternate;
      }
  
  .text_1 {
      position: inherit;
      margin: 0.2vw;
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      color: #f403e0;
      z-index: 2;
      transition: all 0.75s ease-out;
      
      .text_{
        font-weight: 600;
        font-size: calc(10px + 1.6vw);
        transition: all 0.75s ease-out;
      }      
    }
  }
  .blob {
    position: relative;
    z-index: 100000;
  }
  .componentImg {
    position:relative;
    z-index: 1;

    .ImageComponent {
      position: relative;
    }
    
  }
</style>