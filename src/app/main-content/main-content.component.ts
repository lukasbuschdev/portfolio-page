import { Component } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsFromColleaguesComponent } from './comments-from-colleagues/comments-from-colleagues.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [DescriptionComponent, SkillsetComponent, ProjectsComponent, CommentsFromColleaguesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

}
