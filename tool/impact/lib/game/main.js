ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',

	'game.levels.main'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),


	init: function() {
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.X, 'jump' );


		this.loadLevel( LevelMain );
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		this.screen.x = this.player.pos.x - ig.system.width/2;
		this.screen.y = this.player.pos.y - ig.system.height/2;
		// Add your own, additional update code here
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
	}
});


ig.main( '#canvas', MyGame, 60, 768, 480, 1 );

});
