import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/state';
import { Observable } from 'rxjs';
import {select, Store } from '@ngrx/store';
import * as fromStore from 'src/app/state';

@Component({
  selector: 'app-pooker-loader',
  templateUrl: './pooker-loader.component.html',
  styleUrls: ['./pooker-loader.component.scss']
})
export class PookerLoaderComponent implements OnInit {
  isLoading$: Observable<boolean> | undefined;
  constructor(private appStore: Store<IAppState>) { }

  ngOnInit(): void {
    this.isLoading$ = this.appStore.pipe(select(fromStore.selectShowLoader))
  }

}
