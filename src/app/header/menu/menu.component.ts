import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router, private themeService: ThemeService) { }

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }

  closeMenu() {
    this.router.navigate(['/main-content'])
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
