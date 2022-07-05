import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {NgTiltMousePositions, NgTiltValues} from './ng-tilt.interface';

@Directive({
  selector: '[ngTilt]',
  exportAs: 'ngTilt',
})
export class NgTiltDirective implements OnInit {

  public isActive = false;

  private _timeout?: number;
  private _mousePositions!: NgTiltMousePositions;
  private _ticking = false;
  private _resetting = false;

  @HostBinding('style.transform')
  private _hbStyleTransform?: string = undefined;

  @HostBinding('style.transition')
  private _hbStyleTransition?: string = undefined;

  @HostBinding('style.will-change')
  private readonly _hbStyleWillChange = 'transform';

  @HostBinding('style.transform-style')
  private readonly _hbStyleTransformStyle = 'preserve-3d';

  /** The maximum tilt rotation (degrees) */
  @Input() maxTilt = 20;
  /** Sets the perspective, lower numbers will transition more */
  @Input() perspective = 300;
  /** Easing effect on mouse enter / exit */
  @Input() easing = 'cubic-bezier(.03,.98,.52,.99)';
  /** Sets the scale to increase on hover */
  @Input() scale = 1;
  /** Sets the speed of the transition (in ms) */
  @Input() speed = 400;
  /** Disables tilting on a specific */
  @Input() disableAxis?: 'x' | 'y' = undefined;
  /** If the tilt effect has to be reset on mouse exit */
  @Input() reset: boolean = true;

  @HostListener('mouseenter')
  private onMouseEnter() {
    this._ticking = false;
    this.setTransition();
    this.isActive = true;
  }

  @HostListener('mousemove', ['$event'])
  private onMouseMove($event: MouseEvent) {
    this._mousePositions = this.getMousePositions($event);
    this.requestTick();

  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    if (this.reset) {
      this._resetting = true;
      this.setTransition();
      this.requestTick();
      this.isActive = false;
    }
  }

  constructor(private elRef: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    this._mousePositions = this.getMousePositions();
  }

  private requestTick(): void {
    if (this._ticking) {
      return;
    }

    requestAnimationFrame(() => this.updateTransforms());
    this._ticking = true;
  };

  private getMousePositions($event?: MouseEvent): NgTiltMousePositions {

    if (!$event) {
      const {offsetTop, offsetLeft, clientWidth, clientHeight} = this.elRef.nativeElement;
      const x = offsetLeft + clientWidth / 2
      const y = offsetTop + clientHeight / 2;
      return {x, y};
    }

    return {
      x: $event.pageX,
      y: $event.pageY,
    };

  }


  private getTiltValues(): NgTiltValues {
    const {width, height, left, top} = this.elRef.nativeElement.getBoundingClientRect();

    const percentageX = (this._mousePositions.x - left) / width;
    const percentageY = (this._mousePositions.y - top) / height;

    const tiltX = (this.maxTilt / 2) - (percentageX * this.maxTilt);
    const tiltY = (percentageY * this.maxTilt) - (this.maxTilt / 2);

    const angle = Math.atan2(
      this._mousePositions.x - (left + width / 2),
      -(this._mousePositions.y - (top + height / 2)),
    ) * (180 / Math.PI);

    return {
      angle,
      percentageX: percentageX * 100,
      percentageY: percentageY * 100,
      tiltX,
      tiltY,
    };
  };

  private updateTransforms(): void {
    return this._resetting
      ? this.updateReset()
      : this.updateTransform();
  };

  private updateTransform(): void {
    const {tiltX, tiltY} = this.getTiltValues();

    this._hbStyleTransform = [
      `perspective(${this.perspective}px)`,
      this.disableAxis !== 'x' && `rotateX(${tiltY}deg)`,
      this.disableAxis !== 'y' && `rotateY(${tiltX}deg)`,
      `scale3d(${this.scale},${this.scale},${this.scale})`,
    ]
      .filter(Boolean)
      .join(' ');

    this._ticking = false;
  }

  private updateReset(): void {
    this._hbStyleTransform = undefined;
    this._resetting = false;
  }

  private setTransition() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._hbStyleTransition = [
      `${this.speed}ms`,
      `${this.easing}`,
    ].join(' ');

    this._timeout = setTimeout(() => this._hbStyleTransition = undefined, this.speed);
  }

}
