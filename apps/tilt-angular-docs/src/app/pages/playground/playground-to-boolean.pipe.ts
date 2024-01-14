import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toBoolean',
  standalone: true
})
export class PlaygroundToBooleanPipe implements PipeTransform {

  transform(value: boolean | null): boolean {
    return !!value;
  }
}
