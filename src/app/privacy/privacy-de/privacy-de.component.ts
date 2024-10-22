import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { ScrollService } from '../../scroll.service';
import { CommonModule, NgIf } from '@angular/common';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-de',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './privacy-de.component.html',
  styleUrl: './privacy-de.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyDeComponent {
  constructor(public scrollService: ScrollService, private themeService: ThemeService, public sharedService: SharedService, public router: Router) {}

  isScrollButtonVisible: boolean = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrollButtonVisible = scrollPosition > 100;
  }
  
  scrollUp() {
    window.scrollTo(0, 0);
  }

  closePrivacy() {
    this.router.navigate(['/main-content']);
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  } 
}