import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollService } from '../../scroll.service';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { LanguageService } from '../../language.service';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  currentLanguage: string = 'en';

  constructor(public scrollService: ScrollService, private router: Router, private themeService: ThemeService, private languageService: LanguageService) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Subscribes to the current language from the LanguageService and updates `currentLanguage`
   * whenever a new language is selected.
   *
   * @returns {void}
   */
  ngOnInit(): void {
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  /**
   * Retrieves the translation for a specified key based on the current language.
   *
   * @param {string} key - The key for the translation string.
   * @returns {string} - The translated string.
   */
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  /**
   * Checks the current theme mode status.
   *
   * @returns {boolean} - Returns true if dark mode is active, otherwise false.
   */
  checkDarkMode(): boolean {
    return this.themeService.getDarkModeStatus();
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    language: ''
  }

  termsAccepted: boolean = false;
  mailTest:boolean = true;
  showPopup: boolean = false;

  post = {
    endPoint: 'https://lukasbusch.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

    /**
   * Handles the submission of the contact form.
   * Validates the form, updates the contact data with the current language, and sends
   * the data via an HTTP POST request if all conditions are met.
   *
   * @param {NgForm} contactForm - The contact form to be submitted.
   * @returns {void}
   */
  onSubmit(contactForm: NgForm): void {
    this.contactData.language = this.currentLanguage;

    if(!contactForm.valid || this.contactData.message.length < 8) {
      contactForm.form.markAllAsTouched();
      return;
    }

    if(!this.termsAccepted) return;

    // Proceed with sending the email via HTTP POST
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          console.log("Form submitted successfully", response);
          contactForm.resetForm();
          this.messageSent();
        },
        error: (error) => {
          console.error("Form submission error", error);
        },
        complete: () => console.info('Form submission complete'),
      });
  }

  /**
   * Displays a success popup after the form submission and fades it out after a delay.
   *
   * @returns {void}
   */
  messageSent(): void {
    this.showPopup = true;

    setTimeout(() => {
      const popupElement = document.querySelector('#popup-container');
      if (popupElement) popupElement.classList.add('fade-out');

      setTimeout(() => {
        this.showPopup = false;
      }, 2000);
    }, 2000);
  }

  /**
   * Navigates to the privacy page when called.
   *
   * @returns {void}
   */
  openPrivacy(): void {
    this.router.navigate(['/privacy']);
  }
}