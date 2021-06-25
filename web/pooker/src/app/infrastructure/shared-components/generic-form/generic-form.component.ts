import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IGenericFormResponse } from '../../../models/IGenericFormResponse';
import { ResponseEnum } from '../../../models/ResponseEnum';
import { GenericForm } from '../dialog/dialog.config';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  genericFormGroup: FormGroup = new FormGroup({});
  @Input() formGroupInput: any[] = [];
  @Input() formValues: any = {};
  @Output() outputFormResponse = new EventEmitter<IGenericFormResponse>();
  constructor() { }

  ngOnInit(): void {
    if (this.formGroupInput) {
      let group: any = {}
      this.formGroupInput.forEach((formGroup: GenericForm) => {
        if (formGroup.name) {
          group[formGroup.name] = new FormControl('', formGroup.validators);
        }
      });
      this.genericFormGroup = new FormGroup(group);
      if (this.formValues) {
        this.genericFormGroup?.setValue(this.formValues);
      }
    }
  }

  onSubmit() {
    const response: IGenericFormResponse = {
      response: this.genericFormGroup.value,
      responseType: ResponseEnum.Submit
    }
    this.outputFormResponse.emit(response);
  }

  onCancel() {
    const response: IGenericFormResponse = {
      response: this.genericFormGroup.value,
      responseType: ResponseEnum.Cancel
    }
    this.outputFormResponse.emit(response);
  }
}
