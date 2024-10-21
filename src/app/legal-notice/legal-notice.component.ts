import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { ThemeService } from '../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public scrollService: ScrollService, private router: Router, public sharedService: SharedService, private themeService: ThemeService) {}

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }

  closeLegalNotice() {
    this.router.navigate(['/main-content']);
  }
}
