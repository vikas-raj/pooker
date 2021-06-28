import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginShellComponent } from './component/login/container/login-shell/login-shell.component';
import { RegisterShellComponent } from './component/register/container/register-shell/register-shell.component';
import { UserManagementComponent } from "./component/user-management.component";

const routes: Routes = [{
  path: '', component: UserManagementComponent,
  children: [
    {
      path: 'register', component: RegisterShellComponent, pathMatch: 'full'
    },
    {
      path: 'login', component: LoginShellComponent, pathMatch: 'full'
    }, 
    {
      path: '**', component: LoginShellComponent, pathMatch: 'full'
    },
  ]
}]
  ;
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserManagementRoutingModule { }
