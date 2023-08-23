import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UiHeadingSize } from '../../models';

@Component({
  selector: 'ui-heading',
  templateUrl: './ui-heading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeadingComponent implements OnInit, OnChanges {
  @Input() size: UiHeadingSize = 'h1';

  @HostBinding('class.h1') h1 = true;
  @HostBinding('class.h2') h2 = false;
  @HostBinding('class.h3') h3 = false;
  @HostBinding('class.h4') h4 = false;
  @HostBinding('class.h5') h5 = false;
  @HostBinding('class.h6') h6 = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size']) {
      this.setSize();
    }
  }

  private setSize(): void {
    this.h1 = false;
    this.h2 = false;
    this.h3 = false;
    this.h4 = false;
    this.h5 = false;
    this.h6 = false;

    switch (this.size) {
      case 'h1':
        this.h1 = true;
        break;
      case 'h2':
        this.h2 = true;
        break;
      case 'h3':
        this.h3 = true;
        break;
      case 'h4':
        this.h4 = true;
        break;
      case 'h5':
        this.h5 = true;
        break;
      case 'h6':
        this.h6 = true;
        break;
      default:
    }
  }
}
