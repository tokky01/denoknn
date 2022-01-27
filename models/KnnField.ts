import KnnVector from "./KnnVector.ts";
import {manhattanDistance} from "./distanceFunctions.ts";

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

	getNearestNeighbour(vector: KnnVector,): KnnVector {
		let nearestNeighbour: KnnVector = vector
		let nearestDistance: number = Infinity
		this.knnVectors.forEach((value) => {
			let distance: number = manhattanDistance(vector, value)
			if (nearestDistance > distance && vector.id !== value.id) {
				nearestNeighbour = value
				nearestDistance = distance
			}
		})
		return nearestNeighbour
	}
}