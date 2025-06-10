import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    // Aqui você pode adicionar lógica real de autenticação
    console.log('Login:', this.user, this.password);
    this.router.navigate(['/home']);
  }
}
