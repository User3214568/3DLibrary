
class Vector {
	constructor(points){
		this.points = points;
		this.length = points.length;
	}
	getNorm(){ // it's Squared Norm
		let somme = 0 ; 
		for(let i  = 0 ; i < this.points.length ;i++){
			somme+=(this.points[i]*this.points[i]);
		}
		return somme;
	}
	setNormalized(){
		let norm = this.getNorm();
		if( norm == 1 ) return;
		else{
			for(let  i = 0 ; i  < this.points.length ; i++){
				this.points[i] /=norm; 
			}
		}
	}
	getLength(){
		return this.points.length;
	}
}
export default Vector;