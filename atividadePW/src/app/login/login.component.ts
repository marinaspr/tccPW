import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login:', this.user, this.password);
    this.router.navigate(['/home']);
  }
}
