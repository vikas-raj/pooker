import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PlanningShellComponent } from "./container/planning-shell/planning-shell.component";

const routes: Routes = [{
  path: '', component: PlanningShellComponent
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
