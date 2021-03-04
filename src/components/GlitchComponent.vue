<template>
  <div id="menuEfect" @mouseenter="start" @mouseleave="stop" >
    <div class="menuEfect">
        {{ mess }}
    </div>
  </div>
</template>  

<script>
export default {
  props:{
    glitch:String
  },
  data() {
    return{
    charChars:'$%#&@',
    interval:0,
    mess: this.glitch,
    mess1: this.glitch,
    }
  },
  
  methods:{ 
    start(){
      window.id = setInterval(() => {
        this.prepis()
      }, 100)
    },
    stop(){
     clearInterval(window.id)
     this.mess = this.mess1
   },
   prepis() {
        if(this.interval >= 3){
          this.interval = 0
          this.mess = this.mess1
        }
       const charSplit = this.mess.split('');
       const randomSplit = Math.floor(Math.random() * (charSplit.length));
       const randomChars = Math.floor(Math.random() * (this.charChars.length));
       if(charSplit[randomSplit] != this.charChars[randomChars] && charSplit[randomSplit] != ' '){
         charSplit[randomSplit] = this.charChars[randomChars];
       }
       this.mess = charSplit.join('')
       this.interval += 1;
   }
  }
}
</script>

<style lang="scss" scoped>

#menuEfect{
  position: relative
}
.menuEfect{
  letter-spacing: 3vw;
  
}
</style>