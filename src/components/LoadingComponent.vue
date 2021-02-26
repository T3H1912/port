<template>
    <div id="load">
        <div ref="cdd" id="countdown"></div>
    </div>
</template>

<script>
import {TimelineMax} from "gsap"

export default {
 data(){
     return {
         tween: new TimelineMax()
     }
 },
 mounted(){
     this.init()
 },
 methods: {
     init() {
            var timeleft = 100
            window.id = setInterval(() =>{
            if(timeleft <= 0){
                clearInterval(window.id)
                this.tween.to(this.$refs.cdd,{y:-500,opacity:0, ease: "none"})  
            }
            else {
                document.getElementById("countdown").innerHTML = timeleft
            }    
            timeleft -= 1
            }, 350)
            
     }
 }
}
</script>

<style lang="scss" scoped>
 #load{
     position: absolute;
     text-align: center; 
     width: 100vw;
     height: 100%;
     z-index: 1;

     #countdown{
         position: relative;
         
         color: red;
         font-size: 300px;
     }
 }
</style>