import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogConfig, DialogResponse } from '../../../infrastructure/shared-components/dialog/dialog.config';

@Component({
  selector: 'app-planning-shell',
  templateUrl: './planning-shell.component.html',
  styleUrls: ['./planning-shell.component.scss']
})
export class PlanningShellComponent implements OnInit {
  opened: boolean = false;
  gameGuid: string = '';
  constructor(private route: ActivatedRoute) { }
  showAddNewUserStory = false;
  dialogConfig: DialogConfig = {
    title: "Hello",
    dialogForm: [{ name: 'userStory', placeHolder: 'Add User Story', title: 'User Story Name', type: 'textArea', validators: [] },
    ]
  }
  ngOnInit(): void {
    this.gameGuid = this.route.snapshot.params.id;
  }
  onAddNewUserStory($event: boolean) {
    this.showAddNewUserStory = $event;
  }

  dialogResponse($event: DialogResponse) {
    this.showAddNewUserStory = false;
    console.log($event);
    debugger;
  }
}
