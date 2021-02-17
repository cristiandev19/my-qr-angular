import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.registerform = this.createForm();
  }

  createForm(): FormGroup {
    const obj = {
      names     : ['', [Validators.required]],
      lastNames : ['', [Validators.required]],
      email     : ['', [Validators.required]],
      password  : ['', [Validators.required]]
    }
    return this.fb.group(obj);
  }

  ngOnInit(): void { }

  handleSignup() {
  }
}
