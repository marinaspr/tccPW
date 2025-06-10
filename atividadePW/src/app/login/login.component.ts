import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login : FormGroup;
lista_cadastro = [];

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.email, Validators.required]],
    });
  }

  onSubmit() {
      alert('Cadastro efetuado com sucesso');
  }

}
