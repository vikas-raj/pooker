import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffect } from './state/app.effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
