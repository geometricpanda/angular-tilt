import {Observable} from 'rxjs';


export const RequestAnimationFrame = (): Observable<number> =>
  new Observable<number>(subscriber => {

    const doTick = (counter: number) => {
      if (!subscriber.closed) {
        requestAnimationFrame(() => {
          subscriber.next(counter);
          return counter < Number.MAX_SAFE_INTEGER
            ? doTick(counter + 1)
            : doTick(0);
        });
      }
    }

    doTick(0);

  });
