import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeItemComponent } from './gnome-item.component';

describe('GnomeItemComponent', () => {
  let component: GnomeItemComponent;
  let fixture: ComponentFixture<GnomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
