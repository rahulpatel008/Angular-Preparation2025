import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-message',
  templateUrl: './child-message.component.html'
})

export class ChildMessageComponent {
  @Input() userName: string = '';

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit('Hello Parent! 👋');
  }
}

