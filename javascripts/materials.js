// -------------------------------- //
//   Application : Museum AFRAME    //
//   Author : Nicholas BRUN   		//
//   File : materials.js			//
// -------------------------------- //

var scene;

function createMaterials() {
	
	scene = document.querySelector('a-scene');

	//Materials : Environnement
	
	var mat_grass = document.createElement('img');
	mat_grass.setAttribute('id', "mat_grass");
	mat_grass.setAttribute('src', "assets/batiment/grass.jpg");
	scene.appendChild(mat_grass);
	
	var mat_treeT1 = document.createElement('img');
	mat_treeT1.setAttribute('id', "mat_treeT1");
	mat_treeT1.setAttribute('src', "assets/vegetation/tree01.png");
	scene.appendChild(mat_treeT1);
	
	var mat_treeT2 = document.createElement('img');
	mat_treeT2.setAttribute('id', "mat_treeT2");
	mat_treeT2.setAttribute('src', "assets/vegetation/tree02.png");
	scene.appendChild(mat_treeT2);
	
	var mat_bush = document.createElement('img');
	mat_bush.setAttribute('id', "mat_bush");
	mat_bush.setAttribute('src', "assets/vegetation/bush.png");
	scene.appendChild(mat_bush);
	
	//Materials : Museum
	
	var mat_wall = document.createElement('img');
	mat_wall.setAttribute('id', "mat_wall");
	mat_wall.setAttribute('src', "assets/batiment/wall.jpg");
	scene.appendChild(mat_wall);
	
	var mat_fence = document.createElement('img');
	mat_fence.setAttribute('id', "mat_fence");
	mat_fence.setAttribute('src', "assets/batiment/fence.png");
	scene.appendChild(mat_fence);
	
	var mat_bigfence = document.createElement('img');
	mat_bigfence.setAttribute('id', "mat_bigfence");
	mat_bigfence.setAttribute('src', "assets/batiment/bigfence.png");
	scene.appendChild(mat_bigfence);
	
	var mat_glass = document.createElement('img');
	mat_glass.setAttribute('id', "mat_glass");
	mat_glass.setAttribute('src', "assets/batiment/glass.png");
	scene.appendChild(mat_glass);
	
	var mat_floor = document.createElement('img');
	mat_floor.setAttribute('id', "mat_floor");
	mat_floor.setAttribute('src', "assets/batiment/floor.jpg");
	scene.appendChild(mat_floor);
	
	var mat_roof = document.createElement('img');
	mat_roof.setAttribute('id', "mat_roof");
	mat_roof.setAttribute('src', "assets/batiment/roof.jpg");
	scene.appendChild(mat_roof);
	
	var mat_iron = document.createElement('img');
	mat_iron.setAttribute('id', "mat_iron");
	mat_iron.setAttribute('src', "assets/batiment/iron.jpg");
	scene.appendChild(mat_iron);
	
	var mat_buttonactif = document.createElement('img');
	mat_buttonactif.setAttribute('id', "mat_buttonactif");
	mat_buttonactif.setAttribute('src', "assets/batiment/button_actif.jpg");
	scene.appendChild(mat_buttonactif);
	
	var mat_buttoninactif = document.createElement('img');
	mat_buttoninactif.setAttribute('id', "mat_buttoninactif");
	mat_buttoninactif.setAttribute('src', "assets/batiment/button_inactif.jpg");
	scene.appendChild(mat_buttoninactif);
	
	//Materials : Elements
	
	var mat_panel = document.createElement('img');
	mat_panel.setAttribute('id', "mat_panel");
	mat_panel.setAttribute('src', "assets/batiment/panel.jpg");
	scene.appendChild(mat_panel);
	
	var mat_bigpanel = document.createElement('img');
	mat_bigpanel.setAttribute('id', "mat_bigpanel");
	mat_bigpanel.setAttribute('src', "assets/batiment/bigpanel.jpg");
	scene.appendChild(mat_bigpanel);
	
	var mat_marble = document.createElement('img');
	mat_marble.setAttribute('id', "mat_marble");
	mat_marble.setAttribute('src', "assets/batiment/marble.jpg");
	scene.appendChild(mat_marble);
}