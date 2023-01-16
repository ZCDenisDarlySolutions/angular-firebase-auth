import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const isCorrectRepeatPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const { password, repeatPassword } = control.value;

  const isValid =
    !!password?.trim() &&
    !!repeatPassword?.trim() &&
    password === repeatPassword;
  return isValid ? null : { isCorrectRepeatPassword: false };
};
