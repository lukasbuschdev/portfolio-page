import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ThemeService } from '../theme.service';
import { LanguageService } from '../language.service';
import { CommonModule, NgIf } from '@angular/common';
import { PrivacyEnComponent } from "./privacy-en/privacy-en.component";
import { PrivacyEsComponent } from './privacy-es/privacy-es.component';
import { PrivacyDeComponent } from './privacy-de/privacy-de.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [NgIf, CommonModule, PrivacyEnComponent, PrivacyEsComponent, PrivacyDeComponent],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  isScrollButtonVisible = false;
  currentLanguage: string = 'en';

  constructor(private router: Router, public sharedService: SharedService, private themeService: ThemeService, private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
      console.log(this.currentLanguage);
    });
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrollButtonVisible = scrollPosition > 300;
  }

  closePrivacy() {
    this.router.navigate(['/main-content']);
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  } 
}