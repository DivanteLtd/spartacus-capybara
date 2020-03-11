import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntCategoriesComponent } from './dvnt-categories.component';

describe('DvntCategoriesComponent', () => {
  let component: DvntCategoriesComponent;
  let fixture: ComponentFixture<DvntCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntCategoriesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
