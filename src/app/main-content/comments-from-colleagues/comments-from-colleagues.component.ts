import { Component } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments-from-colleagues',
  standalone: true,
  imports: [CommentComponent, CommonModule],
  templateUrl: './comments-from-colleagues.component.html',
  styleUrls: ['./comments-from-colleagues.component.scss']
})
export class CommentsFromColleaguesComponent {
}
