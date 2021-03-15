<template>
  <div id="about">

        <div class="video_2">
          <video id="video_2" autoplay playsinline muted loop>
            <source src="@/assets/video/animation (1).mp4" type="video/mp4" >
          </video>
        </div>
        <div class="container-fluid con_2">
            <div class="row grid">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 NiceToMeetColl" >
                    <h3 class="NiceToMeet">
                    nice to meet you. Please take a look around!
                    </h3>  
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 TextAboutMeColl">
                    <p class="TextAboutMe">
                    I am passionate about building excellent software/design "zero to hero" that gives nice smiles 
                    in a face and effeciently improves the lives of those around worldwide.
                    I love in creating software and design for Front end "There when is end.
                        It is coming finding and searching for new styles possibilities. 
                        Perhaps from the Never-never land? ". Or games? Let do it. 
                        Would you like to know more about me "get the CV"
                    </p>
                </div>
            </div>
        </div>  
  </div>
</template>


<style lang="scss" scoped>
  #about{  
    video {
      position: relative;
      width: 120vw;
      height: 120vh;
      z-index:0;
    }

    .con_2 {
        position: relative;
        width:100vw;
        height: 100%;
        bottom:20vh;
        margin: 0;
        padding:0;
        display: block;
        
        
    
      .NiceToMeetColl{
        position: relative;
        margin: 0;
        padding: 0;
        bottom: 0;
        left: 0;
        z-index: 2;

        .NiceToMeet {
          margin: 2vw;
          padding:0;
          text-align: right;
          text-transform: uppercase;
          letter-spacing: 0.2vw;
          font-size: calc(20px + 1.7vw);
          font-weight: 100;
          font-family: 'Orbitron', sans-serif;
          color: #00f7ff;
          text-shadow: 2px 2px 2px  black;
        }
      }
      .TextAboutMeColl {
        position: relative;
        margin: 0;
        padding: 0;
        right:2.5%;
        z-index: 2;

        .TextAboutMe{
          margin: 2vw;
          padding:0;
          text-align: left;
          font-size: calc(12px + 0.5vw);
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          color: #00f7ff;
          text-shadow: 2px 2px 2px black,2px 2px 2px black;;
        }
      }
    }  
    
    
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................
      //.......................................MEDIA.................................

    //.......................................MIN 481px MAX 575px.................................

      @media only screen and (max-width: 575px) {
        
        video{
          width: 290vw;
          height: 100%;
          left: -43%;      
        } 
          .con_2 {
          .NiceToMeetColl{
            margin: 0;
            right: 0%;


            .NiceToMeet {
              margin: 5vw;
              text-align: center;
              letter-spacing: 0.2vw;
              font-size: calc(20px + 2vw);
            }
          }
          .TextAboutMeColl {
            margin: 0;
            right:0%;

            .TextAboutMe{
              margin: 8vw;
              text-align: center;
              font-size: calc(12px + 2.7vw);
            }
          }
        } 
      }
    //.......................................MIN 758px MAX 757px.................................


    @media only screen and (min-width: 576px) and (max-width: 757px) {
      video{
        width: 260vw;
        height: 100%;
        left: -39%;      
      }
      .con_2 {
        width:100vw;
        height: 100%;

    
      .NiceToMeetColl{
        margin: 0;
        left: 5%;

        .NiceToMeet {
          margin: 1vw;
          width: 90vw;
          text-align: center;
        }
      }
      .TextAboutMeColl {
        left: -40%;
        top:20vh;

        .TextAboutMe{
          margin: 1vw;
          width: 80vw;
          text-align: center;
          font-size: calc(12px + 2vw);
        }
      }
    }  
      
    }
    //.......................................MIN 758px MAX 991px.................................


    @media only screen and (min-width: 758px) and (max-width: 991px) {
      video{
        width: 200vw;
        height: 100%;
        left: -15%;      
      }
      .con_2 {
        left: -4%;
      }
      
    }
    //.......................................MIN 1921px .................................


      @media only screen and (min-width: 1921px) {
      video{
        position: relative;
        min-width: 130vw;
        min-height: 130vh;
      }
    }
    
    
    }

</style>