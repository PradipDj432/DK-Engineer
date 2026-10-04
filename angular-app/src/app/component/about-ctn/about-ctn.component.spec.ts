import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCtnComponent } from './about-ctn.component';

describe('AboutCtnComponent', () => {
  let component: AboutCtnComponent;
  let fixture: ComponentFixture<AboutCtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCtnComponent]
    });
    fixture = TestBed.createComponent(AboutCtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
