import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";
import { CreateShellComponent } from './component/create/container/create-shell/create-shell.component';
import { ListShellComponent } from './component/list/container/list-shell/list-shell.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {
      path: 'edit/:id', component: CreateShellComponent, pathMatch: 'full'
    },
    {
      path: 'create', component: CreateShellComponent, pathMatch: 'full'
    }, {
      path: '', component: ListShellComponent, pathMatch: 'full'
    },
    {
      path: '**', component: ListShellComponent, pathMatch: 'full'
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
export class DashboardRoutingModule { }
