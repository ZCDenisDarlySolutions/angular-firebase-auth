import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
} from '@angular/forms';

import { PASSWORD_VALIDATION } from '@constants/pattern';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => PasswordInputComponent),
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor, Validator {
  @Input() title: string = 'Password';

  showPassword: boolean = false;
  disabled: boolean = false;
  touched: boolean = false;
  value: string | null = null;

  onChange?: (value: string) => void;
  onTouched?: () => void;

  #markAsTouched() {
    if (this.touched) {
      return;
    }
    this.onTouched?.();
    this.touched = true;
  }

  onInput(event: any) {
    const value = event.target.value;
    this.value = value;
    this.#markAsTouched();
    this.onChange?.(value);
  }

  onClickShow() {
    this.#markAsTouched();
    this.showPassword = !this.showPassword;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  writeValue(value: string) {
    this.value = value;
  }

  validate(control: AbstractControl) {
    const value = control.value as string;

    const isValidPassword = PASSWORD_VALIDATION.test(value);

    if (isValidPassword) {
      return null;
    }
    return {
      valid: 'Password not valid',
    };
  }
}
