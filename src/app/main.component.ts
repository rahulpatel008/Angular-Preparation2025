import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedComponent } from './viewEncapsulation/emulated/emulated.component';
import { NoneComponent } from './viewEncapsulation/none/none.component';
import { ShadowDomComponent } from './viewEncapsulation/shadow-dom/shadow-dom.component';

@Component({
  selector: 'app-main',
  imports: [EmulatedComponent, NoneComponent, ShadowDomComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  // encapsulation: ViewEncapsulation.ShadowDom // None, Emulated, ShadowDom --- Try yourself and see the difference
})
export class MainComponent {

}
