import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ui-mobile-navbar-container',
  templateUrl: './ui-mobile-navbar-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMobileNavbarContainerComponent implements OnInit, OnChanges {
  @Input() position: 'top' | 'bottom' = 'bottom';
  @HostBinding('class.top') isTop = false;
  @HostBinding('class.bottom') isBottom = false;

  constructor() {}

  ngOnInit(): void {
    this.setPositionClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['position']?.currentValue) {
      this.setPositionClasses();
    }
  }

  private setPositionClasses(): void {
    if (this.position === 'top') {
      this.isTop = true;
      this.isBottom = false;
    } else if (this.position === 'bottom') {
      this.isTop = false;
      this.isBottom = true;
    } else {
      this.isTop = false;
      this.isBottom = false;
    }
  }
}
