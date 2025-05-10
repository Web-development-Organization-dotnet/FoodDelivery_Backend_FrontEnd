import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodInfoListComponent } from './food-info-list.component';

describe('FoodInfoListComponent', () => {
  let component: FoodInfoListComponent;
  let fixture: ComponentFixture<FoodInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodInfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
