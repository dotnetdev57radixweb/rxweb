import {  port,prop, } from "@rxweb/reactive-form-validators"

export class User {

	@prop()
	browser: string;

	@prop()
	entertainmentWebsitePort: string;

	@prop()
	shoppingWebsitePort: string;

	@prop()
	educationalWebsitePort: string;

}
