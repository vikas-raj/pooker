import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/models/IGame';
import { IUserStoryDetail } from 'src/app/models/IUserStoryDetail';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  games: IGame[] = [
    {
      name: 'Game 1', velocity: 100, description: 'description test',
      createdDate: new Date(), userStoryDetails: [],
    },
    {
      name: 'Game 2', velocity: 10, description: 'description test2',
      createdDate: new Date(), userStoryDetails: [],
    },
    {
      name: 'Game 3', velocity: 10, description: 'description test2',
      createdDate: new Date(), userStoryDetails: [],
    }
  ];
  constructor() { }
  ngOnInit(): void {
  }
  sumOfStoryPoints(userStoryDetails?: IUserStoryDetail[]) {
    return userStoryDetails?.map(x => x.storyPoint)?.reduce((prev, next) => prev + next, 0);
  }

}
