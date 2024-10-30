import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { LanguageService } from '../../../language.service';
import { ScrollAnimationDirective } from '../../../scroll-animation.directive';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent {
  currentLanguage: string = 'en';

  constructor(private themeService: ThemeService, private languageService: LanguageService) {}

  /**
   * Initializes the component by subscribing to the current language observable
   * and setting the language based on the subscription.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  /**
   * Checks and returns the current dark mode status.
   *
   * @returns {boolean} - Returns true if dark mode is active, otherwise false.
   */
  checkDarkMode(): boolean {
    return this.themeService.getDarkModeStatus();
  }

  getProjects() {
    const translations: any = {
      en: [
        {
          name: 'Join',
          technologies: 'JavaScript | HTML | CSS | Firebase',
          description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
          img: './assets/img/join.png',
          link: 'https://lukasbusch.dev/Join/init/login/login.html',
          github: 'https://github.com/lukasbuschdev/Join'
        },
        {
          name: 'Pollo Loco',
          technologies: 'JavaScript | HTML | CSS',
          description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
          img: './assets/img/polloloco.png',
          link: 'https://lukasbusch.dev/PolloLoco/index.html',
          github: 'https://github.com/lukasbuschdev/PolloLoco'
        },
        {
          name: 'Notes',
          technologies: 'JavaScript | HTML | CSS | Firebase',
          description: 'Create, edit, archive, and delete notes effortlessly with inbuilt search functionality. Available in 5 languages and downloadable for any device.',
          img: './assets/img/notes.png',
          link: 'https://lukasbusch.dev/Notes/index.html?fullscreen=true',
          github: 'https://github.com/lukasbuschdev/Notes'
        }
      ],
      es: [
        {
          name: 'Join',
          technologies: 'JavaScript | HTML | CSS | Firebase',
          description: 'Administrador de tareas inspirado en el sistema Kanban. Crea y organiza tareas usando funciones de arrastrar y soltar, asignar usuarios y categorías.',
          img: './assets/img/join.png',
          link: 'https://lukasbusch.dev/Join/init/login/login.html',
          github: 'https://github.com/lukasbuschdev/Join'
        },
        {
          name: 'Pollo Loco',
          technologies: 'JavaScript | HTML | CSS',
          description: 'Juego de saltar, correr y lanzar basado en un enfoque orientado a objetos. Ayuda a Pepe a encontrar monedas y salsa tabasco para luchar contra la gallina loca.',
          img: './assets/img/polloloco.png',
          link: 'https://lukasbusch.dev/PolloLoco/index.html',
          github: 'https://github.com/lukasbuschdev/PolloLoco'
        },
        {
          name: 'Notas',
          technologies: 'JavaScript | HTML | CSS | Firebase',
          description: 'Crea, edita, archiva y elimina notas fácilmente con funcionalidad de búsqueda incorporada. Disponible en 5 idiomas y descargable para cualquier dispositivo.',
          img: './assets/img/notes.png',
          link: 'https://lukasbusch.dev/Notes/index.html?fullscreen=true',
          github: 'https://github.com/lukasbuschdev/Notes'
        }
      ],
      de: [
        {
          name: 'Join',
          technologies: 'JavaScript | HTML | CSS | Firebase',
          description: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzern und Kategorien zu.',
          img: './assets/img/join.png',
          link: 'https://lukasbusch.dev/Join/init/login/login.html',
          github: 'https://github.com/lukasbuschdev/Join'
        },
        {
          name: 'Pollo Loco',
          technologies: 'JavaScript | HTML | CSS',
          description: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabascosauce zu finden, um gegen die verrückte Henne zu kämpfen.',
          img: './assets/img/polloloco.png',
          link: 'https://lukasbusch.dev/PolloLoco/index.html',
          github: 'https://github.com/lukasbuschdev/PolloLoco'
        },
        {
          name: 'Notizen',
          technologies: 'JavaScript | HTML | CSS | Firebase',
          description: 'Erstellen, bearbeiten, archivieren und löschen Sie Notizen mühelos mit eingebauter Suchfunktionalität. In 5 Sprachen verfügbar und für jedes Gerät herunterladbar.',
          img: './assets/img/notes.png',
          link: 'https://lukasbusch.dev/Notes/index.html?fullscreen=true',
          github: 'https://github.com/lukasbuschdev/Notes'
        }
      ]
    };

    return translations[this.currentLanguage];
  }
}