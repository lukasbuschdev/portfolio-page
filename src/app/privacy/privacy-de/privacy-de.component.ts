import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';
import { PrivacyComponent } from '../privacy.component';

@Component({
  selector: 'app-privacy-de',
  standalone: true,
  imports: [NgIf, CommonModule, ScrollAnimationDirective],
  templateUrl: './privacy-de.component.html',
  styleUrl: './privacy-de.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyDeComponent {
  constructor() {}

  @Input() parent!: PrivacyComponent;
}