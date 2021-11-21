import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formData = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [0, [Validators.max(99), Validators.min(18)]],
    mailingList: [],
    address: this.fb.group({
      street: [''],
      number: [''],
      zipCode: [''],
    }),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  userName() {
    return this.formData.get('name');
  }

  userAddress() {
    return this.formData.get('address');
  }

  userEmail() {
    return this.formData.get('email');
  }

  userStreet() {
    return this.userAddress()?.get('street');
  }

  submitForm() {
    // console.log(`${this.name} ${this.lastName}`);
    if (this.formData.valid) {
      console.log(this.formData.get('name'));
    } else {
      alert('Faltan datos en el formulario');
    }
  }

  resetAddress() {
    this.userAddress()?.setValue({
      street: 'Buenos Aires',
      number: '1234',
      zipCode: '5000',
    });
  }
}
