import {
    ValidatorFn,
    AbstractControl
} from "@angular/forms";
import { RegexValidator } from "../util/regex-validator";
import { DateConfig } from "../models/config/date-config";
import { Linq } from "../util/linq";
import { ApplicationUtil } from "../util/app-util";
import { ObjectMaker } from "../util/object-maker";
import { DecoratorName } from "../util/decorator-name";
import { AnnotationTypes } from "../core/validator.static";
import { RegExRule } from "../util/index";

export function minDateValidator(config: DateConfig): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const controlValue = new Date(control.value);
        const formGroupValue = ApplicationUtil.getParentObjectValue(control);
        config = ApplicationUtil.getConfigObject(config);
        const parentObject = (control.parent) ? control.parent.value : undefined;
        if (Linq.IsPassed(formGroupValue, config.conditionalExpressions, parentObject)) {
            if (RegexValidator.isNotBlank(controlValue)) {
                if (controlValue instanceof Date || RegexValidator.isValid(controlValue, RegExRule.date)) {
                    let minDate = new Date(config.value);
                    if (!(controlValue >= minDate))
                        return ObjectMaker.toJson(AnnotationTypes.minDate, config.message || null, [control.value])
                }
            } else
                return ObjectMaker.toJson(AnnotationTypes.maxDate, config.message || null, [control.value])
        }
        return ObjectMaker.null();
    }
}
