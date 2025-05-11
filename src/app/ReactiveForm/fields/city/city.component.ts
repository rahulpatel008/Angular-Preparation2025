import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class CityFieldComponent {
  @Input() controlName!: string;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  get control() {
    return this.controlContainer?.control?.get(this.controlName);
  }

  cities = ['New York', 'London', 'Delhi', 'Tokyo'];
}
