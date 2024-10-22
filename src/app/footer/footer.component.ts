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

  ngOnInit() {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  openLegalNotice() {
    this.router.navigate(['/legal']);
  }
}