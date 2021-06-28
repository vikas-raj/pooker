import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import * as UserManagementActions from './user-management.actions';
import { UserManagementService } from '../services/user-management.service';
import * as AppActions from '../../state/app.actions';

@Injectable()
export class UserManagementEffect {
  constructor(
    private actions$: Actions, private userManagementService: UserManagementService) {
  }
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserManagementActions.registerUser),
      switchMap((action) =>
        this.userManagementService.registerUser(action.registerUserDto).pipe(
          map((data) => UserManagementActions.setRegisterUserResponse({ registerUserResponse: data })),
          //catchError(errors => of(UserManagementActions.setErrors({ errors: errors })))
        )
      )
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserManagementActions.loginUser),
      switchMap((action) =>
        this.userManagementService.loginUser(action.loginUserDto).pipe(
          map((data) => AppActions.setUser({ userResponse: data })),
          //catchError(errors => of(UserManagementActions.setErrors({ errors: errors })))
        )
      )
    )
  );
}
