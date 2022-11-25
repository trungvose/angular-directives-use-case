import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngSafeLink]',
  standalone: true,
})
export class SafeLinkDirective {
  @HostBinding('rel') rel = 'noopener';
}
