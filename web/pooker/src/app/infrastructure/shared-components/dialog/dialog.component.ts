import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
import { DialogConfig, DialogResponse } from './dialog.config';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    standalone: false
})
export class DialogComponent implements OnInit {
  form?: UntypedFormGroup;

  @Input() dialogConfig?: DialogConfig;

  @Output() dialogResponse: EventEmitter<DialogResponse> = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      width: '750px',
      minHeight: '60%',

      data: this.dialogConfig
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogResponse.emit(result);
      console.log('The dialog was closed');
    });
  }
}
