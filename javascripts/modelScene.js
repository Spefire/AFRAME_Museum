// -------------------------------- //
//   Application : Museum AFRAME    //
//   Author : Nicholas BRUN   		//
//   File : modelScene.js			//
// -------------------------------- //

function createSceneElements(){

	createLight() ;
	createSkybox();
}

function createSkybox() {
	
	var skybox = document.createElement('a-sky');
	skybox.setAttribute('type', "cube");
	skybox.setAttribute('src', "assets/skyboxes/skybox.jpg");
	
	scene.appendChild(skybox);
}

function createLight(){
	
	var ambLight = document.createElement('a-entity');
	ambLight.setAttribute('light', {type: "ambient", color:"#DDDDDD", groundColor:"#666666", intensity:0.8});
	
	var dirLight = document.createElement('a-entity');
	dirLight.setAttribute('light', {type: "directional", color:"#BBBBBB", groundColor:"#000000", intensity:0.6});
	dirLight.setAttribute('position', {x: 10, y:20, z:-15});
	
	scene.appendChild(ambLight);
	scene.appendChild(dirLight);
}