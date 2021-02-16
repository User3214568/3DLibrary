import Vector from './Vector';
import Matrix from './Matrix';


function arrayAddSus(a1,a2,signe){
	let output = [];
	for(let i = 0 ; i < Math.max(a1.length,a2.length) ;i++){
		output.push(((a1[i]==undefined)?0:a1[i])+signe*((a2[i]==undefined)?0:a2[i]));
	}
	return output;

}

function addVector(v1,v2){
	return new Vector(arrayAddSus(v1.points,v2.points,1));
}
function susVector(v1,v2){
	return new Vector(arrayAddSus(v1.points,v2.points,-1));
}
function prodvector(v1,v2){

	let somme = undefined ; 
	if(v1.getLength() == v2.getLength()){
		somme	 = 0 ; 
		for(let  i = 0 ; i  < v1.getLength() ; i++){
			somme+=(v1.points[i]*v2.points[i]);
		}
	}

	return somme;
}
//************************************************MATRIX OPERATIONS****************************************************************

function ProductMatrix(m1,m2){
	let output = [];
	if(m1.size.Columns == m2.size.Lines){
		for(let  i = 0 ; i  < m1.size.Lines ; i++) {
			let vects = [];
			for(let iii = 0 ; iii < m2.size.Columns ;iii++){
				let somme  = 0;
				for(let  ii = 0 ; ii  < m1.size.Columns ; ii++){
					somme+=(m1.matrix[ii][i] * m2.matrix[iii][ii]);
				}
				vects.push(somme);
			}
			output.push(new Vector(vects));
		}
	}
	else console.log("uncovinient dimenions"+`${m1.size.Columns} : ${m2.size.Lines}`);
	return new Matrix(output);
}
function prepare3DRotationMatrix(u,angleRadians){
	if(u.length == 3 ) {
		u.setNormalized();
		u = u.points;é
		let c = Math.cos(angleRadians);
		let s = Math.sin(angleRadians);
		let v1 = new Vector([c+(1-c)*u[0]*u[0],
							 (1-c)*u[0]*u[1]-s*u[2],
							 (1-c)*u[0]*u[2]+s*u[1]]);
		let v2 = new Vector([(1-c)*u[0]*u[1]-s*u[2],
							  c+(1-c)*u[1]*u[1],
							 (1-c)*u[1]*u[2]-s*u[0]]);
		let v3 = new Vector([(1-c)*u[0]*u[2]-s*u[1],
							  (1-c)*u[1]*u[2]+s*u[0],
							  c+(1-c)*u[2]*u[2]]);
		return new Matrix([v1,v2,v3]);
	}
}
function project(TargetPoint,CameraVect,CameraPoint){
		
	
    var diffVect = susVector(TargetPoint,CameraPoint);
    let M = new Matrix([CameraVect]);
    M.transpose();
    var Tintersect = -(ProductMatrix(M,new Matrix([diffVect])).matrix[0][0])/CameraVect.getNorm();
    M.transpose();
    M.LandaMatrix(Tintersect);
    let u =  addVector(new Vector(M.matrix[0]),TargetPoint);
    return u  ;
}
export * from './LinearOperations' ;
