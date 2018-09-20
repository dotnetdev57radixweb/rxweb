import {FormControl,ValidatorFn ,AsyncValidatorFn} from "@angular/forms";

export class RxFormControl extends FormControl {
    private keyName:string;

    constructor(formState: any, validator: ValidatorFn | ValidatorFn[] | null, asyncValidator: AsyncValidatorFn | AsyncValidatorFn[] | null, private entityObject:{[key:string]:any}, private baseObject:{[key:string]:any}, controlName:string){
        super(formState, validator, asyncValidator)
        this.keyName = controlName;
    }

    setValue(value:any, options?: {
        dirty?:boolean
        onlySelf?: boolean;
        emitEvent?: boolean;
    }):void {
      if(options && options.dirty)
        this.baseObject[this.keyName] = value;
      this.entityObject[this.keyName] = value;
      super.setValue(value,options);
    }
}