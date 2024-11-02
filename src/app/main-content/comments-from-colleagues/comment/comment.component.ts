import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { ScrollAnimationDirective } from '../../../scroll-animation.directive';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  currentLanguage: string = 'en';

  constructor(private languageService: LanguageService) {}

  /**
   * Initializes the component and subscribes to language changes.
   * Updates the current language whenever there is a change in the LanguageService.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => this.currentLanguage = lang);
  }
  
  comments = [
    {
      name: 'Tarik Uyan',
      project: {
        en: 'Project Join',
        es: 'Proyecto Join',
        de: 'Projekt Join'
      },
      text: {
        en: 'Lukas is a reliable and friendly person. Works in a structured way and writes clean code. I highly recommend him as a colleague.',
        es: 'Lukas es una persona confiable y amigable. Trabaja de manera estructurada y escribe código limpio. Lo recomiendo como colega.',
        de: 'Lukas ist eine zuverlässige und freundliche Person. Arbeitet strukturiert und schreibt sauberen Code. Ich empfehle ihn sehr als Kollegen.'
      }
    },
    {
      name: 'Evelyn Marx',
      project: {
        en: 'Project DA Bubble',
        es: 'Proyecto DA Bubble',
        de: 'Projekt DA Bubble'
      },
      text: {
        en: 'Lukas is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
        es: 'Lukas es un compañero de equipo confiable y puede lidiar con el estrés de las fechas límite. Trabajo estructurado y código claro.',
        de: 'Lukas ist ein vertrauenswürdiger Teamplayer und kann mit dem Stress von Fristen umgehen. Strukturiertes Arbeiten und klarer Code.'
      }
    },
    {
      name: 'Noah Müller',
      project: {
        en: 'Project Pollo Loco',
        es: 'Proyecto Pollo Loco',
        de: 'Projekt Pollo Loco'
      },
      text: {
        en: 'Lukas had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.',
        es: 'Lukas tuvo que desarrollar, formatear y entregar contenido en colaboración con los miembros del equipo. Es una persona confiable y amigable.',
        de: 'Lukas musste Inhalte in Zusammenarbeit mit den Teammitgliedern entwickeln, formatieren und liefern. Er ist eine zuverlässige und freundliche Person.'
      }
    }
  ];
  
  /**
   * Retrieves the project name from the provided comment object based on the current language.
   *
   * @param {any} comment - The comment object containing project details.
   * @returns {string} The project name in the current language.
   */
  getProject(comment: any): string {
    return comment.project[this.currentLanguage];
  }

  /**
   * Retrieves the text from the provided comment object based on the current language.
   *
   * @param {any} comment - The comment object containing text details.
   * @returns {string} The text in the current language.
   */
  getText(comment: any): string {
    return comment.text[this.currentLanguage];
  }
}