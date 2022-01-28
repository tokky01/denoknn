import KnnField from "./models/KnnField.ts";
import KnnVector from "./models/KnnVector.ts";
import {euclideanDistance,manhattanDistance} from "./models/distanceFunctions.ts";

export let distf = {euclideanDistance,manhattanDistance}
export {KnnField, KnnVector}