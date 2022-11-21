import { Directive } from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Directive({
  selector: 'p-calendar',
})
export class CalendarDirective {
  constructor(private calendar: Calendar) {
    this.calendar.dateFormat = 'dd/mm/yy';
    this.calendar.showIcon = true;
    this.calendar.showButtonBar = true;
    this.calendar.monthNavigator = true;
    this.calendar.yearNavigator = true;
    this.calendar.firstDayOfWeek = 1;
  }
}
