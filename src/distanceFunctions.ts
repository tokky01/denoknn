import KnnVector from "./models/KnnVector.ts";
import DimensionCoordinate from "./models/DimensionCoordinate.ts";


export interface DistanceFunction {
	(vector1: KnnVector, vector2: KnnVector): number;
}

export let euclideanDistance: DistanceFunction = function (vector1: KnnVector, vector2: KnnVector): number {
	let sum = 0
	vector1.values.forEach((value, index) => {
		sum += Math.pow(value.coordinate - vector2.values[index].coordinate, 2)
	})
	return Math.sqrt(sum)
}

export let manhattanDistance: DistanceFunction = function (vector1: KnnVector, vector2: KnnVector): number {
	let res = 0
	vector1.values.forEach((value, index) => {
		res += Math.abs(value.coordinate - vector2.values[index].coordinate)
	})
	return res
}

export let hammingDistance: DistanceFunction = function (vector1: KnnVector, vector2: KnnVector): number {
	let res = 0
	function hammingDistance2(val1: DimensionCoordinate, val2: DimensionCoordinate): number {
		let cord1 = val1.coordinate.toString()
		let cord2 = val2.coordinate.toString()
		if (cord1.length !== cord2.length) {
			return Infinity;
		}
		let dist = 0;
		for (let i = 0; i < cord1.length; i += 1) {
			if (cord1[i] !== cord2[i]) {
				dist += 1;
			}
		}
		return dist;
	}

	vector1.values.forEach((value, index) => {
		res += hammingDistance2(value, vector2.values[index])
	})
	return res
}



