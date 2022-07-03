import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ModalityService} from './modality.service';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {

  private readonly _state = new BehaviorSubject<boolean>(false);

  get currentState() {
    return this._state.asObservable();
  }

  constructor(private modalityService: ModalityService) {
  }

  setState(state: boolean): void {
    this._state.next(state);
    this.modalityService.setState(state);
  }

}
