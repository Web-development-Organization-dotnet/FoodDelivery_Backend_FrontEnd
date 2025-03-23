import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInfoListComponent } from './supplier-info-list.component';

describe('SupplierInfoListComponent', () => {
  let component: SupplierInfoListComponent;
  let fixture: ComponentFixture<SupplierInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierInfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
