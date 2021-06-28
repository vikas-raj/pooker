import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { IGenericFormResponse } from '../../../../../models/IGenericFormResponse';
import * as fromUserManagement from '../../../../state/index';
import * as UserManagementActions from '../../../../state/user-management.actions';

@Component({
  selector: 'app-register-shell',
  templateUrl: './register-shell.component.html',
  styleUrls: ['./register-shell.component.scss']
})
export class RegisterShellComponent implements OnInit {

  constructor(private storeDashboard: Store<fromUserManagement.IUserManagementState>) { }

  ngOnInit(): void {
  }
  onRegisterUser($event: IGenericFormResponse) {
    console.log($event);
    this.storeDashboard.dispatch(UserManagementActions.registerUser({ registerUserDto: $event.response }))
  }
}
