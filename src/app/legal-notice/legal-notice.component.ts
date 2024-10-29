import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  currentLanguage: string = 'en';

  constructor(public scrollService: ScrollService, private router: Router, public sharedService: SharedService, private themeService: ThemeService, private languageService: LanguageService) {}

    /**
   * Initializes the component by subscribing to the current language setting.
   * Updates the `currentLanguage` property whenever the language changes.
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  /**
   * Retrieves the translation for a given key based on the current language.
   * 
   * @param {string} key - The key for the translation text to retrieve.
   * @returns {string} The translated text corresponding to the key.
   */
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  /**
   * Checks and returns the current dark mode status.
   * 
   * @returns {boolean} `true` if dark mode is active, `false` otherwise.
   */
  checkDarkMode(): boolean {
    return this.themeService.getDarkModeStatus();
  }

  /**
   * Closes the legal notice page by navigating back to the main content page.
   */
  closeLegalNotice(): void {
    this.router.navigate(['/main-content']);
  }
}