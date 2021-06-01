import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, switchMap} from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffect{
      constructor(
    private actions$: Actions) {
  }
//xyz$ = createEffect(() =>
    //this.actions$.pipe(
     // ofType(AppActions.xyz),
    //  switchMap(() =>
     //   this.dropdownService.xyz().pipe(
      //    map((data) => AppActions.setXYZ({ data: dropdownData })),
     //     catchError(errors => of(AppActions.setErrors({ errors: errors })))
    //    )
  //    )
 //   )
//  );
}
