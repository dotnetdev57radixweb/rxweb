import {  latLong,prop, } from "@rxweb/reactive-form-validators"

export class Country {

	@prop()
	continent: string;

	@prop()
	secondCountry: string;

	@prop()
	thirdCountry: string;

	@prop()
	firstCountry: string;

}
