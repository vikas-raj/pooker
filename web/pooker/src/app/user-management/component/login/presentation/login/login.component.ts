import { Component, OnInit } from '@angular/core';
import { GenericForm } from '../../../../../infrastructure/shared-components/dialog/dialog.config';
import { IGenericFormResponse } from '../../../../../models/IGenericFormResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
  }
}
