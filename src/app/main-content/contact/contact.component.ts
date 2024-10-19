import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  termsAccepted: boolean = false;
  mailTest:boolean = true;

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
    // Validate form fields
    if (!contactForm.valid || this.contactData.message.length < 8) {
      contactForm.form.markAllAsTouched(); // Mark all fields as touched so errors are visible
      return;
    }

    // Ensure terms are accepted
    if (!this.termsAccepted) {
      console.error('You must agree to the terms.');
      return;
    }

    // Proceed with sending the email via HTTP POST
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          console.log("Form submitted successfully", response);
          contactForm.resetForm(); // Reset the form after successful submission
        },
        error: (error) => {
          console.error("Form submission error", error);
        },
        complete: () => console.info('Form submission complete'),
      });
  }
}