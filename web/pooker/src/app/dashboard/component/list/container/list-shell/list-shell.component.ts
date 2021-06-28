import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import * as fromDashboard from '../../../../state/index'
import * as DashboardActions from '../../../../state/dashboard.action'
import { IGame } from '../../../../../models/IGame';


@Component({
  selector: 'app-list-shell',
  templateUrl: './list-shell.component.html',
  styleUrls: ['./list-shell.component.scss']
})
export class ListShellComponent implements OnInit {
  games$: Observable<IGame[]> | undefined;
  ngDestroy$ = new Subject();
  constructor(private storeDashboard: Store<fromDashboard.IDashboardState>) { }

  ngOnInit(): void {
    this.storeDashboard.dispatch(DashboardActions.getGames({ userGuid: "user-guid" }));

    this.games$ = this.storeDashboard.pipe(takeUntil(this.ngDestroy$), select(fromDashboard.selectGames))
  }
}
