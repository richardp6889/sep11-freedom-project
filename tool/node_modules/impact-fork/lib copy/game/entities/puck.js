ig.module(
    'game.entities.puck'
)
.requires(
    'impact.entity'
)
.defines(function(){
EntityPuck = ig.Entity.extend({

    size: {x:40, y48},
    collides: ig.Entity.COLLIDES.ACTIVE,

    animSheet: new ig.AnimationSHeet( 'media/transparentball.png', 48, 48 ),

    init: function( x, y, settings ){
        this,parent( x, y, settings );

        this.addAnim( 'idle', 0.1, [0,1,2,3,4,4,4,4,3,2,1] );

        this.vel.y = -200;
        this.vel.x = 100;
    }
});

});
