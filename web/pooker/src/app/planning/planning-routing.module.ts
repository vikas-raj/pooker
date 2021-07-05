import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PlanningShellComponent } from "./container/planning-shell/planning-shell.component";

const routes: Routes = [{
  path: '', component: PlanningShellComponent, pathMatch: 'full',
}, {
  path: ':id', component: PlanningShellComponent, pathMatch: 'full',
}, {
  path: '**', redirectTo: '', pathMatch: 'full'
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
export class PlanningRoutingModule { }
