import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // The brackets make it an attribute selector
  standalone: true // Use standalone: true for modern Angular applications
})
export class HighlightDirective {
  // You can also pass dynamic data into the directive using @Input
  @Input() appHighlight = 'yellow'; 

  constructor(private el: ElementRef) {}

  // Listen for mouseenter event
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  // Listen for mouseleave event
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}