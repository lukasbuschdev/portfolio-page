import { Component } from '@angular/core';
import { SingleProjectComponent } from "./single-project/single-project.component";
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private themeService: ThemeService) {}

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }
}