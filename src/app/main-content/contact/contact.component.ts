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
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };




  onSubmit(contactForm: NgForm) {
    // First, handle the validation from the first function
    if (!contactForm.valid || this.contactData.message.length < 8) {
      contactForm.form.markAllAsTouched(); // Mark all fields as touched so errors are visible
      return; // Prevent form submission if invalid
    }
  
    // Check if the terms checkbox is accepted
    if (!this.termsAccepted) {
      console.log('You must agree to the terms before submitting.');
      return; // Prevent form submission if the terms are not accepted
    }
  
    // Now proceed with the logic from the second function
    if (contactForm.submitted && contactForm.form.valid && !this.mailTest) {
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
    } else if (contactForm.submitted && contactForm.form.valid && this.mailTest) {
      contactForm.resetForm(); // Reset the form for the alternate mailTest condition
    }
  }  




  // ++++++++++++++++++++++++++++++++++++++++++++++++
  // NEW FUNCTION WITH HTTP AND CORRECT VALIDATION
  // ++++++++++++++++++++++++++++++++++++++++++++++++

  // onSubmit(contactForm: NgForm) {
  //   // First, handle the validation from the first function
  //   if(!contactForm.valid || this.contactData.message.length < 8) {
  //     contactForm.form.markAllAsTouched(); // Mark all fields as touched so errors are visible
  //     return; // Prevent form submission if invalid
  //   }
  
  //   // Now proceed with the logic from the second function
  //   if(contactForm.submitted && contactForm.form.valid && !this.mailTest) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response) => {
  //           console.log("Form submitted successfully", response);
  //           contactForm.resetForm(); // Reset the form after successful submission
  //         },
  //         error: (error) => {
  //           console.error("Form submission error", error);
  //         },
  //         complete: () => console.info('Form submission complete'),
  //       });
  //   } else if(contactForm.submitted && contactForm.form.valid && this.mailTest) {
  //     contactForm.resetForm(); // Reset the form for the alternate mailTest condition
  //   }
  // }
}