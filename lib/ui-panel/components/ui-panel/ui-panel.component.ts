import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { UiPanelHeaderComponent } from '../ui-panel-header/ui-panel-header.component';
import { UiPanelBodyComponent } from '../ui-panel-body/ui-panel-body.component';
import { UiPanelFooterComponent } from '../ui-panel-footer/ui-panel-footer.component';

@Component({
  selector: 'ui-panel',
  templateUrl: './ui-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPanelComponent implements OnInit, AfterContentInit {
  @Input() @HostBinding('class.is-transparent') transparent = false;

  @Input() @HostBinding('class.is-loading') loading = false;
  @Input() loadingTitle: string | null = null;

  @ContentChild(UiPanelHeaderComponent) header: UiPanelHeaderComponent | undefined;
  @ContentChild(UiPanelBodyComponent) body: UiPanelBodyComponent | undefined;
  @ContentChild(UiPanelFooterComponent) footer: UiPanelFooterComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (!this.body) {
      return;
    }
    if (!this.header) {
      this.body.withoutHeader = true;
    }
    if (!this.footer) {
      this.body.withoutFooter = true;
    }
  }
}
