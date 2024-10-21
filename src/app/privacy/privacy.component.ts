import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  constructor(private router: Router, public sharedService: SharedService) {}

  closePrivacy() {
    this.router.navigate(['/main-content'])
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }
}