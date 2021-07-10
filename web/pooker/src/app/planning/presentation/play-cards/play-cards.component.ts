import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ICard } from 'src/app/models/ICard';
import { IUserStoryDetail } from 'src/app/models/IUserStoryDetail';
import { IGameBoardDto } from '../../models/IGameBoardDto';

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss']
})
export class PlayCardsComponent implements OnInit {
  initialLeftValue = 2;
  selectedIndex?: number = undefined;
  @Input() activeUserStory: IUserStoryDetail | undefined;

  @Input() cards: ICard[] | null = []
  @Output() selectPlayCard = new EventEmitter<IGameBoardDto>();
  constructor() { }

  ngOnInit(): void {
  }

  getLeftValue(i: number) {
    this.initialLeftValue = i == 0 ? 2 : this.initialLeftValue + 7.3;
    return i == 0 ? 2 : this.initialLeftValue;
  }
  onClick(card:  ICard, index: number) {
    const gameBoardDto: IGameBoardDto = {
      storyId: this.activeUserStory?.id,
      cardId: card.id
    };
    this.selectPlayCard.emit(gameBoardDto);
    this.selectedIndex = index;
  }
}
