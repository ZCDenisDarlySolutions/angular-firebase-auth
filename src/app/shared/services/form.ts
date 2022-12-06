import { FormControl, ValidatorFn, Validators } from '@angular/forms';

export const FormFactory = {
  control: (validators: ValidatorFn[] = []) =>
    new FormControl('', [Validators.required, ...validators]),
};
