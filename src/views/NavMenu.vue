<template>
  <div id="NavMenu">
    <div class="container navCon">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12 navnav">
          <router-link id="navRouter" to="/">
            <div class="navRouter" ref="Leaveve" :class="{hoverH,hover}" @mouseenter="activ" @mouseleave="Leave" >
              <MenuEfect glitch="HOME" typing="Do you wanna go home?" />
            </div> 
          </router-link>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 navnav">
          <router-link id="navRouter" to="/">
            <div class="navRouter" :class="{hoverA,hover}" @mouseenter="activ1" @mouseleave="Leave">
              <MenuEfect glitch="ABOUT" typing="Would you like to know something about me?"/>
            </div>
          </router-link>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 navnav">
          <router-link id="navRouter" to="/Contact">
            <div class="navRouter" :class="{hoverC,hover}" @mouseenter="activ2" @mouseleave="Leave" >
              <MenuEfect glitch="CONTACT" typing="You can contact me here." />
            </div>
          </router-link>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import MenuEfect from '@/components/MenuEfect.vue'

export default {
  data(){
    return{
      hoverH:false,
      hoverA:false,
      hoverC:false,
      hover:true
    }
  },
  components:{
    MenuEfect
  },
   
  methods: {
    activ(){
       if(!this.hoverH)
         this.hoverA = true
         this.hoverC = true   
    },
    activ1(){
      if(!this.hoverA)
         this.hoverH = true
         this.hoverC = true  
    },
    activ2(){
      if(!this.hoverC)
         this.hoverH = true
         this.hoverA = true  
    },
    Leave(){
      this.hoverH = false
      this.hoverA = false
      this.hoverC = false
    }
  }  
}
</script>


<style lang="scss" scoped>

#NavMenu{
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.973);
  position: fixed;
  z-index: 0;
  
}
.navCon{
  padding: 50px;
  animation: glitch 6s 7s infinite;
}
.navnav{
  position: relative;
  margin: calc(12px + 4vw);
  z-index: 0;
  animation: glitch 5s 4s infinite;
  text-shadow: 0 0 1000px rgba(255, 0, 85, 0.267);

}
#navRouter{
  left:50%;
  transform: translate(-50%,0%);
  text-align: center;
  margin: 0px;
  text-decoration: none;
  position: absolute;
  cursor: pointer;
  transition: all .8s ease-in-out;
}

.textMenu{
  position: relative;
}
.navRouter:hover{
  transform: scale(1.1);
}
.hover{
  opacity:1;
  transition: all .8s ease-in-out;
}
.hoverH {
  opacity:0.02;
  transition: all .8s ease-in-out;
}
.hoverA {
  opacity:0.02;
  transition: all .8s ease-in-out;
}
.hoverC {
  opacity:0.02;
  transition: all .8s ease-in-out;
}

 

 @keyframes glitch {
   1%{
     transform: rotateX(10deg) skewX(90deg);
   }
   2%{
     transform: rotateX(0deg) skewX(0deg);
   }
 }


</style>