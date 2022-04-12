import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClassListComponent } from './class-list/class-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'modulos', pathMatch: 'full' },
  { path: 'modulos', component: HomeComponent },
  { path: 'modulos/:id/aulas', component: ClassListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
