import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentLanguage: string = 'en';

  constructor(public scrollService: ScrollService, private router: Router, private languageService: LanguageService) {}

  /**
   * Initializes the component by subscribing to the current language from the language service.
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
   * Navigates the user to the legal notice page.
   */
  openLegalNotice(): void {
    this.router.navigate(['/legal']);
  }

  /**
   * Navigates the user to the contact section of the main-content page and focus on input #name.
   */
  gotToContact(sectionId: string, contactInput: string) {
    this.router.navigate(['/main-content']);
    this.scrollService.scrollToSection(sectionId, contactInput);
  }
}