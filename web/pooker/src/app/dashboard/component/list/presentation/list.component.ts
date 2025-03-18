import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGame } from 'src/app/models/IGame';
import { IGameBoard } from 'src/app/models/IGameBoard';
import { IUserStoryDetail } from 'src/app/models/IUserStoryDetail';

@Component({
    selector: 'app-dashboard-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent implements OnInit {
  @Input() games: IGame[] | null = [];

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  sumOfStoryPoints(userStoryDetails?: IUserStoryDetail[]) {
    return userStoryDetails?.map(x => x.storyPoint)?.reduce((prev, next) => prev + next, 0);
  }
  totalUsers(userStoryDetails?: IUserStoryDetail[]) {
    let gameBoards: IGameBoard[] = [];
    userStoryDetails?.forEach(x => {
      if (x?.gameBoards?.length) { 
        gameBoards = [...gameBoards, ...x.gameBoards]
      }
    });
    const users = gameBoards?.map(x => x.userId)?.filter((item, i, ar) => ar.indexOf(item) == i)
    return users?.length;
  }
  onEdit(id: number | undefined): void {
    this.router.navigate(['/dashboard/edit', id]);
  }
  onDelete(id: number | undefined): void {
    // delete operation
  }

  onPlay(guid: string | undefined){
    this.router.navigate(['/planning', guid]);
  }
  onCreate() {
    this.router.navigate(['/dashboard/create']);
  }
}
