ig.module(

	'game.entities.player'

)

.requires(

	'impact.entity'
)


.defines(function(){


EntityPlayer = ig.Entity.extend({
	animSheet: new ig.AnimationSheet( 'media/sapling.png', 75, 100 ),
	size: {x: 48, y: 48},
	collides: ig.Entity.COLLIDES.FIXED,



	init: function( x, y, settings ) {
		this.parent( x, y, settings );


		this.vel.x = -200;
		this.vel.y = 100;

	}
	this.parent();
});

});
