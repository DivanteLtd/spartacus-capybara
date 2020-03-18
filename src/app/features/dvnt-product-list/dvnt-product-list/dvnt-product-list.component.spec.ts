import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntProductListComponent } from './dvnt-product-list.component';

describe('DvntProductListComponent', () => {
  let component: DvntProductListComponent;
  let fixture: ComponentFixture<DvntProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntProductListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
