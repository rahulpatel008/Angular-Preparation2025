import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  const regex = /^[a-zA-Z0-9._]+$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !regex.test(value)) {
      return { invalidUsername: true };
    }
    return null;
  };
}


export function usernameTemlateDrivenValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const valid = /^[a-zA-Z0-9._]+$/.test(value);
    return valid ? null : { invalidUsername: { value } };
  };
}
