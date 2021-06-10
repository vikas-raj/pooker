import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningShellComponent } from './container/planning-shell/planning-shell.component';
import { PlanningComponent } from './presentation/planning/planning.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlayCardsComponent } from './presentation/play-cards/play-cards.component';
import { PlayAreaComponent } from './presentation/play-area/play-area.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@NgModule({
  declarations: [
    PlanningShellComponent,
    PlanningComponent,
    PlayCardsComponent,
    PlayAreaComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    InfrastructureModule
  ]
})
export class PlanningModule { }
