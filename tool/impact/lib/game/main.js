ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',

	'game.levels.main',
	'game.levels.vertical',
	'game.levels.desert',
	'game.levels.city',
	'game.levels.fridge',
)
.defines(function(){

MyGame = ig.Game.extend({

	gravity: 1000,
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),


	init: function() {
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.A, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.D, 'right' );
		ig.input.bind( ig.KEY.UP_ARROW, 'jump' );
		ig.input.bind( ig.KEY.SPACE, 'jump');
		ig.input.bind( ig.KEY.W, 'jump');
		this.loadLevel( LevelMain );
	},
	reloadLevel: function() {
		this.loadLevelDeferred( this.currentLevel );
	},
	loadLevel: function( data ) {
		this.currentLevel = data;
		this.parent( data );
	},
	update: function() {
		this.parent();
		this.screen.x = this.player.pos.x - ig.system.width/2;
		this.screen.y = this.player.pos.y - ig.system.height/2;
	},

	draw: function() {
		this.parent();
	}
});


ig.main( '#canvas', MyGame, 60, 768, 480, 1 );

});
