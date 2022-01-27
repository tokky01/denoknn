import KnnVector from "./KnnVector.ts";

// export default interface DistanceFunctions {
// 	distance(vector1: KnnVector, vector2: KnnVector): number;
// }

export function manhattanDistance(vector1: KnnVector, vector2: KnnVector): number {
	let res = 0
	vector1.values.forEach((value, index) => {
		res +=Math.abs(value.coordinate-vector2.values[index].coordinate)
	})
	return res
}