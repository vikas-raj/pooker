import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterShellComponent } from './component/register/container/register-shell/register-shell.component';
import { RegisterComponent } from './component/register/presentation/register/register.component';
import { LoginComponent } from './component/logiin/presentation/login/login.component';
import { LoginShellComponent } from './component/login/container/login-shell/login-shell.component';



@NgModule({
  declarations: [
    RegisterShellComponent,
    RegisterComponent,
    LoginComponent,
    LoginShellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserManagementModule { }
