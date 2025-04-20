ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity',
	'plugins.box2d.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({

	size: {x: 64, y: 64},
	maxVel: {x: 400, y: 800},
	friction: {x: 800, y: 0},

	type: ig.Entity.TYPE.A,
	checkAgainst: ig.Entity.TYPE.NONE,
	collides: ig.Entity.COLLIDES.PASSIVE,

	animSheet: new ig.AnimationSheet( 'media/transparentball.png', 64, 64 ),


	health: 3,

	// These are our own properties. They are not defined in the base
	// ig.Entity class. We just use them internally for the Player
	flip: false,
	accelGround: 1200,
	accelAir: 600,
	jump: 500,
	maxHealth: 3,



	init: function( x, y, settings ) {
		this.parent( x, y, settings );


		this.addAnim( 'idle', 1, [15] );
		this.addAnim( 'run', 1, [15] );
		this.addAnim( 'jump', 1, [15] );

		ig.game.player = this;
	},


	update: function() {
	// left*right
		var accel = this.standing ? this.accelGround : this.accelAir;
		if( ig.input.state('left') ) {
			this.accel.x = -accel;
			this.flip = true;
		}
		else if( ig.input.state('right') ) {
			this.accel.x = accel;
			this.flip = false;
		}
		else {
			this.accel.x = 0;
		}

		// jump
		if( this.standing && ig.input.pressed('jump') ) {
			this.vel.y = -this.jump;
		}
		if( this.health <= 0 ) {
			this.kill();
		}





		// Move!
		this.parent();
	},

	kill: function() {
		this.parent();
		ig.game.reloadLevel();
	},










});


});
