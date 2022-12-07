import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => EmailInputComponent),
    },
  ],
})
export class EmailInputComponent implements ControlValueAccessor, Validator {
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
    return Validators.email(control);
  }
}
