ig.module(
    'game.entities.puck'
)
.requires(
    'impact.entity'
)
.defines(function(){

EntityPuck = ig.Entity.extend({

    size: {x:40, y:48},
    collides: ig.Entity.COLLIDES.ACTIVE,

    animSheet: new ig.AnimationSheet( 'media/transparentball.png', 48, 48 ),

    bounciness: 1,

    init: function( x, y, settings ) {
        this,parent( x, y, settings );

       
        this.vel.y = -200;
        this.vel.x = 100;
    }
});

});
