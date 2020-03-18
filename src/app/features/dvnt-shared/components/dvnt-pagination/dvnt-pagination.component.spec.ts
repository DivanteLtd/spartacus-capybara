import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntPaginationComponent } from './dvnt-pagination.component';

describe('DvntPaginationComponent', () => {
  let component: DvntPaginationComponent;
  let fixture: ComponentFixture<DvntPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntPaginationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
