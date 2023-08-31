import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawpopComponent } from './withdrawpop.component';

describe('WithdrawpopComponent', () => {
  let component: WithdrawpopComponent;
  let fixture: ComponentFixture<WithdrawpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithdrawpopComponent]
    });
    fixture = TestBed.createComponent(WithdrawpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
