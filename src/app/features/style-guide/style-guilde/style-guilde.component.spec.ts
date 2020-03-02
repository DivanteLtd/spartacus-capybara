import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGuildeComponent } from './style-guilde.component';

describe('StyleGuildeComponent', () => {
  let component: StyleGuildeComponent;
  let fixture: ComponentFixture<StyleGuildeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleGuildeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleGuildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
