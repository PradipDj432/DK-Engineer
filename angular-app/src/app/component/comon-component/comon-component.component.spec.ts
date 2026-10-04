import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComonComponentComponent } from './comon-component.component';

describe('ComonComponentComponent', () => {
  let component: ComonComponentComponent;
  let fixture: ComponentFixture<ComonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComonComponentComponent]
    });
    fixture = TestBed.createComponent(ComonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
