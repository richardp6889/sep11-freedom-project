ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({

	size: {x:64, y:128},
	collides: ig.Entity.COLLIDES.FIXED,

	animSheet: new ig.AnimationSheet( 'media/sapling.png', 64, 128 ),

	init: function( x, y, settings ) {
		this.parent( x, y, settings );

		this.addAnim( 'idle', 1, [0] );
	}
});

});
