import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntCardComponent } from './dvnt-card.component';

describe('DvntCardComponent', () => {
  let component: DvntCardComponent;
  let fixture: ComponentFixture<DvntCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
