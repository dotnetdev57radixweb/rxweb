import {  endsWith,prop, } from "@rxweb/reactive-form-validators"

export class User {

	@endsWith({value:'m'  ,message:'{{0}} does not ends with `m`' }) 
	name: string;

	//If you want to apply conditional expression of type 'function'
	@endsWith({value:'r'  ,conditionalExpression:(x,y) => x.name == "Adam"  }) 
	profession: string;

	//If you want to apply conditional expression of type 'string'
	@endsWith({value:'#'  ,conditionalExpression:'x => x.name =="Adam"' }) 
	taskId: string;

}
