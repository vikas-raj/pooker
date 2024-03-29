import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
},
  {
    path: 'planning',
    loadChildren: () => import('./planning/planning.module').then((m) => m.PlanningModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./user-management/user-management.module').then((m) => m.UserManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
