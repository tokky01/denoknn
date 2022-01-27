import KnnVector from "./KnnVector.ts";

export default class KnnField {
	knnVectors:KnnVector[]
	dimensions:string[]

	constructor(dimensions:any) {
		this.dimensions = dimensions
		this.knnVectors = []
	}

	addDataPoint(knnVector:KnnVector){
		this.knnVectors.push(knnVector)
	}
}