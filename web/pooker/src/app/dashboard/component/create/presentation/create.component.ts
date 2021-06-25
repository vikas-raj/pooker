import { Component, OnInit } from '@angular/core';
import { GenericForm } from 'src/app/infrastructure/shared-components/dialog/dialog.config';
import { IGenericFormResponse } from '../../../../models/IGenericFormResponse';

@Component({
  selector: 'app-dashboard-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }
  formGroupInput: GenericForm[] = [
    { name: 'game', placeHolder: 'Add Game Name', title: 'Name', type: 'textBox', validators: [] },
    { name: 'description', placeHolder: 'Add Game description', title: 'Description', type: 'textArea', validators: [] },
    { name: 'velocity', placeHolder: 'Add velocity', title: 'Velocity', type: 'textBox', validators: [] },
    {
      name: 'meInGame', placeHolder: 'Add text', title: 'Add me in game', type: 'radio', validators: [],
      options: [{ value: true, key: 'Yes', id: 'meInGame1' }, { value: false, key: 'No', id: 'meInGame2'}]
    },
    {
      name: 'showVelocityToUser', placeHolder: 'Add text', title: 'Show Velocity To User', type: 'radio', validators: [],
      options: [{ value: true, key: 'Yes', id: 'showVelocityToUser1' }, { value: false, key: 'No', id: 'showVelocityToUser2' }]
    },
    {
      name: 'isAutoFlip', placeHolder: 'Add text', title: 'Is Auto Flip', type: 'radio', validators: [],
      options: [{ value: true, key: 'Yes', id: 'isAutoFlip1' }, { value: false, key: 'No', id: 'isAutoFlip2' }]
    },
    {
      name: 'allowUserToChangeVote', placeHolder: 'Add text', title: 'Allow User To Change Vote', type: 'radio', validators: [],
      options: [{ value: true, key: 'Yes', id: 'allowUserToChangeVote1' }, { value: false, key: 'No', id: 'allowUserToChangeVote2'}]
    }
  ];

  formValues: any;
  ngOnInit(): void {
  }
  onOutputFormResponse($event: IGenericFormResponse) {
    console.log($event);
  }
}
