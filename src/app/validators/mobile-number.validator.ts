import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(value) ? null : { invalidMobile: true };
  };
}
