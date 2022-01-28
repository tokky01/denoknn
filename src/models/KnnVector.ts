import DimensionCoordinate from "./DimensionCoordinate.ts";

export default class KnnVector {
	values: DimensionCoordinate[]
	dimensions: string[]
	id:string
	constructor(values: number[], dimensions: string[]){
		this.dimensions = dimensions;
		this.values =[]
		this.id = crypto.randomUUID()
		values.forEach((value, index)=> {
			this.values.push(new DimensionCoordinate(dimensions[index],value))
		})
	}
	
}