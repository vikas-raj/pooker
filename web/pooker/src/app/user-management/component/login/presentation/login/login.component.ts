import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GenericForm } from '../../../../../infrastructure/shared-components/dialog/dialog.config';
import { IGenericFormResponse } from '../../../../../models/IGenericFormResponse';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {
  @Output() loginUser = new EventEmitter<IGenericFormResponse>();

  formGroupInput: GenericForm[] = [
    { name: 'email', placeHolder: 'Enter Email', title: 'Email', type: 'email', validators: [] },
    { name: 'password', placeHolder: 'Enter Password', title: 'Password', type: 'password', validators: [] },
  ];

  formValues: any;
  constructor() { }

  ngOnInit(): void {
  }
  onOutputFormResponse($event: IGenericFormResponse) {
    console.log($event);
    this.loginUser.emit($event);
  }
}
