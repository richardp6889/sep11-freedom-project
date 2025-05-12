/*
This entity calls ig.game.loadLevel() when its triggeredBy() method is called -
usually through an EntityTrigger entity.


Keys for Weltmeister:

level
	Name of the level to load. E.g. "LevelTest1" or just "test1" will load the
	'LevelTest1' level.
*/

ig.module(
	'game.entities.finish'
)
.requires(
	'impact.entity',
    'game.entities.player'
)
.defines(function(){

EntityFinish = ig.Entity.extend({

	size: {x: 32, y: 32},
	level: null,

	triggeredBy: function( entity, trigger ) {
		if( this.entity ) {
			alert("Congrats. You've won!!!")
		}
	},

	update: function(){}
});

});
