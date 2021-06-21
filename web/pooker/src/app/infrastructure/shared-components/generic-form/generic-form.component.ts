import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

}
