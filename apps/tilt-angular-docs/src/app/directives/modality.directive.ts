import {Directive, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {ModalityService} from '../services/modality.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appModality]',
})
export class ModalityDirective implements OnInit, OnDestroy {

  modalityListener$?: Subscription;

  @HostBinding('attr.aria-hidden')
  private hbAttrAriaHidden?: boolean

  constructor(private modalityService: ModalityService) {
  }

  ngOnInit() {
    this.modalityListener$ = this.modalityService
      .currentState
      .subscribe(state => this.hbAttrAriaHidden = state || undefined)
  }

  ngOnDestroy() {
    this.modalityListener$?.unsubscribe();
  }

}
