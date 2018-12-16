import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierEventComponent } from './calendrier-event.component';

describe('CalendrierEventComponent', () => {
  let component: CalendrierEventComponent;
  let fixture: ComponentFixture<CalendrierEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
