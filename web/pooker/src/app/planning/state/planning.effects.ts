import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import * as PlanningActions from './planning.action';
import { PlanningService } from '../services/planning.service';

@Injectable()
export class PlanningEffect {
  constructor(
    private actions$: Actions, private planningService: PlanningService) {
  }

  getGameById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlanningActions.getGameById),
      switchMap((action) =>
        this.planningService.getGameById(action.userGuid).pipe(
          map((data) => PlanningActions.setGame({ data: data })),
          //catchError(errors => of(DashboardActions.setErrors({ errors: errors })))
        )
      )
    )
  );

  getPlanningGameById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlanningActions.getPlanningGameById),
      switchMap((action) =>
        this.planningService.getPlanningGameById(action.userGuid).pipe(
          map((data) => PlanningActions.setGame({ data: data })),
          //catchError(errors => of(DashboardActions.setErrors({ errors: errors })))
        )
      )
    )
  );
  
  insertUpdateUserStoryDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlanningActions.insertUpdateUserStory),
      switchMap((action) =>
        this.planningService.insertUpdateUserStoryDetail(action.data).pipe(
          map((data) => PlanningActions.setGame({ data: data })),
          //catchError(errors => of(DashboardActions.setErrors({ errors: errors })))
        )
      )
    )
  );
  
  selectStoryPoint$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PlanningActions.selectStoryPointOnGameBoard),
    switchMap((action) =>
      this.planningService.insertUpdateUserStoryDetail(action.point).pipe(
        map((data) => PlanningActions.setGame({ data: data })),
        //catchError(errors => of(DashboardActions.setErrors({ errors: errors })))
      )
    )
  )
);
}