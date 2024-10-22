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

  ngOnInit() {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.checkDarkMode();
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }
}