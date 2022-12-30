import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiDesktopHeaderLeftContent]',
})
export class UiDesktopHeaderLeftContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
