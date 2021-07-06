import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogConfig, DialogResponse } from '../../../infrastructure/shared-components/dialog/dialog.config';
import * as fromPlanning from '../../state/index'
import * as PlanningActions from '../../state/planning.action'
import { select, Store } from '@ngrx/store';
import { IGame } from 'src/app/models/IGame';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUserStoryRequest } from '../../models/IUserStoryRequest';
@Component({
  selector: 'app-planning-shell',
  templateUrl: './planning-shell.component.html',
  styleUrls: ['./planning-shell.component.scss']
})
export class PlanningShellComponent implements OnInit {
  opened: boolean = false;
  gameGuid: string = '';

  game$: Observable<IGame> | undefined;
  ngDestroy$ = new Subject();
  constructor(private route: ActivatedRoute,
    private storePlanning: Store<fromPlanning.IPlanningState>) { }
  showAddNewUserStory = false;
  dialogConfig: DialogConfig = {
    title: "Add User Story",
    dialogForm: [{ name: 'storyName', placeHolder: 'Add User Story', title: 'User Story Name', type: 'textArea', validators: [] },
    ]
  };

  ngOnInit(): void {
    this.gameGuid = this.route.snapshot.params.id;
    this.game$ = this.storePlanning.pipe(takeUntil(this.ngDestroy$), select(fromPlanning.selectGame))

    this.storePlanning.dispatch(PlanningActions.getGameById({ userGuid: this.gameGuid }))
  }
  onAddNewUserStory($event: boolean) {
    this.showAddNewUserStory = $event;
  }

  dialogResponse($event: DialogResponse) {
    const userStoryRequest: IUserStoryRequest = {
      gameId: 1,
      isUserStoryActive: true,
      storyName:$event.formValues.storyName,
    };

    this.showAddNewUserStory = false;
    this.storePlanning.dispatch(PlanningActions.insertUpdateUserStory({ data: userStoryRequest }))

    console.log($event);
  }
}
