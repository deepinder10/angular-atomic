import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    /**
     * Contact Form Group
     */
    this.contactForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onFormSubmit() {
    /**
     * Data is fetched and returned as an object, can be used for sending in API.
     *  After that form is cleared.
     */
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}
