import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrnRegistrationComponent } from './mrn-registration.component';

describe('MrnRegistrationComponent', () => {
  let component: MrnRegistrationComponent;
  let fixture: ComponentFixture<MrnRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrnRegistrationComponent]
    });
    fixture = TestBed.createComponent(MrnRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
