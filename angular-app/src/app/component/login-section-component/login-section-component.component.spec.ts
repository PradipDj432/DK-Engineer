import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSectionComponentComponent } from './login-section-component.component';

describe('LoginSectionComponentComponent', () => {
  let component: LoginSectionComponentComponent;
  let fixture: ComponentFixture<LoginSectionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSectionComponentComponent]
    });
    fixture = TestBed.createComponent(LoginSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
