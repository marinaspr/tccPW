import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { SobreComponent } from './sobre/sobre.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'metas', component: FuncionalidadesComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: 'login' }
];
