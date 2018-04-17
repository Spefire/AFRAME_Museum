// -------------------------------- //
//   Application : Museum AFRAME    //
//   Author : Nicholas BRUN   		//
//   File : utils.js				//
// -------------------------------- //

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomAngle() {
	return Math.random()*Math.PI*2;
}

function testAngle(angle) {
	if (0 < angle && angle < Math.PI*7/16) {
		return true;
	}
	if (Math.PI*9/16 < angle && angle < Math.PI) {
		return true;
	}
	return false;
}

function getDistance(posA, posB){
	var x = posB.x - posA.x;
	var y = posB.y - posA.y;
	var z = posB.z - posA.z;
	var dist = Math.sqrt(x*x+y*y+z*z);
	return dist;
}