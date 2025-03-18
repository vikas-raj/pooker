import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GenericForm } from '../../../../../infrastructure/shared-components/dialog/dialog.config';
import { IGenericFormResponse } from '../../../../../models/IGenericFormResponse';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: false
})
export class RegisterComponent implements OnInit {

  @Output() registerUser = new EventEmitter<IGenericFormResponse>();
  formGroupInput: GenericForm[] = [
    { name: 'name', placeHolder: 'Enter Name', title: 'Name', type: 'email', validators: [] },
    { name: 'email', placeHolder: 'Enter Email', title: 'Email', type: 'email', validators: [] },
    { name: 'password', placeHolder: 'Enter Password', title: 'Create Password', type: 'password', validators: [] },
    {
      name: 'confirmPassword', placeHolder: 'Confirm Password', title: 'Confirm Password',
      type: 'confirmPassword', validators: [], dependentControl: 'password'
    },
  ];

  formValues: any;
  constructor() { }

  ngOnInit(): void {
  }
  onOutputFormResponse($event: IGenericFormResponse) {
    this.registerUser.emit($event);
  }
}
