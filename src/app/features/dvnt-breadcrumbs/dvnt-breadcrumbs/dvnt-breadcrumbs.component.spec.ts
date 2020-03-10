import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntBreadcrumbsComponent } from './dvnt-breadcrumbs.component';

describe('DvntBreadcrumbsComponent', () => {
  let component: DvntBreadcrumbsComponent;
  let fixture: ComponentFixture<DvntBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntBreadcrumbsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
