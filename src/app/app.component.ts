import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-page';
  isFooterVisible = true;
  isHeaderVisible = true;

  constructor(private router: Router) {}

  /**
   * Initializes the component by subscribing to router events.
   * This function listens for navigation events, checks the current URL, and updates
   * the visibility of the header and footer based on specific routes. It also scrolls
   * the page to the top on each navigation end event.
   */
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      
      // Update footer and header visibility based on specific routes
      if(event instanceof NavigationEnd) {
        const url = event.url;
        this.isFooterVisible = url !== '/menu' && url !== '/privacy' && url !== '/legal';
        this.isHeaderVisible = url !== '/menu' && url !== '/privacy' && url !== '/legal';

        // Scroll to the top of the window
        window.scrollTo(0, 0);
      }
    });
  }
}