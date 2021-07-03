import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import * as fromDashboard from '../../../../state/index'
import * as DashboardActions from '../../../../state/dashboard.action'
import { IGenericFormResponse } from 'src/app/models/IGenericFormResponse';
import { IGameRequest } from 'src/app/dashboard/models/IGameRequest';
@Component({
  selector: 'app-create-shell',
  templateUrl: './create-shell.component.html',
  styleUrls: ['./create-shell.component.scss']
})
export class CreateShellComponent implements OnInit {

  constructor(private storeDashboard: Store<fromDashboard.IDashboardState>) { }

  ngOnInit(): void {
  }
  onCreateGame($event: IGenericFormResponse) {
    const gameRequest: IGameRequest = <IGameRequest>{
      allowUserToChangeVote: ($event.response.allowUserToChangeVote === 'true'),
      description:$event.response.description,
      isAutoFlip: ($event.response.isAutoFlip === 'true'),
      meInGame: ($event.response.meInGame === 'true'),
      name: $event.response.name,
      showVelocityToUser: ($event.response.showVelocityToUser === 'true'),
      userId: 1,
      velocity:100
    };
    this.storeDashboard.dispatch(DashboardActions.saveGame({ data: gameRequest }));
  }
}
