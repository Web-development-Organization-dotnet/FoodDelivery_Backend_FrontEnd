import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWalletComponent } from './customer-wallet.component';

describe('CustomerWalletComponent', () => {
  let component: CustomerWalletComponent;
  let fixture: ComponentFixture<CustomerWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerWalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
