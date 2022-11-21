import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngSafeLink]',
})
export class SafeLinkDirective {
  @HostBinding('rel') rel = 'noopener';
}
