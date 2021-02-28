<template>
  <div id="home" ref="hme"> 
    
    <div class="video_container" :class="{change_color: scrollPosition > 100}">
      <video  id="back_video" autoplay muted loop>
        <source src="https://www.dropbox.com/s/c5j0la3cp0hwuaa/Tunel_walking_sci-fi.mp4?dl=1" type="video/mp4">
      </video> 
    </div>

    <div class="container home">
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

    <section class="components">
    
      <section class="nameComponent">
        <NameComponent/>
      </section>

      <section class="aboutComponent">
        <AboutComponent/>
      </section>

      <section class="videoVueComponent">
        <VideoVueComponent/>
      </section>

      <section class="progresCardsComponent ">
        <ProgresCardsComponent/> 
      </section>
      
      

      


        <!-- <section class="imageComponent">
          <ImageComponent selectedIMG="ks"/>
        </section> -->
      
       
      
    </section>
  </div>
</template>

<script>

import NameComponent from '@/components/NameComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ProgresCardsComponent from '@/components/ProgresCardsComponent.vue'
import GlitchComponent from '@/components/GlitchComponent.vue'
import VideoVueComponent from '@/components/VideoVueComponent.vue'
//import ImageComponent from '@/components/ImageComponent.vue'


export default {
  name: 'Home',

  components: {
    GlitchComponent,
    ProgresCardsComponent,
    VideoVueComponent,
    //ImageComponent,
    NameComponent,
    AboutComponent
  },
  title: 'Tomas Komrska',
  
  
}             
</script>

<style lang="scss" scoped>

  #home{
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100%;
    background-color: black;
    
    .imageComponent {
      transform: scale(1.3,1.3);

    }
    .imageComponent:hover {
      background-color: rgba(0, 0, 0, 0.486);
    }
      
        #back_video {
          position: relative;
          filter: brightness(0.7) contrast(3) ;
          margin: 0;
          padding:0;
          right: 0;
          bottom: 0;
          width:100vw; 
          height: 100%;
          opacity: 1;
          transition: all 1s ease-out;
          z-index: 0;
          animation: glow_2 1s ease-in-out infinite alternate;
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
          //......................................section........................... 
        }
        .components{
          position: relative;
          width: 100vw;
          height: 100%;
          z-index: 1;
        }
    
    // .roolText {
    //   position: relative ;
    //   white-space: nowrap;
    //   top: 94rem;
    //   z-index: -1;
    // }
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
      //.......................................MEDIA.................................

      // 320px — 480px: Mobile devices
      // 481px — 768px: iPads, Tablets
      // 769px — 1024px: Small screens,iPads Pro , laptops
      // 1025px — 1200px: Desktops, large screens
      // 1201px and more —  Extra large screens, TV

      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //
      //---NOTE---Extra large screens (usually)
      //---Full HD -- 1920 x 1080
      //---WUXQA -- 1920 x 1200
      //---WQHD -- 2560 x 1440
      //--- UHD 4K --- 3840 x 2150


       //.......................................MAX 575px.................................

      @media only screen  and (max-width: 575px) {
        
        #back_video {
          right: 0;
          bottom: 0;
          min-width:283vw; 
          min-height: 100hv;
          transform: translate(-50%,0%);
        } 
      }
      //.......................................MIN 576px MAX 758px.................................

      @media only screen and (min-width: 576px) and (max-width: 758px) {
        
        #back_video {
          right: 0;
          bottom: 0;
          min-width:283vw; 
          min-height: 100hv;
          transform: translate(-50%,0%);
        } 
      }

      //.......................................MIN 758px MAX 991px.................................

      @media only screen and (min-width: 758px) and (max-width: 991px) {
      
        #back_video {
          position: relative;
          min-width:237vw; 
          min-height: 100hv;
          transform: translate(-50%,0%);
         }
      }

        
        

  
  
  }
</style>
