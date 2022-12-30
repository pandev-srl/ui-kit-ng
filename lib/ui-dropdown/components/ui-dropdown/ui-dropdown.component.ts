import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UiDropdownMenuComponent } from '../ui-dropdown-menu/ui-dropdown-menu.component';
import { UiDropdownToggleDirective } from '../../directives/ui-dropdown-toggle.directive';
import { SubscriptionManagerService } from '@/shared';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SubscriptionManagerService],
})
export class UiDropdownComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() autoClose = true;

  @ContentChild(UiDropdownMenuComponent) menuRef: UiDropdownMenuComponent | undefined;
  @ContentChild(UiDropdownToggleDirective) toggleRef: UiDropdownToggleDirective | undefined;

  @Input()
  opened = false;
  @Output()
  openedChange = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef, private subs: SubscriptionManagerService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.subs.push(
      this.toggleRef?.toggled.subscribe(() => {
        this.opened = !this.opened;
        this.openedChange.emit(this.opened);
        this.cdr.markForCheck();
      }),
    );

    this.subs.push(
      this.menuRef?.closedByItems.subscribe(() => {
        this.close();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribeAll();
  }

  open(): void {
    this.opened = true;
    this.openedChange.emit(this.opened);
    this.cdr.markForCheck();
  }

  close(): void {
    this.opened = false;
    this.openedChange.emit(this.opened);
    this.cdr.markForCheck();
  }

  onClickOutside(): void {
    this.autoClose && this.close();
  }
}
