// -------------------------------- //
//   Application : Museum AFRAME    //
//   Author : Nicholas BRUN   		//
//   File : modelScene.js			//
// -------------------------------- //

function createEnvironment(){
	
	//----- Environnement -----
	
	//Sol herbeux
	createGround(0,0,0,100,floorTickness/2,100);
	
	//Arbres
	var heightT = 7;
	var nbT = 50;
	for (var i = 0; i < nbT; i++) {
		var angle = getRandomAngle();
		if (testAngle(angle)){
			var radius = getRandomInt(-40, -30);
			var x = Math.cos(angle)*radius;
			var z = Math.sin(angle)*radius;
			createTree(x,heightT/2,z,heightT/2,heightT,1);
		} else {
			i--;
		}
	}
	heightT = 5;
	nbT = 50;
	for (var i = 0; i < nbT; i++) {
		var angle = getRandomAngle();
		if (testAngle(angle)){
			var radius = getRandomInt(-40, -30);
			var x = Math.cos(angle)*radius;
			var z = Math.sin(angle)*radius;
			createTree(x,heightT/2,z,heightT,heightT,2);
		} else {
			i--;
		}
	}
	
	//Buissons
	var heightB = 1;
	createBush(-9,heightB/2-0.15,-15.5,heightB*5,heightB);
	createBush(-4,heightB/2-0.15,-15.5,heightB*4,heightB);
	createBush(4,heightB/2-0.15,-15.5,heightB*4,heightB);
	createBush(9,heightB/2-0.15,-15.5,heightB*5,heightB);
}

function createGround(x, y, z, width, height, depth) {
	
	var ground = document.createElement('a-entity');
	ground.setAttribute('mixin', "canTeleport");
	ground.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	ground.setAttribute('position', {x: x, y: y, z: z});
	ground.setAttribute('material', {src: "#mat_grass", side: "double"});
	
	scene.appendChild(ground);
}

function createTree(x, y, z, width, height, numTree) {

	var tree01 = document.createElement('a-entity');
	tree01.setAttribute('geometry', {primitive: 'plane', height: height, width: width});
	tree01.setAttribute('position', {x: x, y: y, z: z});
	tree01.setAttribute('material', {src: "#mat_treeT"+numTree, side: "double", transparent: true, alphaTest: 0.7});
	tree01.setAttribute('rotation', {x: 0, y: 45, z: 0});
	
	scene.appendChild(tree01);
	
	var tree02 = document.createElement('a-entity');
	tree02.setAttribute('geometry', {primitive: 'plane', height: height, width: width});
	tree02.setAttribute('position', {x: x, y: y, z: z});
	tree02.setAttribute('material', {src: "#mat_treeT"+numTree, side: "double", transparent: true, alphaTest: 0.7});
	tree02.setAttribute('rotation', {x: 0, y: -45, z: 0});
	
	scene.appendChild(tree02);
}

function createBush(x, y, z, width, height) {

	var bush01 = document.createElement('a-entity');
	bush01.setAttribute('geometry', {primitive: 'plane', height: height, width: width});
	bush01.setAttribute('position', {x: x, y: y, z: z});
	bush01.setAttribute('material', {src: "#mat_bush", side: "double", transparent: true, alphaTest: 0.7});
	bush01.setAttribute('rotation', {x: 0, y: 10, z: 0});
	
	scene.appendChild(bush01);
	
	var bush02 = document.createElement('a-entity');
	bush02.setAttribute('geometry', {primitive: 'plane', height: height, width: width});
	bush02.setAttribute('position', {x: x, y: y, z: z});
	bush02.setAttribute('material', {src: "#mat_bush", side: "double", transparent: true, alphaTest: 0.7});
	bush02.setAttribute('rotation', {x: 0, y: -10, z: 0});
	
	scene.appendChild(bush02);
}