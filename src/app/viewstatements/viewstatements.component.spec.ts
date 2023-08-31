import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstatementsComponent } from './viewstatements.component';

describe('ViewstatementsComponent', () => {
  let component: ViewstatementsComponent;
  let fixture: ComponentFixture<ViewstatementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewstatementsComponent]
    });
    fixture = TestBed.createComponent(ViewstatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
