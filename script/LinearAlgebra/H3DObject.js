import Vector from './Vector.js';
import setUpPolyline from './Dom3D.js';
import ProductMatrix from './LinearOperations.js';
import project from './LinearOperations.js';
class HE3DObject{
	constructor(points , renderTragetSVG , cam){
		this.points =  points ; 
		this.length = points.length;
		this.svg = renderTragetSVG;
		this.pID = this.svg.id+":poly";
		this.cam = cam;
		this.x = 0 ; 
		this.y = 0; 
		this.z = 0;
	}
	TwoDTransform(){
		var array = [];
			for(let  i = 0 ; i < this.points.length-2 ; i+=3){
				array.push(this.points[i] + this.points[i+2]/Math.tan(alpha));
				array.push(this.points[i+1] - this.points[i+2]/Math.tan(alpha));
			}
			return array;
	}
	setScale(i,sx,sy,sz){
		this.points[i]*=sx;
		this.points[i+1]*=sy;
		this.points[i+2]*=sz;
	}
	
	setTranslate(x,y,z){
		this.destroy();
		for(let  i = 0 ; i < (this.points.length-2) ; i+=3){
			this.points[i] = this.points[i]+x;
			this.points[i+1] = this.points[i+1]+y;
			this.points[i+2] = this.points[i+2]+z;
		}
		this.render();
	}
	setRotate(axisVector,angleRads){
		this.destroy();
		let M = prepare3DRotationMatrix(axisVector,angleRads);
		for(let  i = 0 ; i < this.length-2 ; i+=3){

			let result = ProductMatrix(M,new Matrix([new Vector([this.points[i],this.points[i+1],this.points[i+2]])]));
			result = result.matrix;
			this.points[i]   = result[0][0];
			this.points[i+1] = result[1][0];
			this.points[i+2] = result[2][0];
		}
		this.render();
	}
	ProjectObject3D(CameraVect,CameraPoint){
		var current ; 
		var output = [];
		
		for(let  i = 0 ; i  < this.points.length ; i+=3 ){
			
			current = new Vector([this.points[i],this.points[i+1],this.points[i+2]]);
			current = project(current,CameraVect,CameraPoint);
			output.push(current.points[0]);
			output.push(current.points[1]);
			output.push(current.points[2]);
		}
		return output;
	}
	render(){
		
		if(true || prodvector(new Vector([this.x-this.cam.x,this.y-this.cam.y,this.z-this.cam.z]),this.cam.axis)>=0){
            let ian = this.ProjectObject3D(this.cam.axis,new Vector([this.cam.x,this.cam.y,this.cam.z]));
            setUpPolyline(this.svg,ian,this.pID);
		}
		else{
			console.log("object at the back")
		}
	}
	destroy(){
		document.getElementById(this.pID).remove(); 
	}
}
export default HE3DObject;