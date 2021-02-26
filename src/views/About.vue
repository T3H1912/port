<template>
    <div id="text">
        <h1>Animation Using the Render Loop
Animation Using the Render Loop
Babylon.js allows to change an objects properties immediately before or after a frame is rendered. This is an alternative way of producing animation in a scene. The complex animation lets you choose everything at each frame of the animation (each tick). The code computed at run time must be located in this function:

scene.registerBeforeRender(function () {
  //Your code here
});
The function set by registerBeforeRender() is run before every frame (usually ~60 times per second) so animation is created by making small changes to object properties very quickly.

A simple demonstration of complex animation can be found in the playground here:

Render Loop Animation Example
This function can be very useful for complex animation like games, where characters have to move depending on many parameters.

Don’t hesitate to combine all those types of animations. If well done, it’s very powerful.

Don't forget to visit our API documentation in order to learn more about the Babylon.js Animation and Babylon.js Animatable classes.</h1>
    </div>
</template>


<style lang="scss" scoped>
 #text{
     width: 100vw;
     height: 100%;
 }
</style>