import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicprojectComponent } from './basicproject.component';

describe('BasicprojectComponent', () => {
  let component: BasicprojectComponent;
  let fixture: ComponentFixture<BasicprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
