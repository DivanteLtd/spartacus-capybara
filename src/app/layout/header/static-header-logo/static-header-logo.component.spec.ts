import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticHeaderLogoComponent } from './static-header-logo.component';

describe('StaticHeaderLogoComponent', () => {
  let component: StaticHeaderLogoComponent;
  let fixture: ComponentFixture<StaticHeaderLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StaticHeaderLogoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticHeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
