import {distf, KnnVector, KnnField} from "./mod.ts"
import {assertEquals} from "https://deno.land/std@0.122.0/testing/asserts.ts";
import {hammingDistance} from "./models/distanceFunctions.ts";

const dims = ["x", "y"]
const val0 = [0, 0]
const val1 = [1, 2]
const val2 = [-1, 3]
const val3 = [-1, -2]
const val4 = [1, -3]
const val5 = [1, 1]

const v0 = new KnnVector(val0, dims)
const v1 = new KnnVector(val1, dims)
const v2 = new KnnVector(val2, dims)
const v3 = new KnnVector(val3, dims)
const v4 = new KnnVector(val4, dims)
const v5 = new KnnVector(val5, dims)

Deno.test(function testManhattanDistance() {
	const res1 = distf.manhattanDistance(v1, v2)
	const res2 = distf.manhattanDistance(v3, v4)
	const res3 = distf.manhattanDistance(v1, v3)
	const res4 = distf.manhattanDistance(v2, v4)

	assertEquals(res1, 3)
	assertEquals(res2, 3)
	assertEquals(res3, 6)
	assertEquals(res4, 8)
})

Deno.test(function testEuclideanDistance(){
	const res1 = distf.euclideanDistance(v5, v0)
	const control = Math.sqrt(2)
	assertEquals(control,res1)
})

Deno.test(function testHammingDistance() {
	const val1 = [1, 2]
	const val2 = [1, 3]
	const val3 = [-1, 3]
	let v1 = new KnnVector(val1, dims)
	let v2 = new KnnVector(val2, dims)
	let v3 = new KnnVector(val3, dims)

	assertEquals(1,hammingDistance(v1,v2))
	assertEquals(Infinity,hammingDistance(v1,v3))

})

Deno.test(function knnFieldTest() {
	let knn = new KnnField(dims)
	knn.addDataVector(v1)
	knn.addDataVector(v2)
	knn.addDataVector(v3)
	knn.addDataVector(v4)

	assertEquals(v2,knn.getNearestNeighbour(v1,distf.manhattanDistance))

	knn = new KnnField(dims)
	knn.addDataPoint(val2)
	knn.addDataPoint(val3)
	knn.addDataPoint(val4)

	assertEquals(v2.values,knn.getNearestNeighbour(v1,distf.manhattanDistance).values)

})

Deno.test(function addDataTest() {
	let knn = new KnnField(dims)
	let data = [
		[1,0],
		[0,4],
		[1,0],
		[0,5],
		[1,1],
		[1,17],
	]
	knn.addData(data)

	assertEquals(true,knn.isValid())
	assertEquals(6,knn.size())

})





