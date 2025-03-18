import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { IGame } from 'src/app/models/IGame';

@Component({
    selector: 'app-story-board',
    templateUrl: './story-board.component.html',
    styleUrls: ['./story-board.component.scss'],
    standalone: false
})
export class StoryBoardComponent implements OnInit {
  @Output() addNewUserStory: EventEmitter<boolean> = new EventEmitter();
  @Input() game: IGame | null = {};
  constructor() { }

  currentUserStory = 1;
  totolUserStoryCount = 10;
  ngOnInit(): void {
    
  }
  onAddNewUserStory($event: boolean) {
    this.addNewUserStory.emit($event);
  }
  checkGameOwner(){
    return this.game?.gameUserXREFs?.find(x => x.userId == this.game?.user?.id)
  }
}
