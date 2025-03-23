import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSupplierInfoComponent } from './add-edit-supplier-info.component';

describe('AddEditSupplierInfoComponent', () => {
  let component: AddEditSupplierInfoComponent;
  let fixture: ComponentFixture<AddEditSupplierInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditSupplierInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditSupplierInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
