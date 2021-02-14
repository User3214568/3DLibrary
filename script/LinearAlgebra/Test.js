import Vector from './Vector';
import HE3DObject from './H3DObject';
import Camera from "./camera";


let camVect = new Vector([0,0,1]);
let camPos = new Vector([0,0,0]);
let cam = new Camera(0,0,0,new Vector([0,0,-1]))
var alpha = Math.PI/100  ; 




let bb = true;
let face = [0,0,0,
			200,0,0,
			200,200,0, // BaseFloor
			0,200,0,
			0,0,0,

			0,0,200,
			200,0,200,
			200,200,200,	//TopFloor
			0,200,200,
			0,0,200,
			0,0,0,

			200,0,0,
			200,0,200,		//LeftSide
			0,0,200,
			0,0,0,

			0,200,0,
			0,200,200,
			200,200,200,	//RightSide
			200,200,0,
			200,0,0,
			0,0,0

			];
		let carre = [0,0,0,200,0,0,200,200,0,0,200,0,0,0,0]

let Obj = new HE3DObject(face,document.getElementById("svg"));
let angle = Math.PI/50;

Obj.render();
Obj.setTranslate(400,100,0);
//Obj.ProjectObject3D(new Vector([0,0,1]),new Vector([0,0,0]))
//

window.addEventListener("keydown",(event)=>{
	if(event.keyCode == 65)
	Obj.setRotate(new Vector([0,1,0]),angle);
	if(event.keyCode == 66)
		Obj.setRotate(new Vector([0,1,0]),-angle);
});
window.addEventListener("keydown",(event)=>{
	let s = 15;
	if(event.keyCode == 39){
		cam.x+=s;
	}
	if(event.keyCode == 37)
		cam.x-=s;
	if(event.keyCode == 38)
		cam.y+=s;
	if(event.keyCode == 40) 
		cam.y-=s;
	console.log(`camera position : ${cam.x},${cam.y},${cam.z}`)
	Obj.destroy();
	Obj.render();
});

window.addEventListener("mousemove",(event)=>{
	Obj.destroy();
	let diffX = event.movementX/10;
	let diffY = event.movementY/10;
 	cam.axis.points[0]+=diffX;
	cam.axis.points[1]+=diffY;
	console.log(`${diffX} : ${diffY}`)
	Obj.render();
});


let cameraPoint = new Vector([1,0,0]);
let CameraAxe = new Vector([0,0,1]);
let targetPoint = new Vector([1,1,1]);
console.log(project(targetPoint,CameraAxe,cameraPoint));

console.log("The END")


