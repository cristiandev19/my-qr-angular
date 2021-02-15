import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ILogin } from '../../models/auth.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService
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
    const form = this.loginForm.value as ILogin;

    console.log({form})
    // authSrv
    this.authSrv.emailLogin(form).subscribe((res: any) => {
      console.log('res', res);
      this.authSrv.setLocalStorage(res);
    }, err => {
      console.warn({err});
    })

  }

  protected() {

  }
}
