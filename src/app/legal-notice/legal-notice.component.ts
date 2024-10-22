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

  ngOnInit() {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }

  closeLegalNotice() {
    this.router.navigate(['/main-content']);
  }
}
