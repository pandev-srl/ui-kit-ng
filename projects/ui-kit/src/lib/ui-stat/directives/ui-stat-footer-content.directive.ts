import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiStatFooterContent]',
})
export class UiStatFooterContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
