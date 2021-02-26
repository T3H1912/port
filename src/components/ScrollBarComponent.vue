<template>
  <div id="SB">
      <div id="progressbar"></div>
      <div id="scrollpatch"></div>
  </div>
</template>

<script>
export default {

    mounted() {
        this.scrollbar()
    },

    methods:{
        scrollbar(){
        const progress = document.getElementById('progressbar')
        const totalHeight = document.body.scrollHeight - window.innerHeight

            window.onscroll = function(){
                const progressHeight = (window.pageYOffset / totalHeight) * 100
                progress.style.height = progressHeight + '%'
            }

        }
    }
}
</script>

<style lang="scss">

    #scrollpatch {
    position: fixed;
    top: 0;
    left: 0;
    width: calc( 0.5px + 0.5vw);
    height: 100%;
    background: transparent;
    z-index: 1000;
  }
  #progressbar {
    position: fixed;
    top: 0;
    right: 0;
    width: calc( 0.5px + 0.5vw);
    height: 100%;
    background:linear-gradient(to top , #000000, #3d3d3d,);
    animation: animate 5s linear infinite;
    z-index: 1000;
  }
  @keyframes animate {
    0%,100%
    {
      filter: hue-rotate(0);
    }
    50%
    {
      filter: hue-rotate(-0.15turn);
    }
  }
  #progressbar:before {
    content: '';
    position: absolute;
    top:0;
    right:0;
    width:100%;
    height:100%;
    background:linear-gradient(to top, #000000, #3d3d3d,);
    filter: blur(10px);
  }
  #progressbar:after {
    content: '';
    position: absolute;
    top:0;
    right:0;
    width:100%;
    height:100%;
    background:linear-gradient(to top, #000000, #3d3d3d,);
    filter: blur(30px);
  }
</style>