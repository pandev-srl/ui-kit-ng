import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UI_DEFAULT_ICON_SET } from '../../../ui-icon';
import { UiStatFooterContentDirective } from '../../directives/ui-stat-footer-content.directive';

@Component({
  selector: 'ui-stat',
  templateUrl: './ui-stat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiStatComponent implements OnChanges {
  @Input() iconSet: string | null = null;
  @Input() icon: string | null = null;
  @Input() iconClasses: string | null = null;

  @Input() label: string | null = null;
  @Input() value: string | null = null;

  @ContentChild(UiStatFooterContentDirective) uiStatFooterContent: UiStatFooterContentDirective | undefined;

  currentIconSet: string = this.globalDefaultIconSet;

  constructor(@Inject(UI_DEFAULT_ICON_SET) private globalDefaultIconSet: string) {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.currentIconSet = this.iconSet ?? this.globalDefaultIconSet;
  }
}
