import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Ruta para la vista Home
  { path: 'login', component: LoginComponent }, // Ruta para la vista de login
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirige la ruta raíz al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
