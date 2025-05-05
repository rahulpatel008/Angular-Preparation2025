//src/app/none/none.component.ts:
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-none',
    standalone: true,
    template: `<h1>No Encapsulation</h1>`,
    styles: ['h1 { color: yellow; }'],
    encapsulation: ViewEncapsulation.None
})
export class NoneComponent { }