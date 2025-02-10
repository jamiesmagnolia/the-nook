import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLandingPageComponent } from './auth-landing-page.component';

describe('AuthLandingPageComponent', () => {
  let component: AuthLandingPageComponent;
  let fixture: ComponentFixture<AuthLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
