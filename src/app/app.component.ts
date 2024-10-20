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

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.isFooterVisible = event.url !== '/menu';
        window.scrollTo(0, 0);
      }

      if(event instanceof NavigationEnd) {
        this.isFooterVisible = event.url !== '/privacy';
        this.isHeaderVisible = event.url !== '/privacy';
        window.scrollTo(0, 0);
      }
    });
  }
}