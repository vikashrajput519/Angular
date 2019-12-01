import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingHomeComponent } from './databinding-home.component';

describe('DatabindingHomeComponent', () => {
  let component: DatabindingHomeComponent;
  let fixture: ComponentFixture<DatabindingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
