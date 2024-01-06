import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  submitRegistrationForm() {
    console.log(this.registrationForm.get('firstname'));
  }
  constructor(private http: HttpClient) {}
  registrationForm!: FormGroup;

  states: any[] = [];
  ngOnInit(): void {
    // Json Asset 'List of States'
    this.http.get<any>('assets/states.json').subscribe((data) => {
      this.states = data;
    });
    // Form Group
    this.registrationForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        region: new FormControl('', Validators.required),
        states: new FormControl('', Validators.required),
        zipcode: new FormControl('', Validators.required),
      }),
    });
  }
}
