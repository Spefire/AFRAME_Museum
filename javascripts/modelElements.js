// -------------------------------- //
//   Application : Museum AFRAME    //
//   Author : Nicholas BRUN   		//
//   File : modelElements.js		//
// -------------------------------- //

function createElementsMuseum(){
	
	var depthRect = wallTickness/4;
	var heightRect = 3.5;
	var widthRect = 5.5;
	
	//----- Rez de chaussée -----
	var offsetRDC = wallHeight/2;
	var offsetRDCfloor = 0;

	//Sculptures
	createSculpture01(-4,offsetRDCfloor,0) ;
	createSculpture02(4,offsetRDCfloor,0) ;
	//Panneaux indicatoires
	createPanel(0,offsetRDC+wallHeight,-15.1,0,wallHeight*1.25,wallHeight*0.4,depthRect) ;
	createPanel(13,offsetRDC+wallHeight*0.65,-4.1,0,wallHeight*0.4,wallHeight*0.2,depthRect) ;
	createPanel(13,offsetRDC+wallHeight*1.65,0.1,180,wallHeight*0.4,wallHeight*0.2,depthRect) ;
	createBigPanel(-14,offsetRDC-wallHeight*0.15,-9,215,wallHeight/2,wallHeight*0.65,depthRect) ;

	//----- Mezanine -----
	var offsetMEZfloor = offsetRDC + wallHeight;
	var hRect = offsetMEZfloor + wallHeight*0.2;
	var hTable = offsetMEZfloor - wallHeight/2;
	
	//Tableaux
	createSquarePainting(-14.9,hRect,8,270,heightRect,depthRect,3) ;
	createRectPainting(-6,hRect,14.9,0,widthRect,heightRect,depthRect,1) ;
	createRectPainting(6,hRect,14.9,0,widthRect,heightRect,depthRect,2) ;
	createSquarePainting(14.9,hRect,8,90,heightRect,depthRect,6) ;
	//Table
	createTable(-6,hTable+0.5,8);
	createTable(6,hTable+0.5,8);
}

function createRectPainting(x, y, z, rotation, width, height, depth, numPainting) {

	var painting = document.createElement('a-entity');
	painting.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	painting.setAttribute('position', {x: x, y: y, z: z});
	painting.setAttribute('rotation', {x: 0, y: rotation, z: 0});
	painting.setAttribute('material', {src: "assets/tableaux/francoise_rect_0"+numPainting+".jpg"});
	
	scene.appendChild(painting);
}

function createSquarePainting(x, y, z, rotation, height, depth, numPainting) {

	var painting = document.createElement('a-entity');
	painting.setAttribute('geometry', {primitive: 'box', height: height, width: height, depth: depth});
	painting.setAttribute('position', {x: x, y: y, z: z});
	painting.setAttribute('rotation', {x: 0, y: rotation, z: 0});
	painting.setAttribute('material', {src: "assets/tableaux/francoise_carr_0"+numPainting+".jpg"});
	
	scene.appendChild(painting);
}

function createTable(x, y, z) {

	var tableTickness = 0.15;
	
	var tableTop = document.createElement('a-entity');
	tableTop.setAttribute('geometry', {primitive: 'box', height: tableTickness, width: 2, depth: 3});
	tableTop.setAttribute('position', {x: x, y: y+0.45, z: z});
	tableTop.setAttribute('rotation', {x: 0, y: 90, z: 0});
	tableTop.setAttribute('material', {src: "#mat_panel"});
	
	var tableNO = document.createElement('a-entity');
	tableNO.setAttribute('geometry', {primitive: 'box', height: 0.9, width: tableTickness, depth: tableTickness});
	tableNO.setAttribute('position', {x: x-1.4, y: y-0.05, z: z+0.8});
	tableNO.setAttribute('material', {src: "#mat_panel"});
	
	var tableNE = document.createElement('a-entity');
	tableNE.setAttribute('geometry', {primitive: 'box', height: 0.9, width: tableTickness, depth: tableTickness});
	tableNE.setAttribute('position', {x: x+1.4, y: y-0.05, z: z+0.8});
	tableNE.setAttribute('material', {src: "#mat_panel"});
	
	var tableSO = document.createElement('a-entity');
	tableSO.setAttribute('geometry', {primitive: 'box', height: 0.9, width: tableTickness, depth: tableTickness});
	tableSO.setAttribute('position', {x: x-1.4, y: y-0.05, z: z-0.8});
	tableSO.setAttribute('material', {src: "#mat_panel"});
	
	var tableSE = document.createElement('a-entity');
	tableSE.setAttribute('geometry', {primitive: 'box', height: 0.9, width: tableTickness, depth: tableTickness});
	tableSE.setAttribute('position', {x: x+1.4, y: y-0.05, z: z-0.8});
	tableSE.setAttribute('material', {src: "#mat_panel"});
	
	scene.appendChild(tableTop);
	scene.appendChild(tableNO);
	scene.appendChild(tableNE);
	scene.appendChild(tableSO);
	scene.appendChild(tableSE);
}

function createPanel(x, y, z, rotation, width, height, depth) {

	var panel = document.createElement('a-entity');
	panel.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	panel.setAttribute('position', {x: x, y: y, z: z});
	panel.setAttribute('rotation', {x: 0, y: rotation, z: 0});
	panel.setAttribute('material', {src: "#mat_panel"});
	
	scene.appendChild(panel);
}

function createBigPanel(x, y, z, rotation, width, height, depth) {

	var stick = document.createElement('a-entity');
	stick.setAttribute('geometry', {primitive: 'box', height: height/2, width: depth, depth: depth});
	stick.setAttribute('position', {x: x, y: y-height/4, z: z});
	stick.setAttribute('rotation', {x: 0, y: rotation, z: 0});
	stick.setAttribute('material', {src: "#mat_panel"});
	
	var panel = document.createElement('a-entity');
	panel.setAttribute('geometry', {primitive: 'box', height: height, width: width, depth: depth});
	panel.setAttribute('position', {x: x, y: y, z: z});
	panel.setAttribute('rotation', {x: 20, y: rotation, z: 0});
	panel.setAttribute('material', {src: "#mat_bigpanel"});
	
	scene.appendChild(stick);
	scene.appendChild(panel);
}

function createSculptureBase(x, y, z){
	
	var structure = document.createElement('a-entity');
	structure.setAttribute('geometry', {primitive: 'box', height: 0.2, width: 5.2, depth: 2.8});
	structure.setAttribute('position', {x: x, y: y, z: z-1.5});
	structure.setAttribute('material', {src: "#mat_panel"});
	
	var structureBottom = document.createElement('a-entity');
	structureBottom.setAttribute('geometry', {primitive: 'box', height: 0.4, width: 0.4, depth: 5.1});
	structureBottom.setAttribute('position', {x: x, y: y, z: z-2.8});
	structureBottom.setAttribute('rotation', {x: 0, y: 90, z: 0});
	structureBottom.setAttribute('material', {src: "#mat_marble"});
	
	var structureLeft = document.createElement('a-entity');
	structureLeft.setAttribute('geometry', {primitive: 'box', height: 0.4, width: 0.3, depth: 3.0});
	structureLeft.setAttribute('position', {x: x-2.7, y: y, z: z-1.5});
	structureLeft.setAttribute('material', {src: "#mat_marble"});
	
	var structureRight = document.createElement('a-entity');
	structureRight.setAttribute('geometry', {primitive: 'box', height: 0.4, width: 0.3, depth: 3.0});
	structureRight.setAttribute('position', {x: x+2.7, y: y, z: z-1.5});
	structureRight.setAttribute('material', {src: "#mat_marble"});
	
	scene.appendChild(structure);
	scene.appendChild(structureBottom);
	scene.appendChild(structureLeft);
	scene.appendChild(structureRight);
}

function createSculpture01(x, y, z) {
	
	createSculptureBase(x, y, z);
	
	//
	var sphere01 = document.createElement('a-entity');
	sphere01.setAttribute('geometry', {primitive: 'sphere', radius: 0.7});
	sphere01.setAttribute('position', {x: x, y: y+0.7, z: z-1.5});
	sphere01.setAttribute('material', {src: "#mat_marble"});
	
	var sphere02 = document.createElement('a-entity');
	sphere02.setAttribute('geometry', {primitive: 'sphere', radius: 0.3});
	sphere02.setAttribute('position', {x: x, y: y+1.7, z: z-1.5});
	sphere02.setAttribute('material', {src: "#mat_marble"});
	
	var sphere03 = document.createElement('a-entity');
	sphere03.setAttribute('geometry', {primitive: 'sphere', radius: 0.1});
	sphere03.setAttribute('position', {x: x, y: y+2.1, z: z-1.5});
	sphere03.setAttribute('material', {src: "#mat_marble"});
	
	//	
	var sphere11 = document.createElement('a-entity');
	sphere11.setAttribute('geometry', {primitive: 'sphere', radius: 0.3});
	sphere11.setAttribute('position', {x: x-1.75, y: y+0.3, z: z-1.5});
	sphere11.setAttribute('material', {src: "#mat_marble"});
	
	var sphere12 = document.createElement('a-entity');
	sphere12.setAttribute('geometry', {primitive: 'sphere', radius: 0.1});
	sphere12.setAttribute('position', {x: x-1.75, y: y+0.7, z: z-1.5});
	sphere12.setAttribute('material', {src: "#mat_marble"});
	
	//	
	var sphere21 = document.createElement('a-entity');
	sphere21.setAttribute('geometry', {primitive: 'sphere', radius: 0.3});
	sphere21.setAttribute('position', {x: x+1.75, y: y+0.3, z: z-1.5});
	sphere21.setAttribute('material', {src: "#mat_marble"});
	
	var sphere22 = document.createElement('a-entity');
	sphere22.setAttribute('geometry', {primitive: 'sphere', radius: 0.1});
	sphere22.setAttribute('position', {x: x+1.75, y: y+0.7, z: z-1.5});
	sphere22.setAttribute('material', {src: "#mat_marble"});
	
	scene.appendChild(sphere01);
	scene.appendChild(sphere02);
	scene.appendChild(sphere03);
	scene.appendChild(sphere11);
	scene.appendChild(sphere12);
	scene.appendChild(sphere21);
	scene.appendChild(sphere22);
}

function createSculpture02(x, y, z) {

	createSculptureBase(x, y, z);
	
	for (var i = 0; i < 9; i++) {
		var box = document.createElement('a-entity');
		box.setAttribute('geometry', {primitive: 'box', height: 0.1, width: 2, depth: 0.25});
		box.setAttribute('position', {x: x, y: y+0.1*i, z: z-1.5});
		box.setAttribute('material', {src: "#mat_marble"});
		
		var rotation = (20*i)* 18;
		
		var anim = document.createElement('a-animation');
		anim.setAttribute('attribute', "rotation");
		anim.setAttribute('to', "0 "+rotation+" 0");
		anim.setAttribute('direction', "alternate");
		anim.setAttribute('dur', "16000");
		anim.setAttribute('easing', "linear");
		anim.setAttribute('repeat', "indefinite");
		
		box.appendChild(anim);
		scene.appendChild(box);
	}
	
	for (var i = 9; i < 19; i++) {
		var box = document.createElement('a-entity');
		box.setAttribute('geometry', {primitive: 'box', height: 0.1, width: 2, depth: 0.25});
		box.setAttribute('position', {x: x, y: y+0.1*i, z: z-1.5});
		box.setAttribute('material', {src: "#mat_marble"});
		
		var rotation = (360-20*i)* 18;
		
		var anim = document.createElement('a-animation');
		anim.setAttribute('attribute', "rotation");
		anim.setAttribute('to', "0 "+rotation+" 0");
		anim.setAttribute('direction', "alternate");
		anim.setAttribute('dur', "16000");
		anim.setAttribute('easing', "linear");
		anim.setAttribute('repeat', "indefinite");
		
		box.appendChild(anim);
		scene.appendChild(box);
	}
}