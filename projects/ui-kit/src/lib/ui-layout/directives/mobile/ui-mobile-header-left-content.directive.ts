import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiMobileHeaderLeftContent]',
})
export class UiMobileHeaderLeftContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
