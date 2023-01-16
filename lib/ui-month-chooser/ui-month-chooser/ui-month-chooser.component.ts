import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-month-chooser',
  templateUrl: './ui-month-chooser.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMonthChooserComponent implements OnInit {
  @Input() monthNumber: number | null = null;
  @Input() year: number | null = null;

  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
