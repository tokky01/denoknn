import KnnVector from "./KnnVector.ts";
import {DistanceFunction, euclideanDistance} from "../distanceFunctions.ts";

export default class KnnField {
	knnVectors: KnnVector[]
	dimensions: string[]
	distanceFunction:DistanceFunction

	constructor(dimensions: string[],distanceFunction:DistanceFunction = euclideanDistance) {
		this.dimensions = dimensions
		this.knnVectors = []
		this.distanceFunction = distanceFunction
	}

	addDataVector(knnVector: KnnVector) {
		this.knnVectors.push(knnVector)
	}

	addDataPoint(dataArray: number[]) {
		this.knnVectors.push(new KnnVector(dataArray, this.dimensions))
	}

	addData(data:number[][]):void{
		data.forEach((dataPoint :number[])=>{
			this.addDataPoint(dataPoint)
		})
	}

	size():number{
		return this.knnVectors.length
	}

	isValid():boolean{
		let length = this.dimensions.length
		this.knnVectors.forEach((vector)=>{
			if(vector.values.length !== length && vector.dimensions.length !== length){
				return false
			}
		})
		return true
	}

	getNNearestNeighbour(vector: KnnVector,n:number=1,distanceFunction:DistanceFunction = this.distanceFunction): KnnVector[] {
		let vectorsCopy: Array<KnnVector> = [...this.knnVectors];
		let nearestNeighbour: KnnVector = vector

		vectorsCopy.sort((vectorA:KnnVector,vectorB:KnnVector)=> {
			let distA = distanceFunction(vector,vectorA)
			let distB = distanceFunction(vector,vectorB)
			return distA - distB
		})

		return  vectorsCopy.slice(0, n)
	}

	getNearestNeighbour(vector: KnnVector,distanceFunction:DistanceFunction = this.distanceFunction): KnnVector{
		return this.getNNearestNeighbour(vector,1,distanceFunction)[0]
	}

}