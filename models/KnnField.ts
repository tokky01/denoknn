import KnnVector from "./KnnVector.ts";
import {manhattanDistance} from "./distanceFunctions.ts";

export default class KnnField {
	knnVectors:KnnVector[]
	dimensions:string[]

	constructor(dimensions:any) {
		this.dimensions = dimensions
		this.knnVectors = []
	}

	addDataVector(knnVector:KnnVector):void{
		this.knnVectors.push(knnVector)
	}
	addDataPoint(dataArray:number[]):void{
		this.knnVectors.push(new KnnVector(dataArray,this.dimensions))
	}

	getNearestNeighbour(vector:KnnVector,):KnnVector{
		let nearestNeighbour:KnnVector
		let nearestDistance:number = Infinity
		this.knnVectors.forEach((value)=>{
			let distance:number = manhattanDistance(vector,value)
			if(nearestDistance>distance && vector.id !== value.id){
				nearestNeighbour = value
				nearestDistance = distance
			}
		})
		return nearestNeighbour
	}
}