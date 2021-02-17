import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private authSrv: AuthService,
    private router: Router
  ) {
    this.loginForm = this.createForm();
  }

  createForm(): FormGroup {
    const obj = {
      email    : ['', [Validators.required]],
      password : ['', [Validators.required]]
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
      this.router.navigate(['/admin/principal']);

    }, err => {
      console.warn({err});
    })

  }

  protected() {
    console.log('login');
    this.router.navigate(['/admin/principal']);
    this.authSrv.protected().subscribe((res: any) => {
      console.log('protected', res);
    }, (err: any) => {
      console.log('err', err);
    });
  }

  goToSignup() {
    console.log('goToSignup');
    this.router.navigate(['/auth/register']);
  }
}
