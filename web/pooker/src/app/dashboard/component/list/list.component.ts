import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/IGame';
import { IUserStoryDetail } from 'src/app/models/IUserStoryDetail';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  games: IGame[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  sumOfStoryPoints(userStoryDetails: IUserStoryDetail[]) {
    return userStoryDetails.map(x => x.storyPoint).reduce((prev, next) => prev + next);
  }

}
