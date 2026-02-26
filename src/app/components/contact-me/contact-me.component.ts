import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    time?: string;
  } = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  isSending = false;

  constructor(private toastr: ToastrService) {}

  sendEmail(f: NgForm) {
    // Check if the form is valid
    if (!f.valid) {
      this.toastr.error('Please fill out all required fields correctly.');
      return; // Exit the function if the form is not valid
    }

    this.isSending = true;

    console.log(f);
    console.log(this.contact);

    const payload = {
      ...this.contact,
      time: new Date().toLocaleString('fr-FR'),
    };

    emailjs
      .send(
        'service_60ty70s',
        'template_d8vk1i8',
        payload,
        'YnUJvdC42tJWQvJrb'
      )
      .then(
        (response) => {
          this.toastr.success('Your message has been sent!');
          f.reset(); // Optionally reset the form
          this.isSending = false;
        },
        (error) => {
          console.error('Error sending email:', error);
          this.toastr.error('Failed to send the email. Please try again later.'); // Notify the user of the error
          this.isSending = false;
        }
      );
  }

}
