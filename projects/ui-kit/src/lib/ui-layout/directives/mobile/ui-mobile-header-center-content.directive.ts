import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiMobileHeaderCenterContent]',
})
export class UiMobileHeaderCenterContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
