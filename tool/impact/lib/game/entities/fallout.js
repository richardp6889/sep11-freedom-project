

ig.module(
	'game.entities.fallout'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityFallout = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, )',

	size: {x: 32, y: 32},
	damage: 10,

	triggeredBy: function( entity, trigger ) {
		entity.receiveDamage(this.damage, this);
	},

	update: function(){}
});

});
