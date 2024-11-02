import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

/**
 * Smoothly scrolls to a specified section and optionally focuses an input element.
 *
 * @param {string} sectionId - The ID of the section element to scroll to.
 * @param {string} [inputId] - The ID of the input element to focus, if provided.
 */
  scrollToSection(sectionId: string, inputId?: string) {
    document.getElementById(sectionId)?.scrollIntoView();
    inputId && document.getElementById(inputId)?.focus({ preventScroll: true });
  }
}