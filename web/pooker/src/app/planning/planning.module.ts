import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { planningReducer } from './state/planning.reducers';

import { PlanningShellComponent } from './container/planning-shell/planning-shell.component';
import { PlanningComponent } from './presentation/planning/planning.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlayCardsComponent } from './presentation/play-cards/play-cards.component';
import { PlayAreaComponent } from './presentation/play-area/play-area.component';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { StoryBoardComponent } from './presentation/story-board/story-board.component';
import { CapacityComponent } from './presentation/capacity/capacity.component';
import { OperationComponent } from './presentation/operation/operation.component';
import { UserStoryListComponent } from './presentation/user-story-list/user-story-list.component';
import { PlanningEffect } from './state/planning.effects';
import { PlanningService } from './services/planning.service';

@NgModule({
  declarations: [
    PlanningShellComponent,
    PlanningComponent,
    PlayCardsComponent,
    PlayAreaComponent,
    StoryBoardComponent,
    CapacityComponent,
    OperationComponent,
    UserStoryListComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    InfrastructureModule,
    EffectsModule.forFeature([PlanningEffect]),
    StoreModule.forFeature('PlanningState', planningReducer)
  ],
  providers: [PlanningService, PlanningEffect]
})
export class PlanningModule { }
