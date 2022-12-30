import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { UiDropdownItemComponent } from '../ui-dropdown-item/ui-dropdown-item.component';
import { SubscriptionManagerService } from '@/shared';

@Component({
  selector: 'ui-dropdown-menu',
  templateUrl: './ui-dropdown-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SubscriptionManagerService],
})
export class UiDropdownMenuComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {
  @Input() placement: 'left' | 'right' = 'left';
  @Input() closeOnClick = true;
  @Output() closedByItems = new EventEmitter<void>();

  @HostBinding('class.placement-left') placementLeft = false;
  @HostBinding('class.placement-right') placementRight = false;

  @ContentChildren(UiDropdownItemComponent) items: QueryList<UiDropdownItemComponent> | undefined;

  constructor(private subs: SubscriptionManagerService) {}

  ngOnInit(): void {
    this.setPositionClass();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['position']) {
      this.setPositionClass();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribeAll();
  }

  ngAfterContentInit(): void {
    if (this.items) {
      this.items.forEach((item) => {
        this.subs.push(
          item.clicked.subscribe((el) => {
            if (this.closeOnClick) {
              this.closedByItems.emit();
            }
          }),
        );
      });
    }
  }

  private setPositionClass(): void {
    this.placementLeft = false;
    this.placementRight = false;

    switch (this.placement) {
      case 'left':
        this.placementLeft = true;
        break;
      case 'right':
        this.placementRight = true;
        break;
      default:
        this.placementLeft = true;
    }
  }
}
