import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CreateShellComponent } from './component/create/container/create-shell/create-shell.component';
import { ListShellComponent } from './component/list/container/list-shell/list-shell.component';
import { ListComponent } from './component/list/presentation/list.component';
import { CreateComponent } from './component/create/presentation/create.component';
import { DashboardEffect } from './state/dashboard.effects';
import { DashboardService } from './services/dashboard.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './state/dashboard.reducers';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    CreateComponent,
    CreateShellComponent,
    ListShellComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InfrastructureModule,
    DashboardRoutingModule,
    EffectsModule.forFeature([DashboardEffect]),
    StoreModule.forFeature('DashboardState', dashboardReducer)
  ],
  providers: [DashboardEffect, DashboardService]
})
export class DashboardModule { }
