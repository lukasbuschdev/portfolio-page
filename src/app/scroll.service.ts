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
  scrollToSection(sectionId: string): void {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      window.history.pushState(null, '', `#${sectionId}`);
    }, 100);
  }
}