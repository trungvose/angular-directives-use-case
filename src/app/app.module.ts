import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ButtonV2Component } from './button-v2/button-v2.component';
import { RouterModule } from '@angular/router';
import { SafeLinkGlobalDirective } from './safe-link-global.directive';
import { CommonModule } from '@angular/common';
import { TwitterIconComponent } from './twitter-icon.component';
import { SafeLinkDirective } from './safe-link.directive';
import { CalendarModule } from 'primeng/calendar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarDirective } from './p-calendar.directive';
import { ShareCalendar } from './shared-calendar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    CalendarModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    SafeLinkDirective,
    SafeLinkGlobalDirective,
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonV2Component,
    TwitterIconComponent,
    CalendarDirective,
    ShareCalendar,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
