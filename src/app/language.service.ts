import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  private translations: any = {
    en: {
      ABOUT_ME: 'About me',
      SKILL_SET: 'Skill set',
      MY_WORK: 'My work',
      CONTACT: 'Contact',
      HELLO: 'Hello! I am Lukas',
      SCROLL_CAPITAL: 'SCROLL',
      SCROLL: 'Scroll down',
      DESCRIPTION_HEADING: "Let's work together",
      I_AM: 'I am',
      DESCRIPTION_TEXT_1: `As a Full-Stack Developer based in Mérida, Mexico, I enjoy helping designers and companies bring their ideas to life. 
                Specializing in Angular, TypeScript, SCSS and Node.js, I develop dynamic and responsive web applications. 
                I am seeking a mid-level web developer position to advance my career. 
                My ability to solve complex problems and my passion for programming make me a valuable asset to your team.`,
      DESCRIPTION_TEXT_2: "If you think I'd be a good match for your projects, contact me!",
      DESCRIPTION_BUTTON: 'Send a message',
      LOCATION: `located in <br> Merida, Mexico`,
      WORK_REMOTE: `open to <br> work remote`,
      OPEN_TRAVEL: 'open to travel',
      PROJECTS_HEADING: 'My work',
      PROJECTS_TEXT: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      JOIN_TEXT: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      POLLO_LOCO_TEXT: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      NOTES_TEXT: 'Create, edit, archive, and delete notes effortlessly with inbuilt search functionality. Available in 5 languages and downloadable for any device.',
      TEAMPLAYER_HEADING: 'Need a teamplayer?',
      TEAMPLAYER_TEXT: 'Here is what my colleagues said about me',
      COMMENT_PROJECT: 'Project',
      COMMENT_TEXT_1: 'Lukas is a reliable and friendly person. Works in a structured way and writes clean code. I highly recommend him as a colleague.',
      COMMENT_TEXT_2: 'Lukas is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
      COMMENT_TEXT_3: 'Lukas had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.',
      CONTACT_HEADING: 'Contact',
      CONTACT_SUBHEADING: 'Got a problem to solve?',
      CONTACT_TEXT: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
      CONTACT_ME: `Need a Full-Stack Developer? <b>Contact me!</b>`,
      CONATCT_CONFIRMATION_CHECK_1: `I've read the`,
      CONATCT_CONFIRMATION_CHECK_PRIVACY: ` privacy policy`,
      CONATCT_CONFIRMATION_CHECK_2: ` and agree to the processing of my data as outlined.`,
      CONATCT_CONFIRMATION_TEXT: `Your message has been successfully sent! <br> Thank you for reaching out. <br> :)`,
      CONTACT_NAME_PLACEHOLDER: 'Your name',
      CONTACT_MAIL_PLACEHOLDER: 'Your email',
      CONTACT_MESSAGE_PLACEHOLDER: 'Your message',
      CONTACT_ERROR_NAME: 'Please enter your name!',
      CONTACT_ERROR_MAIL: 'Please enter a valid email address!',
      CONTACT_ERROR_MESSAGE: 'Please enter a message!',
      CONTACT_ERROR_MESSAGE_SHORT: 'Message too short!',
      CONTACT_BUTTON: 'Say hello :)',
      FOOTER_LEGAL_NOTICE: 'Legal Notice',
      LEGAL_NOTICE_HEADING: 'Legal Notice',
      LEGAL_NOTICE_SUBHEADING: 'Information according to § 5 TGM',
      LEGAL_NOTICE_CITY: 'Merida',
      LEGAL_NOTICE_COUNTRY: 'Mexico',
      LEGAL_NOTICE_CONTACT: 'Contact',
      LEGAL_NOTICE_PHONE: 'Phone:',
      LEGAL_NOTICE_MAIL: 'E-Mail:',
      LEGAL_NOTICE_SOURCE: 'Source:'
    },
    es: {
      ABOUT_ME: 'Sobre mí',
      SKILL_SET: 'Habilidades',
      MY_WORK: 'Mi trabajo',
      CONTACT: 'Contacto',
      HELLO: '¡Hola! Soy Lukas',
      SCROLL_CAPITAL: 'DESPLAZA',
      SCROLL: 'Desplázate abajo',
      DESCRIPTION_HEADING: 'Trabajemos juntos',
      I_AM: 'Soy',
      DESCRIPTION_TEXT_1: `Como Desarrollador Full-Stack con sede en Mérida, México, disfruto ayudando a diseñadores y empresas a hacer realidad sus ideas. 
                          Especializado en Angular, TypeScript, SCSS y Node.js, desarrollo aplicaciones web dinámicas y responsivas. 
                          Estoy buscando un puesto de desarrollador web de nivel intermedio para avanzar en mi carrera. 
                          Mi capacidad para resolver problemas complejos y mi pasión por la programación me convierten en un valioso activo para su equipo.`,
      DESCRIPTION_TEXT_2: '¡Si crees que encajaría en tus proyectos, contáctame!',
      DESCRIPTION_BUTTON: 'Enviar mensaje',
      LOCATION: `ubicado en <br> Mérida, México`,
      WORK_REMOTE:`disponible para <br> trabajar remotamente`,
      OPEN_TRAVEL: 'disponible para viajar',
      PROJECTS_HEADING: 'Mi trabajo',
      PROJECTS_TEXT: 'Explora una selección de mi trabajo aquí - Interactúa con los proyectos para ver mis habilidades en acción.',
      JOIN_TEXT: 'Administrador de tareas inspirado en el sistema Kanban. Crea y organiza tareas usando funciones de arrastrar y soltar, asignar usuarios y categorías.',
      POLLO_LOCO_TEXT: 'Juego de saltar, correr y lanzar basado en un enfoque orientado a objetos. Ayuda a Pepe a encontrar monedas y salsa tabasco para luchar contra la gallina loca.',
      NOTES_TEXT: 'Crea, edita, archiva y elimina notas fácilmente con funcionalidad de búsqueda incorporada. Disponible en 5 idiomas y descargable para cualquier dispositivo.',
      TEAMPLAYER_HEADING: '¿Necesitas un jugador en equipo?',
      TEAMPLAYER_TEXT: 'Esto es lo que dijeron mis colegas sobre mí',
      COMMENT_PROJECT: 'Proyecto',
      COMMENT_TEXT_1: 'Lukas es una persona confiable y amigable. Trabaja de manera estructurada y escribe código limpio. Lo recomiendo altamente como colega.',
      COMMENT_TEXT_2: 'Lukas es un jugador en equipo confiable y puede lidiar con el estrés de las fechas límite. Trabajo estructurado y código claro.',
      COMMENT_TEXT_3: 'Lukas tuvo que desarrollar, formatear y entregar contenido en colaboración con los miembros del equipo. Es una persona confiable y amigable.',
      CONTACT_HEADING: 'Contacto',
      CONTACT_SUBHEADING: '¿Tienes un problema que resolver?',
      CONTACT_TEXT: 'Contáctame a través de este formulario, me interesa saber de ti, conocer tus ideas y contribuir a tus proyectos con mi trabajo.',
      CONTACT_ME: `¿Necesitas un desarrollador Full-Stack? <b>¡Contáctame!</b>`,
      CONATCT_CONFIRMATION_CHECK_1: `He leído la`,
      CONATCT_CONFIRMATION_CHECK_PRIVACY: ` política de privacidad`,
      CONATCT_CONFIRMATION_CHECK_2: ` y acepto el procesamiento de mis datos como se describe.`,
      CONATCT_CONFIRMATION_TEXT: `¡Tu mensaje ha sido enviado con éxito! <br> Gracias por contactarme. <br> :)`,
      CONATCT_CONFIRMATION_PRIVACY: 'política de privacidad',
      CONTACT_NAME_PLACEHOLDER: 'Tu nombre',
      CONTACT_MAIL_PLACEHOLDER: 'Tu correo electrónico',
      CONTACT_MESSAGE_PLACEHOLDER: 'Tu mensaje',
      CONTACT_ERROR_NAME: '¡Por favor, ingresa tu nombre!',
      CONTACT_ERROR_MAIL: '¡Correo no válido!',
      CONTACT_ERROR_MESSAGE: '¡Por favor, ingresa un mensaje!',
      CONTACT_ERROR_MESSAGE_SHORT: '¡El mensaje es demasiado corto!',
      CONTACT_BUTTON: 'Di hola :)',
      FOOTER_LEGAL_NOTICE: 'Aviso legal',
      LEGAL_NOTICE_HEADING: 'Aviso legal',
      LEGAL_NOTICE_SUBHEADING: 'Información según § 5 TGM',
      LEGAL_NOTICE_CITY: 'Mérida',
      LEGAL_NOTICE_COUNTRY: 'México',
      LEGAL_NOTICE_CONTACT: 'Contacto',
      LEGAL_NOTICE_PHONE: 'Teléfono:',
      LEGAL_NOTICE_MAIL: 'Correo electrónico:',
      LEGAL_NOTICE_SOURCE: 'Fuente:'
    },
    de: {
      ABOUT_ME: 'Über mich',
      SKILL_SET: 'Fähigkeiten',
      MY_WORK: 'Meine Arbeit',
      CONTACT: 'Kontakt',
      DARK_MODE: 'Dunkel',
      HELLO: 'Hallo! Ich bin Lukas',
      SCROLL_CAPITAL: 'SCROLL',
      SCROLL: 'Runterscrollen',
      DESCRIPTION_HEADING: 'Lass uns zusammen arbeiten',
      I_AM: 'Ich bin',
      DESCRIPTION_TEXT_1: `Als Full-Stack-Entwickler mit Sitz in Mérida, Mexiko, unterstütze ich gerne Designer und Unternehmen dabei, ihre Ideen in die Realität umzusetzen. 
                          Mit Spezialisierung auf Angular, TypeScript, SCSS und Node.js entwickle ich dynamische und responsive Webanwendungen. 
                          Ich suche eine Position als Webentwickler auf mittlerer Ebene, um meine Karriere voranzutreiben. 
                          Meine Fähigkeit, komplexe Probleme zu lösen, und meine Leidenschaft für Programmierung machen mich zu einer wertvollen Bereicherung für Ihr Team.`,
      DESCRIPTION_TEXT_2: 'Wenn du denkst, dass ich gut zu deinen Projekten passen würde, kontaktiere mich!',
      DESCRIPTION_BUTTON: 'Nachricht senden',
      LOCATION: `standort in <br> Merida, Mexiko`,
      WORK_REMOTE: `offen für <br> Remote-Arbeit`,
      OPEN_TRAVEL: 'offen für Reisen',
      PROJECTS_HEADING: 'Meine Arbeit',
      PROJECTS_TEXT: 'Erkunde hier eine Auswahl meiner Arbeit - Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
      JOIN_TEXT: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzern und Kategorien zu.',
      POLLO_LOCO_TEXT: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabascosauce zu finden, um gegen die verrückte Henne zu kämpfen.',
      NOTES_TEXT: 'Erstellen, bearbeiten, archivieren und löschen Sie Notizen mühelos mit eingebauter Suchfunktionalität. In 5 Sprachen verfügbar und für jedes Gerät herunterladbar.',
      TEAMPLAYER_HEADING: 'Brauchst du einen Teamplayer?',
      TEAMPLAYER_TEXT: 'Hier ist, was meine Kollegen über mich gesagt haben',
      COMMENT_PROJECT: 'Projekt',
      COMMENT_TEXT_1: 'Lukas ist eine zuverlässige und freundliche Person. Arbeitet strukturiert und schreibt sauberen Code. Ich kann ihn als Kollegen nur empfehlen.',
      COMMENT_TEXT_2: 'Lukas ist ein vertrauenswürdiger Teamplayer und kann mit dem Stress von Fristen umgehen. Strukturiertes Arbeiten und klarer Code.',
      COMMENT_TEXT_3: 'Lukas musste Inhalte in Zusammenarbeit mit den Teammitgliedern entwickeln, formatieren und liefern. Er ist eine zuverlässige und freundliche Person.',
      CONTACT_HEADING: 'Kontakt',
      CONTACT_SUBHEADING: 'Hast du ein Problem zu lösen?',
      CONTACT_TEXT: 'Kontaktiere mich über dieses Formular, ich bin daran interessiert, von dir zu hören, deine Ideen zu kennen und mit meiner Arbeit zu deinen Projekten beizutragen.',
      CONTACT_ME: `Brauchst du einen Full-Stack-Entwickler? <b>Kontaktiere mich!</b>`,
      CONATCT_CONFIRMATION_CHECK_1: `Ich habe die`,
      CONATCT_CONFIRMATION_CHECK_PRIVACY: ` Datenschutzerklärung`,
      CONATCT_CONFIRMATION_CHECK_2: ` gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.`,
      CONATCT_CONFIRMATION_TEXT: `Deine Nachricht wurde erfolgreich gesendet! <br> Vielen Dank für deine Kontaktaufnahme. <br> :)`,
      CONTACT_NAME_PLACEHOLDER: 'Dein Name',
      CONTACT_MAIL_PLACEHOLDER: 'Deine E-Mail',
      CONTACT_MESSAGE_PLACEHOLDER: 'Deine Nachricht',
      CONTACT_ERROR_NAME: 'Bitte gib deinen Namen ein!',
      CONTACT_ERROR_MAIL: 'E-Mail-Adresse ungültig!',
      CONTACT_ERROR_MESSAGE: 'Bitte gib eine Nachricht ein!',
      CONTACT_ERROR_MESSAGE_SHORT: 'Nachricht zu kurz!',
      CONTACT_BUTTON: 'Sag Hallo :)',
      FOOTER_LEGAL_NOTICE: 'Impressum',
      LEGAL_NOTICE_HEADING: 'Impressum',
      LEGAL_NOTICE_SUBHEADING: 'Angaben gemäß § 5 TGM',
      LEGAL_NOTICE_CITY: 'Mérida',
      LEGAL_NOTICE_COUNTRY: 'Mexiko',
      LEGAL_NOTICE_CONTACT: 'Kontakt',
      LEGAL_NOTICE_PHONE: 'Telefon:',
      LEGAL_NOTICE_MAIL: 'E-Mail:',
      LEGAL_NOTICE_SOURCE: 'Quelle:'
    }
  };

  constructor() {
    this.loadLanguage();
  }

    /**
   * Returns an observable of the current language.
   * @returns {Observable<string>} The observable representing the current language.
   */
  getCurrentLanguage() {
    return this.currentLang.asObservable();
  }

  /**
   * Changes the current language and updates the selected language in local storage.
   * @param {string} lang - The language to set as the current language.
   */
  changeLanguage(lang: string) {
    this.currentLang.next(lang);
    localStorage.setItem('selectedLang', lang);
  }

  /**
   * Retrieves the translated value for a given key based on the current language.
   * If the translation key does not exist, it returns the key itself as a fallback.
   * @param {string} key - The key to look up in the translations.
   * @returns {string} The translated value or the key if not found.
   */
  getTranslation(key: string): string {
    const lang = this.currentLang.getValue();
    return this.translations[lang][key] || key;
  }

  /**
   * Loads the saved language from local storage and sets it as the current language.
   * If no language is saved, it does nothing.
   * @private
   */
  private loadLanguage() {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
      this.currentLang.next(savedLang);
    }
  }
}