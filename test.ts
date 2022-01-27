import {manhattanDistance, KnnVector,KnnField} from "./mod.ts"
import {assertEquals} from "https://deno.land/std@0.122.0/testing/asserts.ts";

const dims = ["x", "y"]
const val1 = [1, 2]
const val2 = [-1, 3]
const val3 = [-1, -2]
const val4 = [1, -3]

let v1 = new KnnVector(val1, dims)
let v2 = new KnnVector(val2, dims)
let v3 = new KnnVector(val3, dims)
let v4 = new KnnVector(val4, dims)

Deno.test(function testManhattanDistance() {
	const res1 = manhattanDistance(v1, v2)
	const res2 = manhattanDistance(v3, v4)
	const res3 = manhattanDistance(v1, v3)
	const res4 = manhattanDistance(v2, v4)

	assertEquals(res1, 3)
	assertEquals(res2, 3)
	assertEquals(res3, 6)
	assertEquals(res4, 8)
})

Deno.test(function knnFieldTest() {
	let knn = new KnnField(dims)
	knn.addDataVector(v1)
	knn.addDataVector(v2)
	knn.addDataVector(v3)
	knn.addDataVector(v4)

	assertEquals(v2,knn.getNearestNeighbour(v1))

	knn = new KnnField(dims)
	knn.addDataPoint(val2)
	knn.addDataPoint(val3)
	knn.addDataPoint(val4)

	assertEquals(v2.values,knn.getNearestNeighbour(v1).values)

})






