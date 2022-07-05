import {Pipe, PipeTransform} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Pipe({
  name: 'toXyString',
})
export class PlaygroundToXyStringPipe implements PipeTransform {

  transform(value: string | undefined | null): 'x' | 'y' | undefined {
    switch (value) {
      case 'x':
        return 'x';
      case 'y':
        return 'y';
      default:
        return undefined;
    }
  }
}
