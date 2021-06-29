import { Component, OnInit } from '@angular/core';
import { IGenericFormResponse } from '../../../../../models/IGenericFormResponse';
import * as fromUserManagement from '../../../../state/index';
import * as UserManagementActions from '../../../../state/user-management.actions';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ILoginUserDto } from '../../../../models/ILoginUserDto';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {

  constructor(private storeDashboard: Store<fromUserManagement.IUserManagementState>) { }

  ngOnInit(): void {
  }

  onLoginUser($event: IGenericFormResponse) {
    const loginUserDto: ILoginUserDto = { ...$event.response}
    this.storeDashboard.dispatch(UserManagementActions.loginUser({ loginUserDto: loginUserDto }))
  }
}
