import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formData = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(0),
    mailingList: new FormControl(true),
    address: new FormGroup({
      street: new FormControl(''),
      number: new FormControl(''),
      zipCode: new FormControl(''),
    }),
  });
  constructor() {}

  ngOnInit(): void {}

  userName() {
    return this.formData.get('name');
  }

  userAddress() {
    return this.formData.get('address');
  }

  userStreet() {
    return this.userAddress()?.get('street');
  }

  submitForm() {
    // console.log(`${this.name} ${this.lastName}`);
    console.log(this.formData.get('name'));
  }
}
