import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentWalletComponent } from './agent-wallet.component';

describe('AgentWalletComponent', () => {
  let component: AgentWalletComponent;
  let fixture: ComponentFixture<AgentWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentWalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
