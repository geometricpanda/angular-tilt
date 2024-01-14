import {
  booleanAttribute, DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  numberAttribute,
  OnChanges, PLATFORM_ID,
  Renderer2,
  SimpleChanges
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
  throttleTime
} from 'rxjs';

import { NgTiltMousePositions, NgTiltValues } from './ng-tilt.interface';
import { RequestAnimationFrame } from './request-animation-frame.subject';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


const mousePositionToCoordinates = (element: HTMLElement) =>
  ($event: MouseEvent | void): NgTiltMousePositions => {
    if (!$event) {
      const { offsetTop, offsetLeft, clientWidth, clientHeight } = element;
      const x = offsetLeft + clientWidth / 2;
      const y = offsetTop + clientHeight / 2;
      return { x, y };
    }
    return {
      x: $event.pageX,
      y: $event.pageY
    };
  };

const coordinatesToTransforms = (element: HTMLElement, maxTilt: number) =>
  (mousePositions: NgTiltMousePositions): NgTiltValues => {
    const { width, height, left } = element.getBoundingClientRect();
    const { offsetTop } = element;

    const percentageX = (mousePositions.x - left) / width;
    const percentageY = (mousePositions.y - offsetTop) / height;

    const tiltX = (maxTilt / 2) - (percentageX * maxTilt);
    const tiltY = (percentageY * maxTilt) - (maxTilt / 2);

    const angle = Math.atan2(
      mousePositions.x - (left + width / 2),
      mousePositions.y - (offsetTop + height / 2)
    ) * (180 / Math.PI);

    return {
      angle,
      percentageX: Math.round(percentageX * 100),
      percentageY: Math.round(percentageY * 100),
      tiltX,
      tiltY
    };
  };


@Directive({
  selector: '[ngTilt]',
  exportAs: 'ngTilt',
  standalone: true
})
export class NgTiltDirective implements OnChanges {

  document = inject(DOCUMENT);
  renderer = inject(Renderer2);
  elRef: ElementRef<HTMLElement> = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  platformId = inject(PLATFORM_ID)

  outerGlare?: HTMLDivElement;
  innerGlare?: HTMLDivElement;

  private $window = this.document.defaultView;

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

  @Input() easing = 'cubic-bezier(.03,.98,.52,.99)';
  @Input() disableAxis?: 'x' | 'y' = undefined;
  @Input({ transform: numberAttribute }) maxTilt = 20;
  @Input({ transform: numberAttribute }) perspective = 300;
  @Input({ transform: numberAttribute }) scale = 1;
  @Input({ transform: numberAttribute }) speed = 400;
  @Input({ transform: booleanAttribute }) reset = true;
  @Input({ transform: booleanAttribute }) glare = false;
  @Input({ transform: numberAttribute }) maxGlare = 0.4;
  @Input({ transform: booleanAttribute }) global = false;

  @HostListener('mouseenter')
  private onMouseEnter() {
    if (!this.global) {
      this.stopReset();
      this.startTransition();
    }
  }

  @HostListener('mousemove', ['$event'])
  private onMouseMove($event: MouseEvent) {
    if (!this.global) {
      this.mouseMoveSubject.next($event);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  private onWindowMouseMove($event: MouseEvent) {
    if (this.global) {
      this.mouseMoveSubject.next($event);
    }
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    if (!this.global) {
      this.stopTransition();
      this.startReset();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['glare']) {
      if (changes['glare']?.currentValue) {
        this.createGlare();
      } else {
        this.removeGlare();
      }
    }

    if (changes['global']) {
      if (changes['global']?.currentValue) {
        this.stopReset();
        this.startTransition();
      } else {
        this.stopTransition();
        this.startReset();
      }
    }
  }

  removeGlare() {
    this.outerGlare?.remove();
    this.outerGlare = undefined;
    this.innerGlare?.remove();
    this.innerGlare = undefined;
  }

  createGlare() {

    if (this.outerGlare || this.innerGlare) {
      this.removeGlare();
    }

    const outer: HTMLDivElement = this.renderer.createElement('div');
    const inner: HTMLDivElement = this.renderer.createElement('div');

    outer.setAttribute('data-tilt', 'outer');
    outer.setAttribute('data-tilt', 'inner');

    const hostStyles = this.$window?.getComputedStyle(this.elRef.nativeElement);

    const outerStyles = {
      'border-radius': hostStyles?.getPropertyValue('border-radius') || 'unset',
      'overflow': 'hidden',
      'pointer-events': 'none',
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%'
    };

    const innerStyles = {
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'background-image': `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
      'width': '200%',
      'height': '200%',
      'transform': 'rotate(180deg) translate(-50%, -50%)',
      'transform-origin': '0% 0%',
      'transition': `transform ${this.speed}ms ${this.easing}, opacity ${this.speed}ms ${this.easing}`,
      'will-change': 'transform, opacity',
      'opacity': '0'
    };

    Object.entries(outerStyles)
      .forEach(([property, value]) => outer.style.setProperty(property, value));

    Object.entries(innerStyles)
      .forEach(([property, value]) => inner.style.setProperty(property, value));

    this.outerGlare = outer;
    this.innerGlare = inner;
    this.renderer.appendChild(outer, inner);
    this.renderer.appendChild(this.elRef.nativeElement, outer);

  }

  private startTransition() {

    if(isPlatformServer(this.platformId)) {
      return;
    }

    const transformCoordinates = this.mouseMoveSubject
      .pipe(map(mousePositionToCoordinates(this.elRef.nativeElement)))
      .pipe(map(coordinatesToTransforms(this.elRef.nativeElement, this.maxTilt)));

    this.doTransitionSubscription = combineLatest([this.animationFrameSubject, transformCoordinates])
      .pipe(pluck(1))
      .pipe(distinct())
      .pipe(map(({ tiltX, tiltY, ...rest }) => ({
        tiltX: this.disableAxis === 'x' ? 0 : tiltX,
        tiltY: this.disableAxis === 'y' ? 0 : tiltY,
        ...rest
      })))
      .pipe(map(({ tiltX, tiltY, angle, percentageY }) => {
        const hostStyleTransform = [
          `perspective(${this.perspective}px)`,
          `scale3d(${this.scale},${this.scale},${this.scale})`,
          `rotateX(${tiltY}deg)`,
          `rotateY(${tiltX}deg)`
        ].join('');

        const glareStyleTransform = `rotate(${angle}deg) translate(-50%, -50%)`;
        const glareStyleOpacity = `${percentageY * this.maxGlare / 100}`;

        return {
          hostStyleTransform,
          glareStyleTransform,
          glareStyleOpacity
        };
      }))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ hostStyleTransform, glareStyleTransform, glareStyleOpacity }) => {
        this._hbStyleTransform = hostStyleTransform;
        this.innerGlare?.style.setProperty('transform', glareStyleTransform);
        this.innerGlare?.style.setProperty('opacity', glareStyleOpacity);
      });
  }

  private startReset() {

    if(isPlatformServer(this.platformId)) {
      return;
    }

    this.resetTransitionSubscription = this.animationFrameSubject
      .pipe(throttleTime(this.speed))
      .pipe(filter(() => this.reset))
      .pipe(tap(() => {
        this._hbStyleTransform = undefined;
        this.innerGlare?.style.setProperty('transform', 'rotate(180deg) translate(-50%, -50%)');
        this.innerGlare?.style.setProperty('opacity', '0');
      }))
      .pipe(delay(this.speed))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.stopReset());
  }

  private stopReset() {
    this.resetTransitionSubscription?.unsubscribe();
  }

  private stopTransition() {
    this.doTransitionSubscription?.unsubscribe();
  }


}
