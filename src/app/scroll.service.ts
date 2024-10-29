import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  /**
   * Smoothly scrolls to the specified section on the page.
   * Uses a short delay to ensure the element is rendered before scrolling.
   * Updates the browser's history to reflect the new section's hash in the URL.
   * 
   * @param {string} sectionId - The ID of the section element to scroll to.
   */
  scrollToSection(sectionId: string, inputId?: string) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
        if(inputId) {
          setTimeout(() => {
            const inputElement = document.getElementById(inputId) as HTMLInputElement;
            if(inputElement) {
              inputElement.focus({ preventScroll: true });
            }
          }, 300);
        }
      }
    }, 100);
  }  
}