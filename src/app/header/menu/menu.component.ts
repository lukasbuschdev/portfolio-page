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

  ngOnInit() {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.checkDarkMode();
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
  
  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    this.currentLanguage = lang;
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }

  closeMenu() {
    this.router.navigate(['/main-content'])
  }

  toggleDarkMode() {
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
