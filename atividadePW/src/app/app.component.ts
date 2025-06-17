import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FuncionalidadesComponent } from "./funcionalidades/funcionalidades.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FuncionalidadesComponent, LoginComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividadePW';
}
