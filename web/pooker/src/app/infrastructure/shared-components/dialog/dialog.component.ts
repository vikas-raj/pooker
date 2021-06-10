import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
import { DialogConfig } from './dialog.config';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  form?: FormGroup;

  @Input() dialogConfig?: DialogConfig;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(DialogTemplateComponent, {
      width: '250px',
      data: this.dialogConfig
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
