import { Directive, HostBinding, inject } from '@angular/core';
import { ModalityService } from '../services/modality.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[appModality]',
  standalone: true
})
export class ModalityDirective {

  private modalityService = inject(ModalityService);

  modalityListener$ = this.modalityService
    .currentState
    .pipe(takeUntilDestroyed())
    .subscribe(state => this.hbAttrAriaHidden = state || undefined);

  @HostBinding('attr.aria-hidden')
  private hbAttrAriaHidden?: boolean;


}
