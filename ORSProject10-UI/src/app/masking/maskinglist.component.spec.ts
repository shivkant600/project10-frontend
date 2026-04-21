import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskinglistComponent } from './maskinglist.component';

describe('MaskinglistComponent', () => {
  let component: MaskinglistComponent;
  let fixture: ComponentFixture<MaskinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
