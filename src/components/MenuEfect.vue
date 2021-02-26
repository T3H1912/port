<template>
  <div id="menuEfect"  @mouseenter="start" @mouseleave="stop" >
    <div class="menuEfect">
        {{ mess }}
    </div>
    <div class="container">
    <h1 class="ac">
      {{ string }}
      <div :class="{ cursor }">&nbsp;</div>
    </h1>
    </div>
  </div>
</template>  

<script>
export default {
  props:{
    glitch:String,
    typing:String
  },
  data() {
    return{
    charChars:'$%#&@',
    interval:0,
    mess: this.glitch,
    mess1: this.glitch,
    string: '',
    array: [this.typing],
    arrayIndex: 0,
    step: 0,
    cursor:false 
    }
  },
  
  methods:{ 
    start(){
      this.cursor = true
      window.id = setInterval(() => {
        this.text()
        this.prepis()
      }, 100)
    },
    stop(){
     clearInterval(window.id)
     this.mess = this.mess1
     this.cursor = false
     this.string = ''
     this.step = 0
   },
   text(){
     if( this.step < this.array[this.arrayIndex].length){
          this.string += this.array[this.arrayIndex].charAt(this.step)
          this.step += 1 
       }
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

#menuEfect{
  position: relative
}
.menuEfect{
  letter-spacing: 3vw;
  font-size: calc(17px + 6.2vw);
  font-family: 'Montserrat', sans-serif;
  color: #00ff8c;
}
  .container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0.5vw;
  }
  .ac {
    position: fixed;
    font-family: 'Montserrat', sans-serif;
    font-size: calc(5px + 1vw);
    letter-spacing: none;
    color:#fff;
    
    .cursor {
      opacity: 1;
      display:inline-block;
      margin-left: 3px;
      width: 1px;
      height: calc(5px + 1vw);
      background-color:#fff;
      animation: cursorBlink 2s infinite;
      transition: all .2s ease-in-out; 
    }
  }
  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>