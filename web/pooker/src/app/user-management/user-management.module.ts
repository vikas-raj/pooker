import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterShellComponent } from './component/register/container/register-shell/register-shell.component';
import { RegisterComponent } from './component/register/presentation/register/register.component';
import { LoginComponent } from './component/login/presentation/login/login.component';
import { LoginShellComponent } from './component/login/container/login-shell/login-shell.component';
import { UserManagementComponent } from './component/user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@NgModule({
  declarations: [
    RegisterShellComponent,
    RegisterComponent,
    LoginComponent,
    LoginShellComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    InfrastructureModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
