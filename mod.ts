import KnnField from "./models/KnnField.ts";
import KnnVector from "./models/KnnVector.ts";
import {euclideanDistance, hammingDistance, manhattanDistance} from "./models/distanceFunctions.ts";

export let distf = {euclideanDistance,manhattanDistance,hammingDistance}
export {KnnField, KnnVector}