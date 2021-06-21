import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./component/create/create.component";
import { DashboardComponent } from "./dashboard.component";
import { ListComponent } from "./component/list/list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {
      path: 'edit/:id', component: CreateComponent, pathMatch: 'full'
    },
    {
      path: 'create', component: CreateComponent, pathMatch: 'full'
    }, {
      path: '', component: ListComponent, pathMatch: 'full'
    },
    {
      path: '**', component: ListComponent, pathMatch: 'full'
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
