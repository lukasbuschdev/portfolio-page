import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private router: Router, public scrollService: ScrollService) { }

  openContact() {
    this.router.navigate(['/main-content']).then(() => {
        this.scrollService.scrollToSection('contact-container');
    });
  }
}
