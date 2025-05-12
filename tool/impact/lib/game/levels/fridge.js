ig.module( 'game.levels.fridge' )
.requires( 'impact.image','game.entities.player' )
.defines(function(){
LevelFridge=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 92,
			"y": 56
		}
	],
	"layer": [
		{
			"name": "background",
			"width": 15,
			"height": 10,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/finish.png",
			"repeat": false,
			"preRender": true,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,2,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			]
		},
		{
			"name": "collision",
			"width": 15,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 48,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "main",
			"width": 15,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/counters.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,1,3],
				[0,0,0,0,0,0,0,0,0,0,0,0,3,3,3],
				[34,34,34,34,34,34,34,34,34,34,34,34,3,3,3],
				[14,14,14,14,14,14,14,14,14,14,14,14,3,3,3],
				[14,14,14,14,14,14,14,14,14,14,14,14,3,3,3]
			]
		}
	]
}/*]JSON*/;
LevelFridgeResources=[new ig.Image('media/finish.png'), new ig.Image('media/counters.png')];
});