import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

import {
  combineLatest,
  delay,
  distinct,
  filter,
  map,
  pluck,
  Subject,
  Subscription,
  tap,
  throttleTime,
} from 'rxjs';

import {NgTiltMousePositions, NgTiltValues} from './ng-tilt.interface';
import {RequestAnimationFrame} from './request-animation-frame.subject';


const mousePositionToCoordinates = (element: HTMLElement) =>
  ($event: MouseEvent | void): NgTiltMousePositions => {
    if (!$event) {
      const {offsetTop, offsetLeft, clientWidth, clientHeight} = element;
      const x = offsetLeft + clientWidth / 2
      const y = offsetTop + clientHeight / 2;
      return {x, y};
    }
    return {
      x: $event.pageX,
      y: $event.pageY,
    };
  }

const coordinatesToTransforms = (element: HTMLElement, maxTilt: number) =>
  (mousePositions: NgTiltMousePositions): NgTiltValues => {
    const {width, height, left, top} = element.getBoundingClientRect();

    const percentageX = (mousePositions.x - left) / width;
    const percentageY = (mousePositions.y - top) / height;

    const tiltX = (maxTilt / 2) - (percentageX * maxTilt);
    const tiltY = (percentageY * maxTilt) - (maxTilt / 2);

    const angle = Math.atan2(
      mousePositions.x - (left + width / 2),
      mousePositions.y - (top + height / 2),
    ) * (180 / Math.PI);

    return {
      angle,
      percentageX: Math.round(percentageX * 100),
      percentageY: Math.round(percentageY * 100),
      tiltX,
      tiltY,
    };
  }


@Directive({
  selector: '[ngTilt]',
  exportAs: 'ngTilt',
})
export class NgTiltDirective implements OnDestroy {

  private animationFrameSubject = RequestAnimationFrame();
  private mouseMoveSubject = new Subject<MouseEvent | void>();

  private doTransitionSubscription?: Subscription;
  private resetTransitionSubscription?: Subscription;

  @HostBinding('style.transform')
  private _hbStyleTransform?: string = undefined;

  @HostBinding('style.transition')
  public get _hbStyleTransition(): string {
    return `transform ${this.speed}ms ${this.easing}`;
  }

  @HostBinding('style.will-change')
  private readonly _hbStyleWillChange = 'transform';

  @HostBinding('style.transform-style')
  private readonly _hbStyleTransformStyle = 'preserve-3d';

  /**
   * Options
   */
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
  @Input() reset = true;

  @HostListener('mouseenter')
  private onMouseEnter() {
    this.stopReset();
    this.startTransition();
  }

  @HostListener('mousemove', ['$event'])
  private onMouseMove($event: MouseEvent) {
    this.mouseMoveSubject.next($event);
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.stopTransition();
    this.startReset();
  }

  constructor(private elRef: ElementRef<HTMLElement>) {
  }

  ngOnDestroy() {
    this.stopReset();
    this.stopTransition();
  }

  private startTransition() {

    const transformCoordinates = this.mouseMoveSubject
      .pipe(map(mousePositionToCoordinates(this.elRef.nativeElement)))
      .pipe(map(coordinatesToTransforms(this.elRef.nativeElement, this.maxTilt)));

    this.doTransitionSubscription = combineLatest([this.animationFrameSubject, transformCoordinates])
      .pipe(pluck(1))
      .pipe(distinct())
      .pipe(map(({tiltX, tiltY}) => ({
        tiltX: this.disableAxis === 'x' ? 0 : tiltX,
        tiltY: this.disableAxis === 'y' ? 0 : tiltY,
      })))
      .pipe(map(({tiltX, tiltY}) => [
        `perspective(${this.perspective}px)`,
        `scale3d(${this.scale},${this.scale},${this.scale})`,
        `rotateX(${tiltY}deg)`,
        `rotateY(${tiltX}deg)`,
      ]))
      .subscribe((transform) => this._hbStyleTransform = transform.join(''));
  }

  private startReset() {
    this.resetTransitionSubscription = this.animationFrameSubject
      .pipe(throttleTime(this.speed))
      .pipe(filter(() => this.reset))
      .pipe(tap(() => this._hbStyleTransform = undefined))
      .pipe(delay(this.speed))
      .subscribe(() => this.stopReset());
  }

  private stopReset() {
    this.resetTransitionSubscription?.unsubscribe();
  }

  private stopTransition() {
    this.doTransitionSubscription?.unsubscribe();
  }


}
