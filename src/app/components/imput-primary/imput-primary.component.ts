import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-imput-primary',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => ImputPrimaryComponent),
     multi: true
    }
  ],
  templateUrl: './imput-primary.component.html',
  styleUrl: './imput-primary.component.scss'
})
export class ImputPrimaryComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = ''
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }
  writeValue(value: any): void {
      this.value = value
  }

  registerOnChange(fn: any): void {
      this.onChange = fn
  }
  registerOnTouched(fn: any): void {
      this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {}
}
