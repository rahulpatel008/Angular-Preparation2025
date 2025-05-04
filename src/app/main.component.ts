import { AfterViewInit, Component, ElementRef, HostListener, Inject, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ChildMessageComponent } from './decorators/@InputOut-child-message/child-message.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ViewChildComponent } from './decorators/@ViewChild/view-child.component';

@Component({
  selector: 'app-main',
  imports: [ChildMessageComponent, ViewChildComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT, ) private document: Document, private viewContainer: ViewContainerRef ) {
    this.document.title = 'Angular Decorators Example';
  }
  @ViewChild('templateRef') template!: TemplateRef<any>;

  clickCount = 0;
  viewChildTrue = false;
  
  parentMessage: string = '';
  receiveMessage(message: string) {
    this.parentMessage = message;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.clickCount++;
  }

  @ViewChild(ViewChildComponent) viewChildComponent!: ViewChildComponent;
  ngAfterViewInit() {
    // The childComponent is now available
  }
  callChildGreet() {
    this.viewChildTrue = true;
    this.viewChildComponent.greet();
  }
  @ViewChild('inputRef') inputElement!: ElementRef;
  focusInput() {
    this.inputElement.nativeElement.focus();
  }

  renderTemplate() {
    this.viewContainer.createEmbeddedView(this.template);
  }

/* Use Case 2: Accessing Multiple DOM Elements
Scenario:
You have multiple <input> elements and want to clear all of them with a single button click.
 */
@ViewChildren('inputRef') inputElements!: QueryList<ElementRef>;

clearAllInputs() {
  this.inputElements.forEach(input => input.nativeElement.value = '');
}

}
