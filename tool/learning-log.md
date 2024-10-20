# Tool Learning Log

## Tool: Impactjs

## Project: 2d platformer

---

### 10/17/2024:
For the first week and a half I struggle in getting to work since on the documentation it said something about having a webserver to run it and I need something with PHP and Aplache to make sure it is working. I downloaded the server and did what it said and it still didn't work because I don't think the download did anything and then I when back to the Impactjs getting started part and scrolled down to see if there was other ways of getting it to work and because of this I tried the node_module and followed the steps there it worked until the point where it said to to npm start and see the 8008 host is calling and it didn't so I realized I overcomplicated it when I saw the original impactjs folders and realized it had an html that had two line of linking code to some folders and upon using http-server the result to that html page was impactjs running with the text it works!!. I felt relieve upon seeing it but not having wasted so much time on the other options that didn't work.

### 10/18/2024
The only thing that I got to do after being exhausted from the process was knowing for my  assets it has to be put in the media folder and that when you want to access it you'd have to access that. Anthor thing was
```js
MyGame = ig.Game.extend({
    titleImage: new ig.Image( 'media/title.png' ),
```
This makes the designated image to be loaded with the script launch.}
```js
 init: function() {
        this.backgroundImage = new ig.Image( 'media/background.png' );}
```
This makes it so that if you have an image you need to create not with the game being loaded but after the game is started.

[https://impactjs.com/documentation/working-with-assets](impact preloader)
[https://impactjs.com/documentation/getting-started](getting started with impactjs)

Having suffered but eventually figured it out made me realize that I will stick with this tool since it is pushing me hard and not letting me go to the easier more understandable kaboomjs. I will probably now start to learn how to make the assets interactable then make them interact. 

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
