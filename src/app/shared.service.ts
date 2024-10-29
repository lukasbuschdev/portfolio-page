import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private router: Router, public scrollService: ScrollService) { }

  /**
   * Navigates to the main content route and scrolls to the contact section upon completion.
   * Uses the `ScrollService` to scroll to the 'contact-container' element.
   */
  openContact() {
    this.router.navigate(['/main-content']).then(() => {
      this.scrollService.scrollToSection('contact-container');
    });
  }
}