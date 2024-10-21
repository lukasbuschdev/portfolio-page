import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public scrollService: ScrollService, private themeService: ThemeService) {}

  ngOnInit() {
    this.checkDarkMode();
  }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}