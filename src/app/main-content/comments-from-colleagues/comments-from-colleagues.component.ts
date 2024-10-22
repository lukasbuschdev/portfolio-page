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

  ngOnInit() {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }
}