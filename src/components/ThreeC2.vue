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
</style>