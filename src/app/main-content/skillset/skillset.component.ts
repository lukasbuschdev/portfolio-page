import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  skillset = [
    {
      name: 'Angular',
      img: './assets/img/angular.svg'
    },
    {
      name: 'TypeScript',
      img: './assets/img/ts.svg'
    },
    {
      name: 'JavaScript',
      img: './assets/img/js.svg'
    },
    {
      name: 'HTML',
      img: './assets/img/html.svg'
    },
    {
      name: 'Scrum',
      img: './assets/img/scrum.svg'
    },
    {
      name: 'Firebase',
      img: './assets/img/firebase.svg'
    },
    {
      name: 'GIT',
      img: './assets/img/git.svg'
    },
    {
      name: 'CSS/SCSS',
      img: './assets/img/css.svg'
    },
    {
      name: 'Rest-Api',
      img: './assets/img/api.svg'
    },
    {
      name: 'Material Design',
      img: './assets/img/materialdesign.svg'
    },
    {
      name: 'Growth mindset',
      img: './assets/img/growth.svg'
    }
  ];
}
