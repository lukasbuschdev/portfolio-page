import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  skillset = [
    {
      name: 'Angular',
      img: './assets/img/angular.png'
    },
    {
      name: 'TypeScript',
      img: './assets/img/ts.png'
    },
    {
      name: 'JavaScript',
      img: './assets/img/js.png'
    },
    {
      name: 'HTML',
      img: './assets/img/html.png'
    },
    {
      name: 'Scrum',
      img: './assets/img/scrum.png'
    },
    {
      name: 'Firebase',
      img: './assets/img/firebase.png'
    },
    {
      name: 'GIT',
      img: './assets/img/git.png'
    },
    {
      name: 'CSS/SCSS',
      img: './assets/img/css.png'
    },
    {
      name: 'Rest-Api',
      img: './assets/img/api.png'
    },
    {
      name: 'Material Design',
      img: './assets/img/materialdesign.png'
    },
    {
      name: 'Growth mindset',
      img: './assets/img/growth.png'
    }
  ];
}
