import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToSection(sectionId: string) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  
      window.history.pushState(null, '', `#${sectionId}`);
    }, 100);
  }
}
