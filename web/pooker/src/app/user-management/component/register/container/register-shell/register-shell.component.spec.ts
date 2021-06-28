import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterShellComponent } from './register-shell.component';

describe('RegisterShellComponent', () => {
  let component: RegisterShellComponent;
  let fixture: ComponentFixture<RegisterShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
