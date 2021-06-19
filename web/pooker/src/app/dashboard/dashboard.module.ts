import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InfrastructureModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
