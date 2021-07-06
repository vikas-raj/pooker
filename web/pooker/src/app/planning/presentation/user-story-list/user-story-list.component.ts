import { Component, OnInit, Input } from '@angular/core';
import { IUserStoryDetail } from 'src/app/models/IUserStoryDetail';

@Component({
  selector: 'app-user-story-list',
  templateUrl: './user-story-list.component.html',
  styleUrls: ['./user-story-list.component.scss']
})
export class UserStoryListComponent implements OnInit {
  @Input() userStories: IUserStoryDetail[] | undefined = [];
  constructor() { }

  ngOnInit(): void {
  }

}
