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
  }

  openMenu() {
    this.router.navigate(['/menu']);
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}