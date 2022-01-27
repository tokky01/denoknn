import KnnVector from "./KnnVector.ts";


interface DistanceFunction {
	(vector1: KnnVector, vector2: KnnVector): number;
}

export let euclideanDistance: DistanceFunction = function (vector1: KnnVector, vector2: KnnVector): number {
	let sum = 0
	vector1.values.forEach((value, index) => {
		sum += Math.pow(value.coordinate - vector2.values[index].coordinate, 2)
	})
	return Math.sqrt(sum)
}

export let manhattanDistance: DistanceFunction = function (vector1: KnnVector, vector2: KnnVector): number{
	let res = 0
	vector1.values.forEach((value, index) => {
		res += Math.abs(value.coordinate - vector2.values[index].coordinate)
	})
	return res
}


