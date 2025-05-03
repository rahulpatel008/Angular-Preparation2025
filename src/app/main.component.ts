import { Component, HostListener, Inject } from '@angular/core';
import { ChildMessageComponent } from './decorators/child-message/child-message.component';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [ChildMessageComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.title = 'Angular Decorators Example';
  }
  clickCount = 0;
  
  parentMessage: string = '';
  receiveMessage(message: string) {
    this.parentMessage = message;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.clickCount++;
  }
}
