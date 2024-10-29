import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentLanguage: string = 'en';

  constructor(
    public scrollService: ScrollService, 
    private themeService: ThemeService, 
    private router: Router, 
    private languageService: LanguageService
  ) {}

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
   * Changes the application's language by passing the specified language code
   * to the language service.
   * 
   * @param {string} lang - The language code to switch to.
   */
  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
  }

  /**
   * Opens the menu by navigating to the '/menu' route.
   */
  openMenu(): void {
    this.router.navigate(['/menu']);
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
   * Toggles the dark mode setting using the theme service.
   */
  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}