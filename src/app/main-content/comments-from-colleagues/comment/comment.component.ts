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
      text: 'Lukas is a reliable and friendly person. Works in a structured way and writes clean code. I highly recommend him as a colleague.'
    },
    {
      name: 'Evelyn Marx',
      project: 'Project DA Bubble',
      text: 'Lukas is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.'
    },
    {
      name: 'Noah Müller',
      project: 'Project Pollo Loco',
      text: 'Lukas had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.'
    }
  ]
}
