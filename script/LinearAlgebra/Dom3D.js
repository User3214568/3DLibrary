export default function setUpPolyline(svgElement , points,id){

	let out = [];
	for(let  i = 0 ; i < points.length-2 ; i+=3){
		out.push(points[i],points[i+1]);
	}

	svgElement.innerHTML +="<polyline id='"+id+"' points='"+out+"' style='fill : transparent ; stroke : black ; stroke-width : 0.5px'></polyline>"
}
