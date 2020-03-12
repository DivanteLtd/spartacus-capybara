import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntProductListItemComponent } from './dvnt-product-list-item.component';

describe('DvntProductListItemComponent', () => {
  let component: DvntProductListItemComponent;
  let fixture: ComponentFixture<DvntProductListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntProductListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
