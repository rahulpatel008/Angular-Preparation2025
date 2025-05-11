import { Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class NoteFieldComponent {
  @Input() controlName!: string;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  get control() {
    return this.controlContainer?.control?.get(this.controlName);
  }
}
