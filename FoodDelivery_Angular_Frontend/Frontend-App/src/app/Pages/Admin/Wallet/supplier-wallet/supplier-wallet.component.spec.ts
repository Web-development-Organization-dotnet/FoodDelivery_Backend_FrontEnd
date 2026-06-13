import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWalletComponent } from './supplier-wallet.component';

describe('SupplierWalletComponent', () => {
  let component: SupplierWalletComponent;
  let fixture: ComponentFixture<SupplierWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierWalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
