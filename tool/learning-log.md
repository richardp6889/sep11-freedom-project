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

[impact preloader](https://impactjs.com/documentation/working-with-assets)
[getting started with impactjs](https://impactjs.com/documentation/getting-started)

Having suffered but eventually figured it out made me realize that I will stick with this tool since it is pushing me hard and not letting me go to the easier more understandable kaboomjs. I will probably now start to learn how to make the assets interactable then make them interact.

10/28/24
Trying to understand what the tutorial did.
Breaking down on what each line and value given did to the interaction.

11/11/2024
This week while on slack one of the members mentioned that it was best to move everything over to replit and that is exactly what I did and I don't know exactly if I was suppose to import the repl from github or creat the php server template and carry over the file from my IDE.

11/23
Mr Muller recommended using php -S localhost:8000 to have weltmeister.html running but for me it ended up just opening the index.html of the impact folder and gave no other option to open the weltmeister. Couldn't really do much since nothing worked with replit either.

12/6
I moved to the sandbox to reset the impact and to make such the weltmesiter could work since it didn't work on the regular tool folder and it works with nothing on it but when I put a file and opened weltmeister and opened the console it gave me an error in the jQuery and I dont understand any of it.

12/26-12/31
reread most of the impactjs documentation and began creating a level for my game.

01/06
I moved the working impact folder into my projects folder and started working on the player.js. Switch the bricks for the level with a moss.

02/21
I extend the first level and added the background for it

03/01
This week I spent my time making sprite for my game and added the only one I completed which is the tree. I probably wil spend continuing sprite creation and learning what size I should scale them to so they don't look chopped if I want to reuse it later on.

03/09
This week I countinued to work on my sprite though I didn't add anything since its a multi frame image that require more though for it to be decently smooth when it moves in game.

03/17
This week I spent working on the player file


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
