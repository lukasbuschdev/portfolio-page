import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ScrollService } from '../scroll.service';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NavbarComponent, CommonModule]
})
export class HeaderComponent {
  constructor(private router: Router, public scrollService: ScrollService, private themeService: ThemeService) { }

  ngOnInit() {
    this.checkDarkMode();
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }
}