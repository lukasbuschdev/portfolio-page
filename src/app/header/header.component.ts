import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NavbarComponent]
})
export class HeaderComponent {
  constructor(private router: Router, public scrollService: ScrollService) { }

  openMenu() {
    this.router.navigate(['/menu']);
  }
}