import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig, GenericForm, DialogResponse } from '../dialog.config';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss']
})
export class DialogTemplateComponent implements OnInit {
  dialogFormGroup: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogTemplateComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogConfig) { }

  ngOnInit(): void {
    if (this.data.dialogForm) {
      let group: any = {}
      this.data.dialogForm.forEach((formGroup: GenericForm) => {
        if (formGroup.name) {
          group[formGroup.name] = new FormControl('', formGroup.validators);
        }
      });
      this.dialogFormGroup = new FormGroup(group);
      if (this.data.dialogFormValues) {
        this.dialogFormGroup.setValue(this.data.dialogFormValues);
      }
    }
  }

  onNoClick(): void {
    const dialogResponse: DialogResponse = { eventType: 'close', formValues: null };
    this.dialogRef.close(dialogResponse);
  }
  onSubmit() {
    const dialogResponse: DialogResponse = { eventType: 'close', formValues: this.dialogFormGroup.value };
    this.dialogRef.close(dialogResponse);
  }
}
