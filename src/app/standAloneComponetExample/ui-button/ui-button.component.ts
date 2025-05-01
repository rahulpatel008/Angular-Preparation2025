import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css'
})
export class UiButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() styleClass: 'primary' | 'secondary' = 'primary';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

}
