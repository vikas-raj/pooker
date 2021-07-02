import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from "@auth0/angular-jwt";

import { reducers, metaReducers } from './state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffect } from './state/app.effects';
import { StoreModule } from '@ngrx/store';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './infrastructure/shared-components/interceptors/loader.interceptor';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfrastructureModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // allowedDomains: ["example.com"],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    EffectsModule.forRoot([AppEffect])
  ],
  providers: [
    AppEffect,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function tokenGetter() {
  return localStorage.getItem("pooker_token");
}