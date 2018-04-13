// -------------------------------- //
//   Application : Museum AFRAME    //
//   Author : Nicholas BRUN   		//
//   File : modelMuseum.js			//
// -------------------------------- //

var wallHeight = 3.0;
var wallTickness = 0.2;
var floorTickness = 0.1;

function createMuseum(){

	//----- Rez de chaussée ------
	var offsetRDC = wallHeight/2;
	var offsetRDCfloor = 0;

	//Sol
	createFloor(0,offsetRDCfloor,0,30,floorTickness,30);
	//Mur est
	createWall(15,offsetRDC,0,30,wallHeight,wallTickness,true) ;
	//Mur ouest
	createWall(-15,offsetRDC,0,30,wallHeight,wallTickness,true) ;
	//Mur nord
	createWall(0,offsetRDC,15,30,wallHeight,wallTickness,false) ;
	//Mur sud
	createWall(-13,offsetRDC,-15,4,wallHeight,wallTickness,false) ;
	createGlassWall(-9,offsetRDC,-15,4,wallHeight,wallTickness,false,false) ;
	createWall(-6,offsetRDC,-15,2,wallHeight,wallTickness,false) ;
	createGlassWall(-4,offsetRDC,-15,2,wallHeight,wallTickness,false,false) ;
	createWall(-2,offsetRDC,-15,2,wallHeight,wallTickness,false) ;
	createWall(2,offsetRDC,-15,2,wallHeight,wallTickness,false) ;
	createGlassWall(4,offsetRDC,-15,2,wallHeight,wallTickness,false,false) ;
	createWall(6,offsetRDC,-15,2,wallHeight,wallTickness,false) ;
	createGlassWall(9,offsetRDC,-15,4,wallHeight,wallTickness,false,false) ;
	createWall(13,offsetRDC,-15,4,wallHeight,wallTickness,false) ;
	//Murs interieurs sur Ox
	createWall(0,offsetRDC,0,30,wallHeight,wallTickness,false) ;
	//Escaliers et ascensceur
	createStairs(-13,offsetRDCfloor,-5,4,wallHeight,5,wallTickness,10) ;
	createElevator(13,offsetRDC,-2,4,wallHeight, 4,wallTickness,floorTickness);

	//----- Mezanine -----
	var offsetMEZ = offsetRDC + wallHeight;
	var offsetMEZfence = offsetMEZ - wallHeight/4;
	var offsetMEZfloor = offsetMEZ - wallHeight/2;

	//Sol
	createFloor(0,offsetMEZfloor,7.5,30,floorTickness,15);
	//Barriere
	createFence(0,offsetMEZfence,0,22,wallHeight/2,false,true);
	//Mur est
	createWall(15,offsetMEZ,0,30,wallHeight,wallTickness,true) ;
	//Mur ouest
	createWall(-15,offsetMEZ,0,30,wallHeight,wallTickness,true) ;
	//Mur nord
	createWall(0,offsetMEZ,15,30,wallHeight,wallTickness,false) ;
	//Mur sud
	createWall(-13,offsetMEZ,-15,4,wallHeight,wallTickness,false) ;
	createGlassWall(-9,offsetMEZ,-15,4,wallHeight,wallTickness,false,true) ;
	createWall(-6,offsetMEZ,-15,2,wallHeight,wallTickness,false) ;
	createGlassWall(-4,offsetMEZ,-15,2,wallHeight,wallTickness,false,true) ;
	createWall(0,offsetMEZ,-15,6,wallHeight,wallTickness,false) ;
	createGlassWall(4,offsetMEZ,-15,2,wallHeight,wallTickness,false,true) ;
	createWall(6,offsetMEZ,-15,2,wallHeight,wallTickness,false) ;
	createGlassWall(9,offsetMEZ,-15,4,wallHeight,wallTickness,false,true) ;
	createWall(13,offsetMEZ,-15,4,wallHeight,wallTickness,false) ;

	//----- Avant toit -----
	var offsetAVT = offsetMEZ + 3*wallHeight/4;

	//Mur est
	createWall(15,offsetAVT,0,30,wallHeight/2,wallTickness,true) ;
	//Mur ouest
	createWall(-15,offsetAVT,0,30,wallHeight/2,wallTickness,true) ;
	//Mur nord
	createWall(0,offsetAVT,15,30,wallHeight/2,wallTickness,false) ;
	//Mur sud
	createWall(0,offsetAVT,-15,30,wallHeight/2,wallTickness,false) ;

	//----- Toit -----
	var offsetTOIT = offsetAVT + wallHeight/4;
	
	//Structure
	createRoof(0,offsetTOIT,-6,30,floorTickness,18);
	createRoof(-12,offsetTOIT,7,6,floorTickness,8);
	createGlassRoof(-5.5,offsetTOIT,7,7,floorTickness,8);
	createRoof(0,offsetTOIT,7,4,floorTickness,8);
	createGlassRoof(5.5,offsetTOIT,7,7,floorTickness,8);
	createRoof(12,offsetTOIT,7,6,floorTickness,8);
	createRoof(0,offsetTOIT,13,30,floorTickness,4);
}

function createWall(x, y, z, width, height, depth, vertical) {
	
	var wall = document.createElement('a-entity');
	wall.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	wall.setAttribute('position', {x: x, y: y, z: z});
	wall.setAttribute('material', {src: "#mat_wall"});
	if (vertical) {
		wall.setAttribute('rotation', {x: 0, y: 90, z: 0});
	}
	
	scene.appendChild(wall);
}

function createFence(x, y, z, width, height, vertical, big) {
	
	var fence = document.createElement('a-entity');
	fence.setAttribute('geometry', {primitive: 'plane', height: height, width: width});
	fence.setAttribute('position', {x: x, y: y, z: z});
	if (big) {
		fence.setAttribute('material', {src: "#mat_bigfence", side: "double", transparent: true});
	} else {
		fence.setAttribute('material', {src: "#mat_fence", side: "double", transparent: true});
	}
	if (vertical) {
		fence.setAttribute('rotation', {x: 0, y: 270, z: 0});
	} else {
		fence.setAttribute('rotation', {x: 0, y: 180, z: 0});
	}
	
	scene.appendChild(fence);
}

function createFloor(x, y, z, width, height, depth) {
	
	var floor = document.createElement('a-entity');
	floor.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	floor.setAttribute('position', {x: x, y: y, z: z});
	floor.setAttribute('material', {src: "#mat_floor"});
	
	scene.appendChild(floor);
}

function createGlassWall(x, y, z, width, height, depth, vertical, upper) {

	var wall = document.createElement('a-entity');
	wall.setAttribute('geometry', {primitive: 'box', height: height*0.2, width: width, depth: depth});
	wall.setAttribute('material', {src: "#mat_wall"});
	
	var glass = document.createElement('a-entity');
	glass.setAttribute('geometry', {primitive: 'box', height: height*0.8, width: width, depth: depth});
	glass.setAttribute('material', {src: "#mat_glass", opacity : 0.4});
	
	if (upper) {
		wall.setAttribute('position', {x: x, y: y+0.4*height, z: z});
		glass.setAttribute('position', {x: x, y: y-0.1*height, z: z});
	} else {
		wall.setAttribute('position', {x: x, y: y-0.4*height, z: z});
		glass.setAttribute('position', {x: x, y: y+0.1*height, z: z});
	}
	
	if (vertical) {
		wall.setAttribute('rotation', {x: 0, y: 90, z: 0});
		glass.setAttribute('rotation', {x: 0, y: 90, z: 0});
	}
	
	scene.appendChild(wall);
	scene.appendChild(glass);
}

function createRoof(x, y, z, width, height, depth) {
	
	var roof = document.createElement('a-entity');
	roof.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	roof.setAttribute('position', {x: x, y: y, z: z});
	roof.setAttribute('material', {src: "#mat_roof"});
	
	scene.appendChild(roof);
}

function createGlassRoof(x, y, z, width, height, depth) {
	
	var glassroof = document.createElement('a-entity');
	glassroof.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	glassroof.setAttribute('position', {x: x, y: y, z: z});
	glassroof.setAttribute('material', {src: "#mat_glass", opacity : 0.4});
	
	scene.appendChild(glassroof);
}

function createStairs(x, y, z, width, height, depth, wallTickness, nb) {
	
	var posX = x;
	var posY = y + (height/nb)/2;
	var posZ = z + (depth/nb)/2;
	
	for (var i = 0; i < nb; i++) {		
	
		var stair = document.createElement('a-entity');
		stair.setAttribute('geometry', {primitive: 'box', height: height/nb + i*height/nb, width: width, depth: depth/nb});
		stair.setAttribute('position', {x: posX, y: posY, z: posZ});
		stair.setAttribute('material', {src: "#mat_iron"});
		scene.appendChild(stair);
		
		posY = posY + (height/nb)/2;
		posZ = posZ + (depth/nb);
	}

	createWall(x+width/2, y+height/2, z+depth/2+depth/nb, depth, height, wallTickness, true);
	createFence(x+width/2, y+height+height/4, z+depth/2+depth/nb, width, height/2, true, false);
}

function createElevator(x, y, z, width, height, depth, wallTickness, floorTickness) {

	//Murs du bas
	var offsetRDC = y;
	createWall(x-width/2,offsetRDC,z,width,height,wallTickness,true) ;
	createWall(x-width/4-0.5,offsetRDC,z-depth/2,width/2-1,height,wallTickness,false) ;
	createWall(x+width/4+0.5,offsetRDC,z-depth/2,width/2-1,height,wallTickness,false) ;

	//Murs mezanine
	var offsetMEZ = offsetRDC + height;
	createWall(x,offsetMEZ,z-depth/2,width,height,wallTickness,false) ;
	createWall(x-width/2,offsetMEZ,z,width,height,wallTickness,true) ;
	createWall(x-width/4-0.5,offsetMEZ,z+depth/2,width/2-1,height,wallTickness,false) ;
	createWall(x+width/4+0.5,offsetMEZ,z+depth/2,width/2-1,height,wallTickness,false) ;

	//Murs d'avant toit
	var offsetAVT = offsetMEZ + 3*height/4;
	createWall(x-width/2,offsetAVT,z,width,height/2,wallTickness,true) ;
	createWall(x,offsetAVT,z+depth/2,width,height/2,wallTickness,false) ;
	createWall(x,offsetAVT,z-depth/2,width,height/2,wallTickness,false) ;

	var buttonUp = createButtonUpElevator(x-width/2+0.1,offsetRDC+0.2,z+depth/4,0.4,0.4,0.1,true);
	var buttonDown = createButtonDownElevator(x-width/2+0.1,offsetRDC+0.2,z-depth/4,0.4,0.4,0.1,true);
	var buttonCallUp = createButtonUpElevator(x-width/3,offsetMEZ+0.2,z+depth/2+0.1,0.4,0.4,0.1,false);
	var buttonCallDown = createButtonDownElevator(x-width/3,offsetRDC+0.2,z-depth/2-0.1,0.4,0.4,0.1,false);

	var elevator = document.createElement('a-entity');
	elevator.setAttribute('geometry', {primitive: 'box', height: floorTickness+0.1, width: width, depth: depth});
	elevator.setAttribute('position', {x: x, y: y-height/2, z: z});
	elevator.setAttribute('material', {src: "#mat_iron"});
	scene.appendChild(elevator);
}

function createButtonUpElevator(x, y, z, width, height, depth, vertical) {

	var buttonUp = document.createElement('a-entity');
	buttonUp.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	buttonUp.setAttribute('position', {x: x, y: y, z: z});
	buttonUp.setAttribute('material', {src: "#mat_buttoninactif"});
	scene.appendChild(buttonUp);
	
	if (vertical) {
		buttonUp.setAttribute('rotation', {x: 0, y: 90, z: 0});
	} else {
		buttonUp.setAttribute('rotation', {x: 0, y: 180, z: 0});
	}
	return buttonUp;
}

function createButtonDownElevator(x, y, z, width, height, depth, vertical) {

	var buttonDown = document.createElement('a-entity');
	buttonDown.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	buttonDown.setAttribute('position', {x: x, y: y, z: z});
	buttonDown.setAttribute('material', {src: "#mat_buttoninactif"});
	scene.appendChild(buttonDown);
	
	if (vertical) {
		buttonDown.setAttribute('rotation', {x: 0, y: 90, z: 180});
	} else {
		buttonDown.setAttribute('rotation', {x: 0, y: 0, z: 180});
	}
	return buttonDown;
}
