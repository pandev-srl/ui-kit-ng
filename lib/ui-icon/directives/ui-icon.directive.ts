import { Directive, HostBinding, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UI_DEFAULT_ICON_SET } from '../models';

@Directive({
  selector: '[uiIcon]',
})
export class UiIconDirective implements OnChanges {
  @Input() uiIcon = '';
  @Input() iconSet = this.defaultIconSet;

  @HostBinding('class') classes = '';

  constructor(@Inject(UI_DEFAULT_ICON_SET) private defaultIconSet: string) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.classes = `${this.iconSet} ${this.uiIcon}`;
  }
}
