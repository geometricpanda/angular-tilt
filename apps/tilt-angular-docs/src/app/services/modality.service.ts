import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BlockScrollStrategy, ViewportRuler} from '@angular/cdk/overlay';
import {DOCUMENT} from '@angular/common';
import {Document} from 'postcss';

@Injectable({
  providedIn: 'root',
})
export class ModalityService extends BlockScrollStrategy {

  private readonly _state = new BehaviorSubject<boolean>(false);

  get currentState() {
    return this._state.asObservable();
  }

  constructor(
    viewportRuler: ViewportRuler,
    @Inject(DOCUMENT) document: Document,
  ) {
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
