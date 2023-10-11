import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrnPageComponent } from './mrn-page.component';

describe('MrnPageComponent', () => {
  let component: MrnPageComponent;
  let fixture: ComponentFixture<MrnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrnPageComponent]
    });
    fixture = TestBed.createComponent(MrnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
