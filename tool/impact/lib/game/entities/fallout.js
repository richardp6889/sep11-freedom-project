/*
This entity gives damage (through ig.Entity's receiveDamage() method) to
the entity that is passed as the first argument to the triggeredBy() method.

I.e. you can connect an EntityTrigger to an EntityHurt to give damage to the
entity that activated the trigger.


Keys for Weltmeister:

damage
	Damage to give to the entity that triggered this entity.
	Default: 10
*/

ig.module(
	'game.entities.fallout'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityFallout = ig.Entity.extend({
	_wmDrawBox: true,
	_wmBoxColor: 'rgba(255, 0, 0, 0.7)',

	size: {x: 32, y: 32},
	damage: 10,

	triggeredBy: function( entity, trigger ) {
		entity.receiveDamage(this.damage, this);
	},

	update: function(){}
});

});
