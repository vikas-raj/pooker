import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
