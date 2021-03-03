<template>
    <div id="ImageC">
      <div class="glitchIMG">
        <img 
          class="imgSelected imgSelected--1"
          :src="activeIMG" 
          :alt="selectedIMG"
        >
        <img 
          class="imgSelected imgSelected--2"
          :src="activeIMG" 
          :alt="selectedIMG"
        >
      </div>
    </div>
</template>

<script>
export default {
  props: {
    selectedIMG:String
  },
  data() {
    return {
      
    };
  },
  computed: {
    activeIMG() {
      const nameIMG = this.selectedIMG;
      return require(`../assets/image/img/${nameIMG}.png`);
    }
  },
};
</script>

<style lang="scss" scoped> 

    @mixin flex($dir, $jus: flex-start, $ali: flex-start, $wrap: nowrap) {
      display: flex;
      flex-direction: $dir;
      justify-content: $jus;
      align-items: $ali;
      flex-wrap: $wrap;
      background-color: black;
    }

    #ImageC {
      @include flex(row, center, center);
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100%;
    }

    // .glitchIMG {
    //   opacity: 1;
    //   width: 30vw;
    //   height: 40vh;
    //   position: relative; 
    //   overflow: hidden;
    // }

    .imgSelected  {
      position: relative;
      opacity: 1;
      width: 20vw;
      height: auto;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;

      &--1:hover {
        background-color: rgba(255,255,255,1);
        background-blend-mode: luminosity;
        animation:blink 0.2s linear infinite,
                  glitchRight 3s linear infinite,
                  glitchRotate_2 3s linear infinite;
      }
      &--2:hover {
        background-color: rgba(0,0,0,0.2);
        background-blend-mode: overlay;
        animation:blink 0.2s linear infinite,
                  glitchLeft 3s linear infinite,
                  glitchRotate 3s linear infinite;
      }
    }
    @keyframes blink {
      0% { opacity: 0.25; }
      70%, 100% { opacity: 0; }
    }

    @keyframes glitchRight {
      to { left: 3%; top: -3%; }
    }

    @keyframes glitchLeft {
      to { right: 3%; bottom: -1%;}
    }
     @keyframes glitchRotate {
       to {  transform: scale(0.9,0.8);}
     }
    @keyframes glitchRotate_2 {
      to {  transform: scale(1.8,2.4);}
    }
</style>