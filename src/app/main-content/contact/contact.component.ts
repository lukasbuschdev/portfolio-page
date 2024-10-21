import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollService } from '../../scroll.service';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(public scrollService: ScrollService, private router: Router, private themeService: ThemeService) {}

  checkDarkMode() {
    return this.themeService.getDarkModeStatus();
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
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

  onSubmit(contactForm: NgForm) {
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

  messageSent() {
    this.showPopup = true;

    setTimeout(() => {
      const popupElement = document.querySelector('#popup-container');
      if(popupElement) popupElement.classList.add('fade-out');
      
      setTimeout(() => {
        this.showPopup = false;
      }, 2000);
    }, 2000);
  }

  openPrivacy() {
    this.router.navigate(['/privacy']);
  }
}