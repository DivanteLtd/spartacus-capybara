import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntReviewOrderComponent } from './dvnt-review-order.component';

describe('DvntReviewOrderComponent', () => {
  let component: DvntReviewOrderComponent;
  let fixture: ComponentFixture<DvntReviewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntReviewOrderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntReviewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
