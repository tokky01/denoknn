import KnnField from "./src/models/KnnField.ts";
import KnnVector from "./src/models/KnnVector.ts";
import {euclideanDistance, hammingDistance, manhattanDistance} from "./src/distanceFunctions.ts";
import CsvToKnnField from "./src/CsvToKnnField.ts";

export let distf = {euclideanDistance,manhattanDistance,hammingDistance}
export {KnnField, KnnVector,CsvToKnnField}