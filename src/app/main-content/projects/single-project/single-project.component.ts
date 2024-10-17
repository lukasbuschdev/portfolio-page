import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  projects = [
    {
      name: 'Join',
      technologies: 'JavaScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: './assets/img/join.png',
      link: 'https://lukas-busch.developerakademie.net/Join/init/login/login.html',
      github: 'https://github.com/lukasbuschdev/Join' 
    },
    {
      name: 'Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: './assets/img/polloloco.png',
      link: 'https://lukas-busch.developerakademie.net/PolloLoco/index.html',
      github: 'https://github.com/lukasbuschdev/PolloLoco'
    },
    {
      name: 'Notes',
      technologies: 'JavaScript | HTML | CSS | Firebase',
      description: 'Create, edit, archive, and delete notes effortlessly with inbuilt search functionality. Available in 5 languages and downloadable for any device.',
      img: './assets/img/notes.png',
      link: 'https://lukas-busch.developerakademie.net/Notes/index.html?fullscreen=true',
      github: 'https://github.com/lukasbuschdev/Notes' 
    }, 
    {
      name: 'DA Buble',
      technologies: 'Angular | TypeScript | HTML | SCSS | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      img: './assets/img/dabuble.png',
      link: '',
      github: '' 
    }
  ]
}
