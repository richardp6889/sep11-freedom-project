ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	
	'game.entities.sapling'

	'game.levels.main'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),


	init: function() {
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind( ig.KEY.UP_ARROW, 'up');
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');

		this.loadLevel( LevelMain );
		// Initialize your game here; bind keys etc.
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();


		// // Add your own drawing code here
		// var x = ig.system.width/2,
		// 	y = ig.system.height/2;

		// this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
