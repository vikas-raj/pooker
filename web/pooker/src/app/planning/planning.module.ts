import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    InfrastructureModule
  ]
})
export class PlanningModule { }
