import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcontactComponent } from './helpcontact.component';

describe('HelpcontactComponent', () => {
  let component: HelpcontactComponent;
  let fixture: ComponentFixture<HelpcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
