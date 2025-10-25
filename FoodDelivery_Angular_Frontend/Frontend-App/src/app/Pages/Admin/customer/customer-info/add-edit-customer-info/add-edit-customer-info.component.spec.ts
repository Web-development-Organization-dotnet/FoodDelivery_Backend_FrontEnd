import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustomerInfoComponent } from './add-edit-customer-info.component';

describe('AddEditCustomerInfoComponent', () => {
  let component: AddEditCustomerInfoComponent;
  let fixture: ComponentFixture<AddEditCustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditCustomerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
