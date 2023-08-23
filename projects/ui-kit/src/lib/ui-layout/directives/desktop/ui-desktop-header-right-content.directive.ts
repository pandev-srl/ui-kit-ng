import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiDesktopHeaderRightContent]',
})
export class UiDesktopHeaderRightContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
