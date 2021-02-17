import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isExpanded : boolean = false;
  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  handleLogout() {
    console.log('holaaaaa');
    this.authSrv.logout();
    this.router.navigate(['/home']);
  }
}
