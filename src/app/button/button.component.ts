import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

type ButtonMode = 'internalURL' | 'externalURL' | 'button';
export type ButtonType = 'reset' | 'button' | 'submit';
export type ButtonTheme = 'primary' | 'secondary';

@Component({
  selector: `
    shared-button[buttonText]:not([buttonContent]),
    shared-button[buttonContent]:not([buttonText])`,
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @HostBinding('class') fullButtonClass!: string;
  @HostBinding('class.shared-button') componentClass = true;
  @HostBinding('class.is-disabled') get isButtonDisabled(): boolean {
    return this.isDisabled;
  }

  @Input() buttonClass!: string;
  @Input() buttonContent!: TemplateRef<any>;
  @Input() buttonText!: string;
  @Input() buttonTheme: ButtonTheme = 'secondary';
  @Input() buttonType: ButtonType = 'button';
  @Input() roleType: string | null = null;
  @Input() redirectURL!: string;
  @Input() queryParams: { [key: string]: string | number } | null = null;
  @Input() isDisabled!: boolean;
  @Input() isTargetBlank!: boolean;
  @Input() iconPath!: string;
  @Input() ariaLabel!: string;

  ngOnInit(): void {
    const classNames = [this.buttonClass, this.buttonTheme].filter(
      (className) => className
    );

    this.fullButtonClass = classNames.join(' ');
  }

  buttonMode(): ButtonMode {
    if (!this.redirectURLExists()) {
      return 'button';
    }

    if (this.isInternalURL()) {
      return 'internalURL';
    } else {
      return 'externalURL';
    }
  }

  private redirectURLExists(): boolean {
    return !!this.redirectURL;
  }

  private isInternalURL(): boolean {
    return !(
      this.redirectURL.toString().startsWith('http://') ||
      this.redirectURL.toString().startsWith('https://')
    );
  }
}
