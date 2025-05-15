import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { mobileNumberValidator } from './validators/mobile-number.validator';
import { MobileRestrictDirective } from './directives/mobile-restrict.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [ReactiveFormsModule, MobileRestrictDirective, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: true,
})
export class MainComponent {

 mobileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mobileForm = this.fb.group({
      mobile: ['', [Validators.required, mobileNumberValidator()]]
    });
  }

  get mobileControl() {
    return this.mobileForm.get('mobile');
  }

  onSubmit() {
    if (this.mobileForm.valid) {
      alert('Mobile number is valid!');
    } else {
      alert('Please enter a valid 10-digit mobile number.');
       console.log(this.mobileForm.errors);
       console.log(this.mobileForm.get('mobile')?.errors);
    }
  }

}
