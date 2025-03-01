import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthYearCalendarComponent } from './month-year-calendar.component';

describe('MonthYearCalendarComponent', () => {
  let component: MonthYearCalendarComponent;
  let fixture: ComponentFixture<MonthYearCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthYearCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthYearCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
