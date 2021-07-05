import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IGame } from 'src/app/models/IGame';
import { IGameUserXREF } from 'src/app/models/IGameUserXREF';
import { IPlayAreaViewModel } from '../../models/IPlayAreaViewModel';

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnInit, OnChanges {
  @Input() game: IGame | null = {};
  playAreaViewModel: IPlayAreaViewModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    if (this.game?.id) {
      this.bindViewModel(this.game.gameUserXREFs);
    }
  }

  bindViewModel(gameUserXREFs: IGameUserXREF[] | undefined) {
    this.playAreaViewModel = [];
    gameUserXREFs?.forEach(x => {
      const playAreaUser: IPlayAreaViewModel = {
        name: x.user?.username,
        isCardSelected: false,
        isCardsFlip: false,
        value: 0,
      };
      this.playAreaViewModel.push(playAreaUser);
    })
  }
}
