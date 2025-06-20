import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { SobreComponent } from '../sobre/sobre.component';
import { MetasComponent } from '../funcionalidades/funcionalidades.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'metas', component: MetasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
