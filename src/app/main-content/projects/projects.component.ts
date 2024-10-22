import { Component } from '@angular/core';
import { SingleProjectComponent } from "./single-project/single-project.component";
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  currentLanguage: string = 'en';
  
  constructor(private themeService: ThemeService, private languageService: LanguageService) {}

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