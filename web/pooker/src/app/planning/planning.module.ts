import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningShellComponent } from './container/planning-shell/planning-shell.component';
import { PlanningComponent } from './presentation/planning/planning.component';
import { PlanningRoutingModule } from './planning-routing.module';



@NgModule({
  declarations: [
    PlanningShellComponent,
    PlanningComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
