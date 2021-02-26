<template>
  <div id="Name">
    <div class="tickerwrapper">
   <ul class='list'>
      <li class='listitem'>
        <span>PROGRAMMER DESIGNER PROGRAMER DESIGNER</span>
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

    data(){
        return {
            tween: new TimelineMax({force3D:true, repeat: -1, paused: false}),
            wrapper: $(".tickerwrapper"),
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
        const $tickerWrapper = $(".tickerwrapper")
        const $list = $tickerWrapper.find("ul.list");
        const $clonedList = $list.clone();
        let listWidth = 10;

        $list.find("li").each(function (i) {
            listWidth += $(this, i).outerWidth(true);
            });

        this.endPos = $tickerWrapper.width() - listWidth;

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
                
        $tickerWrapper.on("mouseenter", function(){
        tween.pause();
        }).on("mouseleave", function(){
        tween.play();
        });
    }}

}
</script>

<style lang="scss" scoped>
    
    .tickerwrapper {
            position:relative;
            overflow: hidden; 
            //display: inline-block;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 2vw;
            font-size: calc(8px + 5.2vw);
            color: #1f1f1f;
            animation: glow 1s ease-in-out infinite alternate;
            z-index: 0;
        }
        @keyframes glow {
            from {
            text-shadow: 0 0 10px rgb(24, 24, 24), 0 0 20px rgb(24, 24, 24),
            }
            
            to {
            text-shadow: 0 0 20px rgb(26, 26, 26), 
            }
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
        float: left;
        padding-left:20px;
        }
    
</style>