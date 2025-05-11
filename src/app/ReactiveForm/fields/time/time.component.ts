import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class TimeFieldComponent {
  @Input() controlName!: string;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  get control() {
    return this.controlContainer?.control?.get(this.controlName);
  }
}
