import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  comments = [
    {
      name: 'Tarik Uyan',
      project: 'Project Join',
      text: 'Lukas is a reliable and friendly person. Work in a structured way and write a clear code. I  highly recommend her as a colleague.'
    },
    {
      name: 'Evelyn Marx',
      project: 'Project DA Bubble',
      text: 'Lukas is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.'
    },
    {
      name: 'Noah Müller',
      project: 'Project Pollo Loco',
      text: 'Lukas had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.'
    }
  ]
}
