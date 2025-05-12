/*
This entity calls ig.game.loadLevel() when its triggeredBy() method is called -
usually through an EntityTrigger entity.


Keys for Weltmeister:

level
	Name of the level to load. E.g. "LevelTest1" or just "test1" will load the
	'LevelTest1' level.
*/

ig.module(
	'game.entities.nextlvc'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityNextlvc = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(0, 0, 255, 0.7)',

	size: {x: 32, y: 32},
	level: null,

	triggeredBy: function( entity, trigger ) {
		if( this.level ) {
			ig.game.loadLevelDeferred( ig.global['LevelCity'] );
		}
	},

	update: function(){}
});

});
