import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-username-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class UsernameFieldComponent {
  @Input() controlName!: string;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  get control() {
    return this.controlContainer?.control?.get(this.controlName);
  }
}
