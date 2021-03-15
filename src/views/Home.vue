<template>
  <div id="home" ref="hme"> 
    <!-- <ScrollCore class="scroll"/> -->
    <div class="video_container" ref="vB">
      <video  id="back_video" autoplay playsinline muted loop>
        <source src="../assets/video/Tunel_walking_sci-fi_2 (1).mp4" type="video/mp4">
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

      <section class="desComponent">
        <DesComponent/>-
      </section> 

      <section class="desComponent">
        <RoolTextComponent rollText="Thanks for watching"/>-
      </section> 
        <b-container>
          <b-row>
            <b-col lg="12" md="12" sm="12" class="git">
              <a class="link" href="https://github.com/T3H1912/port" target="_blank" ><b-icon icon="github"></b-icon> this page</a>
            </b-col>
          </b-row>
        </b-container>
      <section class="EmailComponent">
        <EmailComponent />-
      </section>
      <b-container>
        <b-row>
          <b-col lg="12" md="12" sm="12" class="footer">
            <h4 class="footer_H">
              <img class="img_3" src="@/assets/image/logo.png" alt="creative">
              &nbsp; The web is still under construction. Made with Vue. Tomas Komrska &nbsp; 
              <img class="img_3" src="@/assets/image/logo.png" alt="creative">
            </h4>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>

import NameComponent from '@/components/NameComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import ProgresCardsComponent from '@/components/ProgresCardsComponent.vue'
import GlitchComponent from '@/components/GlitchComponent.vue'
import VideoVueComponent from '@/components/VideoVueComponent.vue'
import DesComponent from '@/components/DesComponent.vue'
import RoolTextComponent from '@/components/RoolTextComponent.vue'
import EmailComponent from '@/components/EmailComponent.vue'
//import ScrollCore from '@/components/ScrollCore.vue'


export default {
  name: 'Home',

  components: {
    GlitchComponent,
    ProgresCardsComponent,
    VideoVueComponent,
    NameComponent,
    AboutComponent,
    DesComponent,
    RoolTextComponent,
    EmailComponent,
    //ScrollCore
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
          z-index: 0;
        }
        // .scroll {
        //   position: fixed;
        //   z-index: 100;
        // }
        .home {
          text-align: center;

          .blkb{
            position: absolute;
            margin: 0;
            padding: 0;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;

            .NadText{
              position: relative;
              margin: 0;
              padding: 0;
              left:0;
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
              
          }
          .art{
            position: absolute;
            margin: 0;
            padding: 0;
            top: 70%;
            left: 0;
            transform: translate(-22%, -50%);
            z-index: 0;

            .PodText{
              position: relative;
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
        }  
        .components{
          position: relative;
          width: 100vw;
          height: 100%;
          background-color: black;
          z-index: 1;
        }
        .git {
          position: relative;
          padding: 0;
          margin: 0;

          a {
            position: absolute;
            right: 5%;
            font-size: calc(6px + 0.5vw);
            text-decoration: none;
            cursor: none;
            color: #00f7ff;;
            z-index: 1;

          }
        }
        .footer {
          background: black;
          padding: 0;
          margin: 0;
          text-align: center;

          .footer_H {
            font-size: calc(6px + 0.3vw)
          }
          .img_3 {
            width: 0.9vw;
            height: auto;
          }
        }

        

        @keyframes glow {
            from {
              text-shadow: 0 0 10px rgb(9, 235, 178), 0 0 20px rgb(9, 235, 178),
            }
            
            to {
              text-shadow: 0 0 20px rgb(9, 235, 178), 
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
