import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  /**
   * Smoothly scrolls to the specified section on the page with an offset.
   * Uses a short delay to ensure the element is rendered before scrolling.
   * Updates the browser's history to reflect the new section's hash in the URL.
   * 
   * @param {string} sectionId - The ID of the section element to scroll to.
   * @param {string} [inputId] - The ID of the input element to focus after scrolling.
   */
  scrollToSection(sectionId: string, inputId?: string) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if(element) {
        const offset = window.innerWidth > 800 ? window.innerHeight * 0.15 : window.innerHeight * 0.12;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: elementPosition, behavior: 'smooth' });

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