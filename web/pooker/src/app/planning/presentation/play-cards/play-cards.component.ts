import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IGameBoardDto } from '../../models/IGameBoardDto';

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss']
})
export class PlayCardsComponent implements OnInit {
  initialLeftValue = 2;
  selectedIndex?: number = undefined;
  @Input() activeUserStoryId: number = 0;
  @Output() selectPoint = new EventEmitter<IGameBoardDto>();
  constructor() { }

  ngOnInit(): void {
  }

  getLeftValue(i: number) {
    this.initialLeftValue = i == 0 ? 2 : this.initialLeftValue + 7.3;
    return i == 0 ? 2 : this.initialLeftValue;
  }
  onClick(card: number | string, index: number) {
    const gameBoardDto: IGameBoardDto = {
      storyId: this.activeUserStoryId,
      storyPoint: isNaN(+card) ? +card : undefined
    };
    this.selectPoint.emit(gameBoardDto);
    this.selectedIndex = index;
  }
}
