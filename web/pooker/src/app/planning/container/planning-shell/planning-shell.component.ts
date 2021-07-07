import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as signalR from '@microsoft/signalr';
import { DialogConfig, DialogResponse } from '../../../infrastructure/shared-components/dialog/dialog.config';
import * as fromPlanning from '../../state/index'
import * as PlanningActions from '../../state/planning.action'
import { select, Store } from '@ngrx/store';
import { IGame } from 'src/app/models/IGame';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUserStoryRequest } from '../../models/IUserStoryRequest';
import { environment } from 'src/environments/environment';
import { IGameBoardDto } from '../../models/IGameBoardDto';
@Component({
  selector: 'app-planning-shell',
  templateUrl: './planning-shell.component.html',
  styleUrls: ['./planning-shell.component.scss']
})
export class PlanningShellComponent implements OnInit {
  opened: boolean = false;
  gameGuid: string = '';
  game: IGame = {};
  game$: Observable<IGame> | undefined;
  gameSub: Subscription | undefined;
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
    this.activateSignalR();
    this.gameGuid = this.route.snapshot.params.id;
    this.game$ = this.storePlanning.pipe(takeUntil(this.ngDestroy$), select(fromPlanning.selectGame))
    this.gameSub = this.game$.subscribe((game) => {
      this.game = game;
    })
    this.storePlanning.dispatch(PlanningActions.getGameById({ userGuid: this.gameGuid }))
  }
  onAddNewUserStory($event: boolean) {
    this.showAddNewUserStory = $event;
  }

  dialogResponse($event: DialogResponse) {
    const userStoryRequest: IUserStoryRequest = {
      gameId: 1,
      isUserStoryActive: true,
      storyName: $event.formValues.storyName,
    };

    this.showAddNewUserStory = false;
    this.storePlanning.dispatch(PlanningActions.insertUpdateUserStory({ data: userStoryRequest }))

    console.log($event);
  }

  onSelectPoint($event: IGameBoardDto) {

  }

  activateSignalR() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.POOKER_SIGNALR_URL + 'notify')
      .build();

    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", (gameId) => {
      if (gameId == this.game?.id) {
        this.storePlanning.dispatch(PlanningActions.getGameById({ userGuid: this.gameGuid }))
      }
    });
  }
}
