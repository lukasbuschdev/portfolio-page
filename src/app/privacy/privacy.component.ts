import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';
import { LanguageService } from '../language.service';
import { CommonModule, NgIf } from '@angular/common';
import { PrivacyEnComponent } from "./privacy-en/privacy-en.component";
import { PrivacyEsComponent } from './privacy-es/privacy-es.component';
import { PrivacyDeComponent } from './privacy-de/privacy-de.component';
import { ScrollAnimationDirective } from '../scroll-animation.directive';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [NgIf, CommonModule, PrivacyEnComponent, PrivacyEsComponent, PrivacyDeComponent, ScrollAnimationDirective],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  isScrollButtonVisible = false;
  currentLanguage: string = 'en';

  constructor(private router: Router, private themeService: ThemeService, private languageService: LanguageService) {}

  /**
   * Initializes the component by subscribing to the current language setting
   * and checking the scroll position to determine the visibility of the scroll button.
   * Logs the current language to the console.
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
      console.log(this.currentLanguage);
    });
    this.checkScroll();
  }

  /**
   * Checks the current scroll position and toggles the visibility of the scroll-up button
   * based on whether the user has scrolled down more than 300 pixels.
   * Triggered on the window scroll event.
   */
  @HostListener('window:scroll', [])
  checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrollButtonVisible = scrollPosition > 300;
  }

  /**
   * Navigates to the main content page, effectively closing the privacy page.
   */
  closePrivacy(): void {
    this.router.navigate(['/main-content']);
  }

  /**
   * Scrolls the window to the top of the page.
   */
  scrollUp(): void {
    window.scrollTo(0, 0);
  }

  /**
   * Checks and returns the current dark mode status.
   * 
   * @returns {boolean} `true` if dark mode is active, `false` otherwise.
   */
  checkDarkMode(): boolean {
    return this.themeService.getDarkModeStatus();
  }
}