ig.module(
    'game.entities.paddle'
)
.requires(
    'impact.entity'
)
.defines(function(){
EntityPaddle = ig.Entity.extend({

    size: {x:64, y128},
    collides: ig.Entity.COLLIDES.FIXED,

    animSheet: new ig.AnimationSHeet( 'media/paddle.png', 64, 128 ),

    init: function( x, y, settings ){
        this,parent( x, y, settings );

        this.addAnim( 'idle', 1, [0] );
    }
});

});
