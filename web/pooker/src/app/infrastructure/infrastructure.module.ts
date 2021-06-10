import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './shared-components/dialog/dialog.component';
import { DialogTemplateComponent } from './shared-components/dialog/dialog-template/dialog-template.component';

@NgModule({
  declarations: [
    DialogComponent,
    DialogTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    DialogComponent, DialogTemplateComponent
  ],
  entryComponents: [DialogTemplateComponent]
})
export class InfrastructureModule { }
