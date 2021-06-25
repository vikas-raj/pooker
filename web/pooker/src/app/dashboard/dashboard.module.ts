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
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
