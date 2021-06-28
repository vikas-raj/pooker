import { Component, OnInit } from '@angular/core';
import { IGenericFormResponse } from '../../../../../models/IGenericFormResponse';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLoginUser($event: IGenericFormResponse) {
    console.log($event);
  }
}
