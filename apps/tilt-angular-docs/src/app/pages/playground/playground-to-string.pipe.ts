import {Pipe, PipeTransform} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Pipe({
  name: 'toNumber',
})
export class PlaygroundToNumberPipe implements PipeTransform {

  transform(value: number | undefined | null): number {
    return coerceNumberProperty(value);
  }
}
