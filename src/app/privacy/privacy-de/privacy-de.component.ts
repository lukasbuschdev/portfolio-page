import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { ScrollService } from '../../scroll.service';
import { CommonModule, NgIf } from '@angular/common';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-privacy-de',
  standalone: true,
  imports: [NgIf, CommonModule, ScrollAnimationDirective],
  templateUrl: './privacy-de.component.html',
  styleUrl: './privacy-de.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyDeComponent {
  constructor(public scrollService: ScrollService, private themeService: ThemeService, public sharedService: SharedService, public router: Router) {}

  isScrollButtonVisible: boolean = false;

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Initializes the scroll button visibility based on the current scroll position.
   */
  ngOnInit(): void {
    this.checkScroll();
  }

  /**
   * Checks the current scroll position and toggles the visibility of the scroll-up button
   * if the user has scrolled down more than 100 pixels.
   * This method is triggered on the window scroll event.
   */
  @HostListener('window:scroll', [])
  checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrollButtonVisible = scrollPosition > 100;
  }

  /**
   * Scrolls the page to the top.
   */
  scrollUp(): void {
    window.scrollTo(0, 0);
  }

  /**
   * Navigates to the main content page, effectively closing the privacy page.
   */
  closePrivacy(): void {
    this.router.navigate(['/main-content']);
  }

  /**
   * Returns the current dark mode status.
   *
   * @returns {boolean} `true` if dark mode is active, `false` otherwise.
   */
  checkDarkMode(): boolean {
    return this.themeService.getDarkModeStatus();
  }
}