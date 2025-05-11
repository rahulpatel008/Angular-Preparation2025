import { Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlContainer,
  FormArray,
  FormGroupDirective,
  ReactiveFormsModule,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-mobile-fields',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class DynamicMobileFieldsComponent {
  @Input() formArrayName!: string;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  get mobiles(): FormArray {
    return this.controlContainer?.control?.get(this.formArrayName) as FormArray;
  }

  addMobile() {
    this.mobiles.push(new FormControl('', { nonNullable: true, validators: [Validators.required] }));
  }

  removeMobile(index: number) {
    if (index == 0) {
      return;
    } else
    this.mobiles.removeAt(index);
  }
}
