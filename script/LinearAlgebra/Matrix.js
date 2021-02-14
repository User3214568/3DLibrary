/*
	Conventions  : 1- Tous les vecteurs sont représenter par des tableau unidimensionnel 
				   2- la matice afficher est la transpose de la matrice réel.
*/


class Matrix{
	constructor(vectors){
		if(this.testValidity(vectors)){
			this.matrix = [];
			for(let i  = 0 ; i < vectors.length ; i++){
				this.matrix[i] = vectors[i].points;
			}
			this.size = {
			Lines : vectors[0].length,
			Columns : vectors.length
			};
		}
	}
	testValidity(vectors){
		if(vectors.length == 0) return false;
		if(vectors == undefined ) return false;
		if(vectors.length == 1 ) return true;
		for(let i = 0 ;  i < vectors.length-1 ; i++){
			if(vectors[i].length != vectors[i+1].length ) return false;
		}
		return true;
	}
	LandaMatrix(landa){
		for(let  i = 0 ; i < this.size.Lines;i++){
			for(let  j = 0 ; j < this.size.Columns ;j++){
				this.matrix[j][i] *=landa;
			}
		}
	
	}
	transpose(){
		let output = [];
		for(let  i = 0 ; i < this.size.Lines ; i++){
			let vercts = [];
			for(let  ii = 0 ; ii < this.size.Columns ; ii++){
				vercts.push(this.matrix[ii][i]);
			}
			output.push(vercts);
		}
		
		this.size = {
			Lines : this.size.Columns,
			Columns : this.size.Lines
		}

		this.matrix = output;
	}
	printMatrix(){
		console.log(this.matrix);
	}
}



