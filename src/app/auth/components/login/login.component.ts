import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface ILoginForm {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.createForm();
  }

  createForm(): FormGroup {
    const obj = {
      email: [''],
      password: ['']
    }
    return this.fb.group(obj);
  }

  ngOnInit(): void { }

  handleLogin() {
    const form = this.loginForm.value as ILoginForm;

    console.log({form})
  }
}
