import { Component, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-phone-fields',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class DynamicPhoneFieldsComponent {
  @Input() formArrayName!: string;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  get phones(): FormArray {
    return this.controlContainer?.control?.get(this.formArrayName) as FormArray;
  }

  addPhone() {
    this.phones.push(new FormControl('', { nonNullable: true, validators: [Validators.required] }));
  }

  removePhone(index: number) {
     if (index == 0) {
      return;
    } else
    this.phones.removeAt(index);
  }
}
