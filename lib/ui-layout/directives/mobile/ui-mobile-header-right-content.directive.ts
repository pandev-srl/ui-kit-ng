import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiMobileHeaderRightContent]',
})
export class UiMobileHeaderRightContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
