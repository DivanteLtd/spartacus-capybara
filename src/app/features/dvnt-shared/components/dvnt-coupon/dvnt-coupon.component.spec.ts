import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntCouponComponent } from './dvnt-coupon.component';

describe('DvntCouponComponent', () => {
  let component: DvntCouponComponent;
  let fixture: ComponentFixture<DvntCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntCouponComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
