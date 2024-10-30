import { Component } from '@angular/core';
import { SingleProjectComponent } from "./single-project/single-project.component";
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';
import { LanguageService } from '../../language.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  currentLanguage: string = 'en';
  
  constructor(private themeService: ThemeService, private languageService: LanguageService) {}

  /**
   * Initializes the component by subscribing to the current language observable
   * and setting the language. Also checks the dark mode status.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.checkDarkMode();
  }

  /**
   * Retrieves the translation for the specified key based on the current language.
   *
   * @param {string} key - The key for the translation text.
   * @returns {string} - The translated text corresponding to the key.
   */
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  /**
   * Checks and returns the current dark mode status.
   *
   * @returns {boolean} - Returns true if dark mode is active, otherwise false.
   */
  checkDarkMode(): boolean {
    return this.themeService.getDarkModeStatus();
  }
}