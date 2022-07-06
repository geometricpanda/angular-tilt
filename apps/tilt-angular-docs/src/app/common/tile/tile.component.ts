import {Component, Input} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-tile]',
  styleUrls: ['./tile.component.css'],
  template: `
    <span class="tile">
      <span class="tile__inner">
        <span class="tile__image">
          <ng-content></ng-content>
        </span>
        <span class="tile__text">
          {{label}}
        </span>
      </span>
      <span class="tile__decoration"></span>
    </span>`,
})
export class TileComponent {

  @Input() label?: string

}
