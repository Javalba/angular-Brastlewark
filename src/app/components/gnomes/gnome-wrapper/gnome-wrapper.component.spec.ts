import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeWrapperComponent } from './gnome-wrapper.component';

describe('GnomeWrapperComponent', () => {
  let component: GnomeWrapperComponent;
  let fixture: ComponentFixture<GnomeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
