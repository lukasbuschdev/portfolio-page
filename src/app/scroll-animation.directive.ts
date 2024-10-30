import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  @Input() animationClass: string = 'fade-in';
  
  private elementPosition: number | null = null;
  private windowHeight: number = window.innerHeight;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'hidden');
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const elementTop = this.el.nativeElement.getBoundingClientRect().top;

    // Trigger animation when element is in view (within 85% of viewport height)
    if(elementTop < this.windowHeight * 0.85) {
      this.renderer.removeClass(this.el.nativeElement, 'hidden');
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
      
      // Store the current element position in viewport
      this.elementPosition = window.scrollY + elementTop;
    } 
    // Reset animation if scrolled more than 100vh up or down from the element's position
    else if(this.elementPosition !== null && Math.abs(window.scrollY - this.elementPosition) > this.windowHeight) {
      this.renderer.addClass(this.el.nativeElement, 'hidden');
      this.renderer.removeClass(this.el.nativeElement, this.animationClass);
      this.elementPosition = null;
    }
  }
}