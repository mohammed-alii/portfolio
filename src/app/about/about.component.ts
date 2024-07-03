import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  messageForm: FormGroup;
  showMessageSent: boolean;
  constructor(private fb: FormBuilder) {
    this.showMessageSent = false
    this.messageForm = this.fb.group({
      from_name: ['', Validators.required],
      form_email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }

  sendEmail(): void {
    emailjs
      .send(
        'service_tj8x5qm',
        'template_c6egu4m',
        this.messageForm.value,
        'HR9Ol8UyL6QxtiGec'
      )
      .then(
        (response: EmailJSResponseStatus) => {
             this.showMessageSent = true
             this.messageForm.controls['from_name'].setValue(null)
             this.messageForm.controls['form_email'].setValue(null)
             this.messageForm.controls['message'].setValue(null)
          // console.log('SUCCESS!', response.status, response.text);

        },
        (err) => {
          // console.error('FAILED...', err);
        }
      );
  }
}
