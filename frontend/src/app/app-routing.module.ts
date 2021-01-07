import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGetComponent } from './admin/admin-get/admin-get.component';


const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', data: { roles: ['SuperAdmin'] }, canActivate: [AuthGuard], component: AdminGetComponent,
    children: [
      { path: '', component: AdminGetComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
