import { Component, OnInit } from '@angular/core';
import { DialogConfig, DialogResponse } from '../../../infrastructure/shared-components/dialog/dialog.config';

@Component({
  selector: 'app-planning-shell',
  templateUrl: './planning-shell.component.html',
  styleUrls: ['./planning-shell.component.scss']
})
export class PlanningShellComponent implements OnInit {
opened: boolean=false;
  constructor() { }
  showAddNewUserStory = false;
  dialogConfig: DialogConfig = {
    title: "Hello",
    dialofForm: [{ name: 'Test', placeHolder: 'Add text', title: 'Test', type: 'textArea', validators: [] }]
  }
  ngOnInit(): void {
  }
  onAddNewUserStory($event: boolean) {
    this.showAddNewUserStory = $event;
  }

  dialogResponse($event: DialogResponse) {
    this.showAddNewUserStory = false;
    console.log($event);

  }
}
