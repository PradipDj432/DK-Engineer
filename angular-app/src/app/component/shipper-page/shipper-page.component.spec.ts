import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperPageComponent } from './shipper-page.component';

describe('ShipperPageComponent', () => {
  let component: ShipperPageComponent;
  let fixture: ComponentFixture<ShipperPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipperPageComponent]
    });
    fixture = TestBed.createComponent(ShipperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
