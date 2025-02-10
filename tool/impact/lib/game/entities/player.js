ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({

	size: {x: 48, y: 48},
	collides: ig.Entity.COLLIDES.FIXED,

	animSheet: new ig.AnimationSheet( 'media/transparentball.png', 75, 100 ),

	// init: function( x, y, settings ) {
	// 	this.parent( x, y, settings );


	// 	this.vel.x = -200;
	// 	this.vel.y = 100;

	// }
	// this.parent();
});

});
