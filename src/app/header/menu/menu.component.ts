import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  currentLanguage: string = 'en';

  constructor(private router: Router, private themeService: ThemeService, private languageService: LanguageService) { }

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
   * Changes the application's language and updates the current language in the component.
   * 
   * @param {string} lang - The language code to switch to.
   */
  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
    this.currentLanguage = lang;
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
   * Closes the menu and navigates to the main content route.
   */
  closeMenu(): void {
    this.router.navigate(['/main-content']);
  }

  /**
   * Toggles the dark mode setting using the theme service.
   */
  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }


  translations: any = {
    en: {
      ABOUT_ME: 'About me',
      SKILL_SET: 'Skill set',
      MY_WORK: 'My work',
      CONTACT: 'Contact',
    },
    es: {
      ABOUT_ME: 'Sobre mí',
      SKILL_SET: 'Habilidades',
      MY_WORK: 'Mi trabajo',
      CONTACT: 'Contacto',
    },
    de: {
      ABOUT_ME: 'Über mich',
      SKILL_SET: 'Fähigkeiten',
      MY_WORK: 'Meine Arbeit',
      CONTACT: 'Kontakt',
    }
  };
}