import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import * as DashboardActions from './dashboard.action';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class DashboardEffect {
  constructor(
    private actions$: Actions, private dashboardService: DashboardService) {
  }

  getGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.getGames),
      switchMap((action) =>
        this.dashboardService.getGames().pipe(
          map((data) => DashboardActions.setGames({ data: data })),
          //catchError(errors => of(DashboardActions.setErrors({ errors: errors })))
        )
      )
    )
  );
  
  saveGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.saveGame),
      switchMap((action) =>
        this.dashboardService.saveGame(action.data).pipe(
          map((data) => DashboardActions.setGames({ data: data })),
          //catchError(errors => of(DashboardActions.setErrors({ errors: errors })))
        )
      )
    )
  );
}
