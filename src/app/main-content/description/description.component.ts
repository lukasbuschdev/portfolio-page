import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  currentLanguage: string = 'en';
  
  constructor(public scrollService: ScrollService, private themeService: ThemeService, private languageService: LanguageService) {}

  /**
   * Initializes the component by subscribing to the current language from the LanguageService
   * and updating `currentLanguage` whenever a new language is selected. Also checks the current theme mode.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => this.currentLanguage = lang);
    this.checkDarkMode();
  }

  /**
   * Retrieves the translation for a specified key based on the current language.
   *
   * @param {string} key - The key for the translation string.
   * @returns {string} - The translated string.
   */
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  /**
   * Checks the current theme mode status.
   *
   * @returns {boolean} - Returns true if dark mode is active, otherwise false.
   */
  checkDarkMode(): boolean {
    return this.themeService.getDarkModeStatus();
  }
}