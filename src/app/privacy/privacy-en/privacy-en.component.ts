import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';
import { PrivacyComponent } from '../privacy.component';

@Component({
  selector: 'app-privacy-en',
  standalone: true,
  imports: [NgIf, CommonModule, ScrollAnimationDirective],
  templateUrl: './privacy-en.component.html',
  styleUrl: './privacy-en.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyEnComponent {
  constructor() {}

  @Input() parent!: PrivacyComponent;
}