<template>
<div class="ody">
  <div class="green" ref="green"></div>
  </div>
</template>

<script>
import {TimelineMax} from "gsap"
export default {

  mounted(){
    this.init()
  },
  methods:{
    init(){
      const green = this.$refs.green


      console.clear();

      //Create matchMediaList
      const smallMediaQuery = window.matchMedia("(max-width:767px)"),
          mediumMediaQuery = window.matchMedia("(min-width:768px) and (max-width:991px)"),
          largeMediaQuery = window.matchMedia("(min-width:992px)");

      //Create listener for SMALL
      const smallListener = function(e){
        if(e.matches){

          new TimelineMax()
          .to(green,1,{x:1})
          .to(green,1,{rotation:0, transformOrigin:'center'},0)
          
          console.log('small')
        }
      };

      //Create listener for MEDIUM
      const mediumListener = function(e){
        if(e.matches){
          new TimelineMax()
          .to(green,1,{xPercent:0})
          .to(green,1.5,{rotation:0, transformOrigin:'center',
                        ease: 'Back.easeOut.config(1.7)'},0)
          
          console.log('medium')
        }
      };

      //Create listener for MEDIUM
      const largeListener = function(e){
        if(e.matches){
          
          new TimelineMax()
          .to(green,1,{xPercent:25})
          .to(green,1.2,{rotation:0, transformOrigin:'center'},0)
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
  .ody{
  margin:0;
  background-color:grey;
}

.green{
  position:absolute;
  top:0;
  left:-50%;
  width:100%;
  height:200vh;
  background-color:green;
 
}
  @media only screen and (max-width: 359px) {
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
            top: 40.5rem;
          }
          .img_hlava_2 {
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 40.5rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
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
            top: 46.5rem;
          }
          .img_hlava_2 {
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 46.5rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
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
          #fhrou_X {
            position: relative;
            top:0rem;
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
            position: absolute;
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
            top: 47.8rem;
          }
          .img_hlava_2 {
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 47.8rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
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
          #fhrou_X {
            position: relative;
            top:0rem;
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
      //.......................................MIN 451px MAX 535px.................................
      @media only screen and (min-width: 451px) and (max-width: 535px) {
        .img_hlava {
            top: 45.8rem;
          }
          .img_hlava_2 {
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 45.8rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
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
          #fhrou_X {
            position: relative;
            top:0rem;
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

      //.......................................MIN 536px MAX 652px click only.................................
      @media only screen and (min-width: 536px) and (max-width: 571px) {
        .getCVcoll{
            top:70rem;
            transform: translateX(12%);
          }
      }

      @media only screen and (min-width: 536px) and (max-width: 652px) {
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
            top: 41.2rem;
          }
          .img_hlava_2 {
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 41.8rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
          }
          .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
          #fhrou_X {
            position: relative;
            top:0rem;
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
            top: 36.2rem;
          }
          .img_hlava_2 {
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 36.2rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
          }
          .HiThere{
          top: 53em;
          left: 10%;
          

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
          #fhrou_X {
            position: relative;
            top:0rem;
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
      //.......................................MAX  680 start_video.................................
      @media only screen and (max-width: 681px) {
        
         #back_video {
          right: 0;
          bottom: 0;
          min-width:100%; 
          min-height: 100%;
          transform: translate(33.5%,20%);
         }
      }

      //.......................................MIN 682px MAX 758px.................................

      @media only screen and (min-width: 682px) and (max-width: 758px) {
        
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
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 36.2rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
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

      //.......................................MIN 758px MAX 1023px.................................

      @media only screen and (min-width: 758px) and (max-width: 991px) {
        
        .background_1{
           display: none;
        }
        .img_hlava {
            top: 56.2rem;
          }
          .img_hlava_2 {
            display: none;
          }
          .img_hlava_3 {
            position: absolute;
            display: block;
            padding: 0;
            margin: 0;
            width: 88vw;
            height: auto;
            top: 56.2rem;
            right: 0;
            opacity: 1;
            z-index: 1;
            animation: glow 1s ease-in-out infinite alternate;
          }
          .img_ruka_2 {
            display: none;
          }
          .HiThere{
          top: 65em;
          left: 10%;

            .HiThere_{
              left:0;
              transform: rotate(0deg);
            }
          }
        
          .Iam{
            top: 69rem;
            left: -6%;

            .Iam_{
              left:0;
              transform: rotate(0deg);
            }
          }
          .MyName1{
            top: 76rem;
            left: 0;

            .MyName_1{
              transform: rotate(0deg);
            }
          }
            .Designer{
            top: 82.2rem;
            left: -5%;

            .Designer_{
              transform: rotate(0deg);
            }
          } 
          .getCVcoll{
            top:87rem;
            left: 10%;
          }
          .tipping{
            top:84.6rem;
            left:-70%;
          }
          .ac{
            font-size: 2.5vh;
          }
          ._tipping{
            width: 20rem;
          }
          .roolText {
            top: 87rem;
            
          }
          #video_2 {
            position: absolute;
            bottom:-4rem;
            width:170%; 
            height:170%;
            left:-10%;
          }
          .background_2{
            top: 70rem;
          }
          .NiceToMeetColl{
            padding: 3rem;
            top: 100rem;
            width:100vw; 
            height:auto;
            .NiceToMeet {
              text-align: center;
              font-size: 5vh
            }
          }
          .TextAboutMeColl {
            top: 122rem;
            left: 10%;
            width:80%; 
            height:auto;
            .TextAboutMe{
              text-align: center;
              font-size: 2vh
            }
        }
        ._progress {
          top: 116rem;
        }
        .video_3_vue {
          top: 210rem;
        }
      }
</style>