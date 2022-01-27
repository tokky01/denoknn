import {manhattanDistance,KnnVector} from "./mod.ts"

let dims = ["x","y"]
let val1 = [1,2]
let val2 = [-1,3]

let v1 = new KnnVector(val1,dims)
let v2 = new KnnVector(val2,dims)

console.log(manhattanDistance(v1,v2))