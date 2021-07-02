import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PookerLoaderComponent } from './pooker-loader.component';

describe('PookerLoaderComponent', () => {
  let component: PookerLoaderComponent;
  let fixture: ComponentFixture<PookerLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PookerLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PookerLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
