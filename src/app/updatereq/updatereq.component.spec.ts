import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereqComponent } from './updatereq.component';

describe('UpdatereqComponent', () => {
  let component: UpdatereqComponent;
  let fixture: ComponentFixture<UpdatereqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatereqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
