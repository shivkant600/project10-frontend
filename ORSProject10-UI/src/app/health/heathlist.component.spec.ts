import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeathlistComponent } from './heathlist.component';

describe('HeathlistComponent', () => {
  let component: HeathlistComponent;
  let fixture: ComponentFixture<HeathlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeathlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeathlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
