<template>
    <a @click="scrollTop" v-show="visible" class="bottom-right">
        <h1>uzfuzgzu</h1>
    </a>
</template>

<script>
export default {
  data () {
    return {
      visible: true
      
      
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function (e) {
      this.visible = e.window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style>

.bottom-right {
    overflow-x: default;
  color: antiquewhite;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 100;
}
</style>