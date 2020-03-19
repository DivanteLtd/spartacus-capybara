import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvntIconComponent } from './dvnt-icon.component';

describe('DvntIconComponent', () => {
  let component: DvntIconComponent;
  let fixture: ComponentFixture<DvntIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DvntIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvntIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
