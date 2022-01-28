import KnnVector from "./KnnVector.ts";
import {DistanceFunction, euclideanDistance} from "./distanceFunctions.ts";

export default class KnnField {
	knnVectors: KnnVector[]
	dimensions: string[]

	constructor(dimensions: any) {
		this.dimensions = dimensions
		this.knnVectors = []
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

	getNearestNeighbour(vector: KnnVector,distanceFunction:DistanceFunction = euclideanDistance): KnnVector {
		let nearestNeighbour: KnnVector = vector
		let nearestDistance: number = Infinity
		this.knnVectors.forEach((value) => {
			let distance: number = distanceFunction(vector, value)
			if (nearestDistance > distance && vector.id !== value.id) {
				nearestNeighbour = value
				nearestDistance = distance
			}
		})
		return nearestNeighbour
	}
}