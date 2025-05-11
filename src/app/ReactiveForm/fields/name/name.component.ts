import { CommonModule } from '@angular/common';
import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css',
  standalone: true,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }] 
})
export class NameFieldComponent {
  @Input() controlName!: string;
  
   constructor(@Optional() private controlContainer: ControlContainer) {}

 get control() {
    return this.controlContainer?.control?.get(this.controlName);
  }
}