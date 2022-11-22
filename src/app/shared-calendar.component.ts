import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-calendar',
  template: `
  <p-calendar
    [formControl]="formControl"
    [name]="name"
    dateFormat="dd/mm/yy"
    [showIcon]="true"
    [showButtonBar]="true"
    [monthNavigator]="true"
    [yearNavigator]="true"
    yearRange="1900:2050"
    [firstDayOfWeek]="1"
  >
  </p-calendar>
  `,
})
export class ShareCalendar {
  @Input() name: string;
  @Input() formControl: FormControl;
}
