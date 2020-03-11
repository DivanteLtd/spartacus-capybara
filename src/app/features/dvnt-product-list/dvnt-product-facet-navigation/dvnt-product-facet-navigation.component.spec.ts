import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntProductFacetNavigationComponent } from './dvnt-product-facet-navigation.component';

describe('DvntProductFacetNavigationComponent', () => {
  let component: DvntProductFacetNavigationComponent;
  let fixture: ComponentFixture<DvntProductFacetNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntProductFacetNavigationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntProductFacetNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
