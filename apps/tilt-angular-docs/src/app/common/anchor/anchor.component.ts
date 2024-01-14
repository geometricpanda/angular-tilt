import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-anchor]',
  template: '<ng-content/>',
  styleUrl: './anchor.component.css',
  standalone: true,
})
export class AnchorComponent {

}
