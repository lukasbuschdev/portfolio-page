import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';
import { PrivacyComponent } from '../privacy.component';

@Component({
  selector: 'app-privacy-es',
  standalone: true,
  imports: [NgIf, CommonModule, ScrollAnimationDirective],
  templateUrl: './privacy-es.component.html',
  styleUrl: './privacy-es.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyEsComponent {
  constructor() {}

  @Input() parent!: PrivacyComponent;
}