//src/app/emulated/emulated.component.ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-emulated',
    standalone: true,
    template: `<h1>Emulated Encapsulation</h1>`,
    styles: ['h1 { color: red; }'],
    encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent { }