# Entry 5
##### 04/26/2025


Continuing from the image of the last blog I have extended the level to be 100 blocks longer and added movement to the player and unfortunately had to change the original planned design to the player now substituting it as a piece of butter and to add to the theme movement has ice physics. Dying when falling off has been added along with starting from the beginning of the level if you die. Another addition is another level that is more towards a climbing level and reaching the top is the goal. That is where my MVP ends and a suggestion I got was to change the jump key to space instead of x and how adding something towards the visual would help it better since when you spawn in there is a gap between the center and the left edge.


[Input binds](https://impactjs.com/documentation/class-reference/input)
[Help with changing levels](https://impactjs.com/forums/help/how-to-change-to-a-new-level/page/1)
[how to add conditions to entity](https://impactjs.com/documentation/class-reference/entity)


### EDP
Something I was struggling with here was things that weren't as intuitive such as connecting the different entities to form a branch on how damage should be taken and how changing a level would function. So I tried scrolling through documentation on the impact website and found nothing until I looked it up outside and where it led me to an impact forum from a decade ago with the same problem I had and that they managed to work out. I tried to use this as well as how another impact game did this to try and switch levels to see if it would work on mine. So I first tried using the one from the forum and when it didn't work I tried another method that was to use entities as interactable objects that triggered these effects. It involved creating an entity that would do something when touched by the player and have that connected to changing the level to the one wanting to be used and this was easier to understand as I learned how entity pooling in weltmeister was much easier than I had originally thought of. So the result was at the end of the first level when hitting the ground instead of staying there it transported the player to the beginning of the first one.


### Skills
#### Problem Decomposition
I had to see what was going to help me with entity interaction and what better place than to start at the official site and that gave some information on what it would look like and function. But it was only after I imported a game and broke down what each bit of code did, that I managed to understand what could be done to get the desired image of how it would work. I learned how reverse engineering would help more for understanding than it would to read about it.
#### Creativity
Finding an alternative to how the player can interact was really uplifting since I was excited about what it allowed me to do and the editor is very interactive as you can dictate what goes where and if you know what to do you are sure to make something interesting. However, the creativity was limited to some degree as when I began working on the second level I imagined jumps that required some thinking but I had to move things as the player could only jump 2 blocks and I forgot about this and changed it but not removing everything rather than changing what went where.


[Previous](entry04.md) | [Next](entry06.md)


[Home](../README.md)




