import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoListComponent } from './customer-info-list.component';

describe('CustomerInfoListComponent', () => {
  let component: CustomerInfoListComponent;
  let fixture: ComponentFixture<CustomerInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
