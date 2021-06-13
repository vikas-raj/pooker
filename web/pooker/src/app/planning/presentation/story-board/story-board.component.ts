import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-board',
  templateUrl: './story-board.component.html',
  styleUrls: ['./story-board.component.scss']
})
export class StoryBoardComponent implements OnInit {

  constructor() { }

  currentUserStory = 1;
  totolUserStoryCount = 10;
  ngOnInit(): void {
  }

}
