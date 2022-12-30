import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiDesktopHeaderCenterContent]',
})
export class UiDesktopHeaderCenterContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
