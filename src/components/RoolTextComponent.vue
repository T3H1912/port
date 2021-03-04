<template>
  <div id="Name">
    <div class="wrap">
   <ul class='teXt'>
      <li class='teXtitem'>
        <span>{{rollText}}</span>
      </li>
  </ul>
</div> 

  </div>
</template>

<script>
import gsap from "gsap"
import $ from 'jquery'

export default {
    name:"Name", 

    props: {
      rollText: String
    },

    data(){
        return {
            tween: new gsap.timeline({force3D:true, repeat: -1, paused: false}),
            wrapper: $(".wrap"),
            endPos:null

        }
    },
    mounted(){
        this.init()
    },
    updated(){
        this.init()
    },
    methods: {
        init(){

            const $wrap = $(".wrap")
            const $teXt = $wrap.find("ul.teXt");
            const $clonedteXt = $teXt.clone();
            let teXtWidth = 100;

            $teXt.find("li").each(function (i) {
                teXtWidth += $(this, i).outerWidth(true);
                });

            this.endPos = $wrap.width() + teXtWidth;

            $teXt.add($clonedteXt).css({
            "width" : teXtWidth + "px"
            });

            $clonedteXt.addClass("cloned").appendTo($wrap);

            const tween = this.tween
            const time = 12;

            tween.fromTo($teXt, time, {x:0}, { x: -teXtWidth, ease: "none"}, 0);
            tween.fromTo($clonedteXt, time, {x:teXtWidth}, {x:0, ease: "none"}, 0);
            tween.set($teXt, {x: teXtWidth});
            tween.to($clonedteXt, time, {x: -teXtWidth, ease: "none"}, time);
            tween.to($teXt, time, {x: 0, ease: "none"}, time);
                    
        } 
    }

}
</script>

<style lang="scss" scoped>
    
    .wrap {
            text-align: center;
            position:relative;
            overflow: hidden; 
            display: inline-block;
            width: 100vw;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 2vw;
            font-size: calc(8px + 4vw);
            color: #1f1f1f;
            animation: glow 1s ease-in-out infinite alternate;
            z-index: 0;
        }
        .sp{
            color: #ff00ea;
        }

        ul.teXt {
          position:relative;
          display:inline-block;
          list-style:none;
        }
        ul.teXt.cloned {
          position:absolute;
          top:0;
          left:0;
        }
        ul.teXt li {
          float: right;
          padding-left:20px;
        }
    
        @keyframes glow {
            from {
            text-shadow: 0 0 10px rgb(24, 24, 24), 0 0 20px rgb(24, 24, 24),
            }
            
            to {
            text-shadow: 0 0 20px rgb(26, 26, 26), 
            }
        }
        @media only screen and (min-width: 1401px) {
          .wrap {
            font-size: calc(8px + 5.8vw);
          }
        }
        @media only screen and (min-width: 1921px) {
          .wrap {
            font-size: calc(8px + 5vw);
          }
        }    
</style>