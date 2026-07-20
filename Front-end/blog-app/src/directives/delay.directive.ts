import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]',
  standalone: true
})
export class DelayDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  // The @Input name MUST match the selector name exactly for structural directives
  @Input() set appDelay(timeInMs: number) {
    // Wait for the specified time, then render the element
    setTimeout(() => {
      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    }, timeInMs);
  }
}