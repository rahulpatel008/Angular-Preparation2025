import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sex-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class SexFieldComponent {
  @Input() controlName!: string;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  get control() {
    return this.controlContainer?.control?.get(this.controlName);
  }
}
