import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard.component';
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
