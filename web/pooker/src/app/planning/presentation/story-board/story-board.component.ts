import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-story-board',
  templateUrl: './story-board.component.html',
  styleUrls: ['./story-board.component.scss']
})
export class StoryBoardComponent implements OnInit {
  @Output() addNewUserStory: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  currentUserStory = 1;
  totolUserStoryCount = 10;
  ngOnInit(): void {
  }
  onAddNewUserStory($event: boolean) {
    this.addNewUserStory.emit($event);
  }
}
