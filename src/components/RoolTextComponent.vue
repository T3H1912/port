<template>
  <div id="Name">
    <div class="tickerWrapper">
   <ul class='list'>
      <li class='listitem'>
        <span>{{rollText}}</span>
      </li>
  </ul>
</div> 

  </div>
</template>

<script>
import {TimelineMax} from "gsap"
import $ from 'jquery'

export default {
    name:"Name", 

    props: {
      rollText: String
    },

    data(){
        return {
            tween: new TimelineMax({force3D:true, repeat: -1, paused: false}),
            wrapper: $(".tickerWrapper"),
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

            const $tickerWrapper = $(".tickerWrapper")
            const $list = $tickerWrapper.find("ul.list");
            const $clonedList = $list.clone();
            let listWidth = 100;

            $list.find("li").each(function (i) {
                listWidth += $(this, i).outerWidth(true);
                });

            this.endPos = $tickerWrapper.width() + listWidth;

            $list.add($clonedList).css({
            "width" : listWidth + "px"
            });

            $clonedList.addClass("cloned").appendTo($tickerWrapper);

            const tween = this.tween
            const time = 12;

            tween.fromTo($list, time, {x:0}, { x: -listWidth, ease: "none"}, 0);
            tween.fromTo($clonedList, time, {x:listWidth}, {x:0, ease: "none"}, 0);
            tween.set($list, {x: listWidth});
            tween.to($clonedList, time, {x: -listWidth, ease: "none"}, time);
            tween.to($list, time, {x: 0, ease: "none"}, time);
                    
        } 
    }

}
</script>

<style lang="scss" scoped>
    
    .tickerWrapper {
            text-align: center;
            position:relative;
            overflow: hidden; 
            display: inline-block;
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

        ul.list {
        position:relative;
        display:inline-block;
        list-style:none;
        }
        ul.list.cloned {
        position:absolute;
        top:0;
        left:0;
        }
        ul.list li {
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
          .tickerWrapper {
            font-size: calc(8px + 5.8vw);
          }
        }
        @media only screen and (min-width: 1921px) {
          .tickerWrapper {
            font-size: calc(8px + 5vw);
          }
        }    
</style>