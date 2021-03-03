<template>
  <div class="main-image">
      <img :src="mainImageSrc"> 
    <div class="image-list"></div>
   <div v-for="img in images" :key="img" class="item"><img src="img.image"></div>
  </div>
</template>

<script>
export default {
  name: 'Images',
  data () {
    return {
      images: [],
      mainImageSrc: null
    }
  },
  methods: {
  },
  created () {
    let self = this
    this.images = [
       {
          id: '23',
          image: 'http://example.com/img.jpg'
       },
       {
          id: '32',
          image: 'http://example.com/img.jpg'
       },
       {
          id: '45',
          image: 'http://example.com/img.jpg'
       },
    ]

    setInterval(function(){ 
        self.mainImageSrc = self.images[Math.floor(Math.random()*self.images.length)].image;
    }, 5000);

  }
}
</script>

<style lang="scss" scoped> 

    @mixin flex($dir, $jus: flex-start, $ali: flex-start, $wrap: nowrap) {
      display: flex;
      flex-direction: $dir;
      justify-content: $jus;
      align-items: $ali;
      flex-wrap: $wrap;
    }

    #ImageC {
      @include flex(row, center, center);
      margin: 0;
      padding: 0;
      width: 100vw;
      height:auto;
    }

    .glitchIMG {
      width: 80vw;
      height: 70vh;
      position: relative; 
      overflow: hidden;
    }

    .imgSelected  {
      width: 80vw;
      height: auto;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;

    }
</style>