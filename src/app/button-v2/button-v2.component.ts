import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

export type ButtonTheme = 'primary' | 'secondary';

@Component({
  selector: 'button[shared-button], a[shared-button]',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./button-v2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonV2Component {
  @HostBinding('class') get rdButtonClass(): string {
    const classes = ['button', `btn-${this.buttonTheme}`];
    return classes.filter(Boolean).join(' ');
  }

  @Input() buttonTheme: ButtonTheme = 'secondary';
}
