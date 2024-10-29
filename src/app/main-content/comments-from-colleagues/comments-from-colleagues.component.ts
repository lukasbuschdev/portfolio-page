import { Component } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-comments-from-colleagues',
  standalone: true,
  imports: [CommentComponent, CommonModule],
  templateUrl: './comments-from-colleagues.component.html',
  styleUrls: ['./comments-from-colleagues.component.scss']
})
export class CommentsFromColleaguesComponent {
  currentLanguage: string = 'en';

  constructor(private languageService: LanguageService) {}

    /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Subscribes to the current language from the LanguageService and updates `currentLanguage`.
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  /**
   * Retrieves the translated text for a given key based on the current language.
   *
   * @param {string} key - The key for the translation text to retrieve.
   * @returns {string} The translated text for the provided key.
   */
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}