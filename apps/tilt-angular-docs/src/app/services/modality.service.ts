import { inject, Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlockScrollStrategy, ViewportRuler } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ModalityService extends BlockScrollStrategy {

  private readonly _state = new BehaviorSubject<boolean>(false);

  get currentState() {
    return this._state.asObservable();
  }

  constructor() {
    const viewportRuler = inject(ViewportRuler);
    const document = inject(DOCUMENT);
    super(viewportRuler, document);
  }

  setState(state: boolean): void {
    this._state.next(state);

    if (state) {
      this.enable();
    } else {
      this.disable();
    }
  }

}
