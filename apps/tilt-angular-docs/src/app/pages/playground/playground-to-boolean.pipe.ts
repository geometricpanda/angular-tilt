import {Pipe, PipeTransform} from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Pipe({
  name: 'toBoolean',
})
export class PlaygroundToBooleanPipe implements PipeTransform {

  transform(value: boolean | null): boolean {
    return !!value;
  }
}
