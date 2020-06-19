import { IAbstractControl } from './i-abstract-control'
import { AbstractControl } from '@angular/forms';

export interface IFormGroup<T> extends IAbstractControl<T, T> {
    controls: {
        [key in keyof T]: IAbstractControl<T[key], T>;
    }

    addControl<K extends keyof T>(name: Extract<keyof T, string>, control: AbstractControl | IAbstractControl<T[K]>): void;

    contains(controlName: keyof T): boolean;

    getRawValue(): T;

    patchValue(value: Partial<T>, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    registerControl<K extends keyof T>(name: Extract<keyof T, string>, control: AbstractControl | IAbstractControl<T[K]>): AbstractControl;
    removeControl(name: keyof T): void;
    reset(value?: T, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    setControl<K extends keyof T>(name: Extract<keyof T, string>, control: AbstractControl | IAbstractControl<T[K]>): void;
    setValue<K extends keyof T>(value: T, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
}
