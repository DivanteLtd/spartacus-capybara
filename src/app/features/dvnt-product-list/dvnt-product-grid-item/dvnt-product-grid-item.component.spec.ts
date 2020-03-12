import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntProductGridItemComponent } from './dvnt-product-grid-item.component';

describe('DvntProductGridItemComponent', () => {
  let component: DvntProductGridItemComponent;
  let fixture: ComponentFixture<DvntProductGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntProductGridItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntProductGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
