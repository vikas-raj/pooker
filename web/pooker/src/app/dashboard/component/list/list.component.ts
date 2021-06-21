import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
