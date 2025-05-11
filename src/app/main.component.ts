import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NameFieldComponent } from './ReactiveForm/fields/name/name.component';
import { SexFieldComponent } from './ReactiveForm/fields/sex/sex.component';
import { UsernameFieldComponent } from './ReactiveForm/fields/username/username.component';
import { CityFieldComponent } from './ReactiveForm/fields/city/city.component';
import { NoteFieldComponent } from './ReactiveForm/fields/note/note.component';
import { DateFieldComponent } from './ReactiveForm/fields/date/date.component';
import { TimeFieldComponent } from './ReactiveForm/fields/time/time.component';
import { DynamicPhoneFieldsComponent } from './ReactiveForm/fields/phone-number/phone-number.component';
import { DynamicMobileFieldsComponent } from './ReactiveForm/fields/mobile-number/mobile-number.component';
import { usernameValidator } from './custom-validators/username.validator';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NameFieldComponent,
    UsernameFieldComponent,
    SexFieldComponent,
    CityFieldComponent,
    NoteFieldComponent,
    DateFieldComponent,
    TimeFieldComponent,
    DynamicPhoneFieldsComponent,
    DynamicMobileFieldsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    username: ['', [Validators.required, usernameValidator()]],
    sex: ['', Validators.required],
    city: ['', Validators.required],
    note: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    phoneNumbers: this.fb.array([this.fb.control('', Validators.required)]),
    mobileNumbers: this.fb.array([this.fb.control('', Validators.required)]),
  });

  constructor(private fb: FormBuilder) {}

   get phoneNumbers() {
    return this.form.get('phoneNumbers') as FormArray;
  }
  

  get mobileNumbers() {
    return this.form.get('mobileNumbers') as FormArray;
  }

  save() {
    if (this.form.valid && (this.phoneNumbers.valid && this.mobileNumbers.valid)) {
      alert('Form is valid');
      alert(JSON.stringify(this.form.value));
    } else {
      this.form.markAllAsTouched();
    }
  }

  reset() {
    this.form.reset();
    this.phoneNumbers.clear();
    this.phoneNumbers.push(this.fb.control('', Validators.required));
    this.mobileNumbers.clear();
    this.mobileNumbers.push(this.fb.control('', Validators.required));
  }

  cancel() {
    alert('Cancelled');
  }
}
