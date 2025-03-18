import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IGame } from 'src/app/models/IGame';
import { IGameBoard } from 'src/app/models/IGameBoard';
import { IGameUserXREF } from 'src/app/models/IGameUserXREF';
import { IPlayAreaViewModel } from '../../models/IPlayAreaViewModel';

@Component({
    selector: 'app-play-area',
    templateUrl: './play-area.component.html',
    styleUrls: ['./play-area.component.scss'],
    standalone: false
})
export class PlayAreaComponent implements OnInit, OnChanges {
  @Input() game: IGame | null = {};
  playAreaViewModel: IPlayAreaViewModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    if (this.game?.id) {
      this.bindViewModel(this.game);
    }
  }

  bindViewModel(game: IGame | undefined) {
    const gameBoards = game?.userStoryDetails?.find(x => x.isCurrentUserStory)?.gameBoards;
    this.playAreaViewModel = [];
    game?.gameUserXREFs?.forEach(x => {
      const gameBoard = gameBoards?.find(y => y.userId == x.user?.id)
      const playAreaUser: IPlayAreaViewModel = {
        name: x.user?.username,
        isCardSelected: this.isRealValue(gameBoard),
        isCardsFlip: false,
        value: 0,
      };
      this.playAreaViewModel.push(playAreaUser);
    });

    debugger;
  }

  isRealValue(obj?: IGameBoard) {
    return !(obj === undefined || obj === null);
  }
}
