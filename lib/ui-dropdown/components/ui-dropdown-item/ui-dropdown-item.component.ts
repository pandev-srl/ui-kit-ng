import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'ui-dropdown-item',
  templateUrl: './ui-dropdown-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDropdownItemComponent implements OnInit {
  @Output() clicked = new EventEmitter<void>();

  @HostListener('click')
  onClick(): void {
    this.clicked.emit();
  }

  constructor(public el: ElementRef) {}

  ngOnInit(): void {}
}
