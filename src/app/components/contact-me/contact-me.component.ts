import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Aos from 'aos';
import emailjs from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  } = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    Aos.init();
  }

  sendEmail(f: NgForm) {
    // Check if the form is valid
    if (!f.valid) {
      this.toastr.error('Please fill out all required fields correctly.');
      return; // Exit the function if the form is not valid
    }

    console.log(f);
    console.log(this.contact);

    emailjs
      .send(
        'service_e8sipdc',
        'template_d8vk1i8',
        this.contact,
        'YnUJvdC42tJWQvJrb'
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          this.toastr.success('Your message has been sent!');
          f.reset(); // Optionally reset the form
        },
        (error) => {
          console.error('Error sending email:', error);
          this.toastr.error('Failed to send the email. Please try again later.'); // Notify the user of the error
        }
      );
  }

}
