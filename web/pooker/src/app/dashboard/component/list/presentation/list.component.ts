import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGame } from 'src/app/models/IGame';
import { IGameBoard } from 'src/app/models/IGameBoard';
import { IUserStoryDetail } from 'src/app/models/IUserStoryDetail';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() games: IGame[] | null = [];

  games1: IGame[] = [
    {
      id: 1, name: 'Game 1', velocity: 100, description: 'description test',
      createdDate: new Date(), userStoryDetails: [],
    },
    {
      id: 2, name: 'Game 2', velocity: 10, description: 'description test2',
      createdDate: new Date(), userStoryDetails: [],
    },
    {
      id: 3, name: 'Game 3', velocity: 10, description: 'description test2',
      createdDate: new Date(), userStoryDetails: [],
    }
  ];
  constructor(private route: Router) { }
  ngOnInit(): void {
  }
  sumOfStoryPoints(userStoryDetails?: IUserStoryDetail[]) {
    return userStoryDetails?.map(x => x.storyPoint)?.reduce((prev, next) => prev + next, 0);
  }
  totalUsers(userStoryDetails?: IUserStoryDetail[]) {
    const gameBoard = userStoryDetails?.map(a => a.gameBoards);
    const list = gameBoard?.reduce((x,y) => {
      return  x.concat(y);
    });
    const users = list?.map(x => x.userId)?.filter((item, i, ar) => ar.indexOf(item) == i)
    return users?.length;
  }
  onEdit(id: number | undefined): void {
    this.route.navigate(['/dashboard/edit', id]);
  }
  onDelete(id: number | undefined): void {
    // delete operation
  }
  onCreate() {
    this.route.navigate(['/dashboard/create']);
  }
}
