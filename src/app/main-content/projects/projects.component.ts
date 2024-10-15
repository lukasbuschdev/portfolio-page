import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { PolloLocoComponent } from './pollo-loco/pollo-loco.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [JoinComponent, PolloLocoComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

}
