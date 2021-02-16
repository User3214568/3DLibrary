class Camera{
	constructor(x,y,z,axe){
		this.x = x ; 
		this.y = y ; 
		this.z = z ;
		this.axis = axe;
	}
	setTranslate(x,y,z){
		this.x += x ; 
		this.x += y ; 
		this.x += z ;
	}
	setAxis(vect){
		this.axis = vect;
	}
	setRotate(angle){
		
	}
}
export default Camera;