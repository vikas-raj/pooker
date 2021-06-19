import { Component, OnInit } from '@angular/core';
import { GenericForm } from 'src/app/infrastructure/shared-components/dialog/dialog.config';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }
  formGroupInput: GenericForm[] = [{ name: 'Test', placeHolder: 'Add text', title: 'Test', type: 'textArea', validators: [] },
  { name: 'Radio', placeHolder: 'Add text', title: 'Select Any option', type: 'radio', validators: [],
   options: [{key:'radio1', value: 'Radio 1' },{key:'radio2', value: 'Radio 2' }] }];
   
  formValues = {};
  ngOnInit(): void {
  }

}
