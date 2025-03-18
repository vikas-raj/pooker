import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfig, GenericForm, DialogResponse } from '../dialog.config';

@Component({
    selector: 'app-dialog-template',
    templateUrl: './dialog-template.component.html',
    styleUrls: ['./dialog-template.component.scss'],
    standalone: false
})
export class DialogTemplateComponent implements OnInit {
  dialogFormGroup: UntypedFormGroup = new UntypedFormGroup({});
  constructor(private fb: UntypedFormBuilder,
    private dialogRef: MatDialogRef<DialogTemplateComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogConfig) { }

  ngOnInit(): void {
    if (this.data.dialogForm) {
      let group: any = {}
      this.data.dialogForm.forEach((formGroup: GenericForm) => {
        if (formGroup.name) {
          group[formGroup.name] = new UntypedFormControl('', formGroup.validators);
        }
      });
      this.dialogFormGroup = new UntypedFormGroup(group);
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
