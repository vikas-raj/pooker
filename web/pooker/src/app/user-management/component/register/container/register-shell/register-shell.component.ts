import { Component, OnInit } from '@angular/core';
import { IGenericFormResponse } from '../../../../../models/IGenericFormResponse';

@Component({
  selector: 'app-register-shell',
  templateUrl: './register-shell.component.html',
  styleUrls: ['./register-shell.component.scss']
})
export class RegisterShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onRegisterUser($event: IGenericFormResponse) {
    console.log($event);
  }
}
