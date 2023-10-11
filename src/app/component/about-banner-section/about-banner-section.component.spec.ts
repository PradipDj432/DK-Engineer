import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBannerSectionComponent } from './about-banner-section.component';

describe('AboutBannerSectionComponent', () => {
  let component: AboutBannerSectionComponent;
  let fixture: ComponentFixture<AboutBannerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutBannerSectionComponent]
    });
    fixture = TestBed.createComponent(AboutBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
