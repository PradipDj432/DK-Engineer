import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrnLoginComponent } from './mrn-login.component';

describe('MrnLoginComponent', () => {
  let component: MrnLoginComponent;
  let fixture: ComponentFixture<MrnLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrnLoginComponent]
    });
    fixture = TestBed.createComponent(MrnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
