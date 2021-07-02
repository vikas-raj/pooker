import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../state/index';
import * as appActions from '../../../state/app.actions'
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromStore.IAppState>) { }
  private initialValue = 0;
  private finalValue = 0;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(appActions.setShowLoader({ showLoader: true }))
    this.initialValue = this.initialValue + 1;
    return next.handle(request).pipe(
      finalize(() =>{
        this.finalValue = this.finalValue +1;
        if(this.finalValue === this.initialValue){
          this.store.dispatch(appActions.setShowLoader({ showLoader: false }))
        }
      })
    );
  }
}
