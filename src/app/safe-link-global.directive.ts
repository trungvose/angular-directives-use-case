import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[target="_blank"]:not([rel="noopener"])',
  //selector: 'a:not([routerLink]):not([rel="noopener"])',
})
export class SafeLinkGlobalDirective {
  @HostBinding('rel') rel = 'noopener';
}
