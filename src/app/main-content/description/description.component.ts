import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  constructor(public scrollService: ScrollService, private themeService: ThemeService) {}

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  } 
}
