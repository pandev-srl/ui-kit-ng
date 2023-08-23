import { Directive, HostBinding, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UI_DEFAULT_ICON_SET } from '../models';

@Directive({
  selector: '[uiIcon]',
})
export class UiIconDirective implements OnChanges {
  @Input() uiIcon = '';
  @Input() iconSet: string | null = this.defaultIconSet;
  currentIconSet = '';

  @HostBinding('class') classes = '';

  constructor(@Inject(UI_DEFAULT_ICON_SET) private defaultIconSet: string) {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.currentIconSet = this.iconSet ?? this.defaultIconSet;
    this.classes = `${this.currentIconSet} ${this.uiIcon}`;
  }
}
