import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [NgIf],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  isScrollButtonVisible = false;

  constructor(private router: Router, public sharedService: SharedService) {}

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrollButtonVisible = scrollPosition > 300;
  }

  closePrivacy() {
    this.router.navigate(['/main-content']);
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }
}