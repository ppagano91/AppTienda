import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  loading = false;

  formData = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [0, [Validators.max(99), Validators.min(18)]],
    gender: [''],
    country: [''],
    phone: [''],
    mailingList: [],
    // address: this.fb.group({
    //   street: [''],
    //   number: [''],
    //   zipCode: [''],
    // }),
  });
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  userName() {
    return this.formData.get('name');
  }

  userEmail() {
    return this.formData.get('email');
  }

  submitForm() {
    // console.log(`${this.name} ${this.lastName}`);
    if (this.formData.valid) {
      this.loading = true;
      console.log(this.formData.value);
      setTimeout(() => {
        this.loading = false;
        this._snackBar.open('Formulario enviado con éxito', 'x', {
          duration: 3000,
        });
      }, 3000);
    } else {
      alert('Faltan datos en el formulario');
    }
  }

  resetForm() {
    this.formData.reset;
  }
  // userAddress() {
  //   return this.formData.get('address');
  // }

  // userStreet() {
  //   return this.userAddress()?.get('street');
  // }

  // resetAddress() {
  //   this.userAddress()?.setValue({
  //     street: 'Buenos Aires',
  //     number: '1234',
  //     zipCode: '5000',
  //   });
  // }
}
