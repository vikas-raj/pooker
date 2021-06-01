import { Routes } from "@angular/router";
import { CreateComponent } from "./component/create/create.component";
import { DashboardComponent } from "./component/dashboard.component";
import { ListComponent } from "./component/list/list.component";

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{
    path: '', component: ListComponent
  },
    {
      path: 'create', component: CreateComponent
    }
  ]
}]
