import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalityService {

  private readonly _state = new BehaviorSubject<boolean>(false);

  get currentState() {
    return this._state.asObservable();
  }

  setState(state: boolean): void {
    this._state.next(state);
  }

}
