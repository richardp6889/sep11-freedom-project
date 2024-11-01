ig module (
    'game.entities.wallnut'
)
.requires(
    'impact.entity'
)
.defines(function(){

    Entity = ig.Entity.extend({

        size: {x:48, y:48}
        collides: ig.Entity.COLLIDERS.FIXED,

        animeSheet: new ig.AnimationSheet('media/wallnut.jpeg', 48, 48)

        init: function(x, y, settings );
            this.parent(x, y, settings );
            this.vel.y = 200;
            this.vel.x = 100;
        });




