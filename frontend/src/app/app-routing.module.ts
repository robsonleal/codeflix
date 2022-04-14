import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ListModuleDetailComponent } from './list-detail/list-module-detail.component';
import { ListClassDetailComponent } from './list-detail/list-class-detail.component';
import { AddComponent } from './add-edit/add.component';
import { EditComponent } from './add-edit/edit.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'modulos', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'modulos/:id/aulas', component: ClassListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //private urls
  { path: 'modulos', component: ListModuleDetailComponent },
  { path: 'aulas', component: ListClassDetailComponent },
  { path: 'editar', component: EditComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
