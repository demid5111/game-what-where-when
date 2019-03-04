import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelWrapperComponent } from './wheel-wrapper.component';

describe('WheelWrapperComponent', () => {
  let component: WheelWrapperComponent;
  let fixture: ComponentFixture<WheelWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
