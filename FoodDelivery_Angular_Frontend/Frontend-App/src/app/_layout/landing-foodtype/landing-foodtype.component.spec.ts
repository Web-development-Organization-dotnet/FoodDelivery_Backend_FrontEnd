import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFoodtypeComponent } from './landing-foodtype.component';

describe('LandingFoodtypeComponent', () => {
  let component: LandingFoodtypeComponent;
  let fixture: ComponentFixture<LandingFoodtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFoodtypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingFoodtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
