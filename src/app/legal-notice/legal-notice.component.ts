import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public scrollService: ScrollService, private router: Router, public sharedService: SharedService) {}

  closeLegalNotice() {
    this.router.navigate(['/main-content']);
  }
}
