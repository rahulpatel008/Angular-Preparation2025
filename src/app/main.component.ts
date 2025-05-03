import { Component } from '@angular/core';
import { ChildMessageComponent } from './decorators/child-message/child-message.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [ChildMessageComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  parentMessage: string = '';
  receiveMessage(message: string) {
    this.parentMessage = message;
  }

}
