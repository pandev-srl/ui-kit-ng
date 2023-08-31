import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  UI_TD_SORT_LINK_DEFAULT_ICON_UP,
  UI_TD_SORT_LINK_DEFAULT_ICON_SET,
  UI_TD_SORT_LINK_DEFAULT_ICON_DOWN,
  UI_TD_SORT_LINK_DEFAULT_ICON_NONE,
} from '../../models';
import { UI_DEFAULT_ICON_SET } from '../../../ui-icon';
import { UiSortOrder } from '../../../models';

@Component({
  selector: 'ui-td-sort-link',
  templateUrl: './ui-td-sort-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTdSortLinkComponent implements OnChanges {
  @Input() iconUp: string | null = null;
  @Input() iconDown: string | null = null;
  @Input() iconNone: string | null = null;
  @Input() iconSet: string | null = null;
  @Input() iconClasses = '';

  @Input() order: UiSortOrder = null;
  @Output() orderChange = new EventEmitter<UiSortOrder>();

  currentIconUp = this.defaultIconUp;
  currentIconDown = this.defaultIconDown;
  currentIconNone = this.defaultIconNone;
  currentIconSet: string = this.globalDefaultIconSet;

  constructor(
    @Inject(UI_TD_SORT_LINK_DEFAULT_ICON_SET) private defaultIconSet: string | null,
    @Inject(UI_TD_SORT_LINK_DEFAULT_ICON_UP) private defaultIconUp: string,
    @Inject(UI_TD_SORT_LINK_DEFAULT_ICON_DOWN) private defaultIconDown: string,
    @Inject(UI_TD_SORT_LINK_DEFAULT_ICON_NONE) private defaultIconNone: string,
    @Inject(UI_DEFAULT_ICON_SET) private globalDefaultIconSet: string,
  ) {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.currentIconSet = this.iconSet ?? this.defaultIconSet ?? this.globalDefaultIconSet;
    this.currentIconUp = this.iconUp ?? this.defaultIconUp;
    this.currentIconDown = this.iconDown ?? this.defaultIconDown;
    this.currentIconNone = this.iconNone ?? this.defaultIconNone;
  }

  onOrderChange(order: UiSortOrder): void {
    this.order = order;
    this.orderChange.emit(order);
  }
}
