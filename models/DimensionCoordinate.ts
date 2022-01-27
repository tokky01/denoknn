export default class DimensionCoordinate {
	dimensionName:string
	coordinate:number

	constructor(dimensionName: string, coordinate: number) {
		this.dimensionName = dimensionName;
		this.coordinate = coordinate;
	}
}
