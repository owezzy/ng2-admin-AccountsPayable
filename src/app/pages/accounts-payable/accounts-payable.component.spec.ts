import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPayableComponent } from './accounts-payable.component';

describe('AccountsPayableComponent', () => {
  let component: AccountsPayableComponent;
  let fixture: ComponentFixture<AccountsPayableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsPayableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
