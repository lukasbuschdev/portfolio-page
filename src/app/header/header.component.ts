import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { ScrollService } from '../scroll.service';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NavbarComponent, CommonModule]
})
export class HeaderComponent {
  currentLanguage: string = 'en';

  constructor(public scrollService: ScrollService, private themeService: ThemeService, private languageService: LanguageService) { }

  /**
   * Initializes the component by subscribing to the current language from the language service
   * and setting the dark mode status based on the current theme settings.
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.checkDarkMode();
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
}