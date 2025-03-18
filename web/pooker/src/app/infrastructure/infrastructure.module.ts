import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './shared-components/dialog/dialog.component';
import { DialogTemplateComponent } from './shared-components/dialog/dialog-template/dialog-template.component';
import { GenericFormComponent } from './shared-components/generic-form/generic-form.component';
import { PookerLoaderComponent } from './shared-components/pooker-loader/pooker-loader.component';

@NgModule({
    declarations: [
        DialogComponent,
        DialogTemplateComponent,
        GenericFormComponent,
        PookerLoaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        MaterialModule, GenericFormComponent,
        DialogComponent, DialogTemplateComponent,
        PookerLoaderComponent
    ]
})
export class InfrastructureModule { }
