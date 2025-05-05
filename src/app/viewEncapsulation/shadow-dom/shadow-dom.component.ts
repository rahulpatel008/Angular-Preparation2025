//src/app/shadow-dom/shadow-dom.component.ts:
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-shadow-dom',
    standalone: true,
    template: `<h2>Shadow DOM Encapsulation</h2>`,
    styles: ['h2 { color: green; }'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomComponent { }