import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileRestrict]'
})
export class MobileRestrictDirective {

constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event']) 
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'
    ];

    const isNumber = /^[0-9]$/.test(event.key);
    const inputValue: string = this.el.nativeElement.value;

    if (isNumber && inputValue.length >= 10) {
      event.preventDefault();
    }

    if (!isNumber && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    alert('Pasting is disabled for this field.');
  }

  @HostListener('copy', ['$event'])
  onCopy(event: ClipboardEvent) {
    event.preventDefault();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
  }
}
