import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTypeEntryComponent } from './supplier-type-entry.component';

describe('SupplierTypeEntryComponent', () => {
  let component: SupplierTypeEntryComponent;
  let fixture: ComponentFixture<SupplierTypeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierTypeEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierTypeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
