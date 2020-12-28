import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GetPostComponent } from './Posts/get-post/get-post.component';
import { DetailsPostComponent } from './Posts/details-post/details-post.component';
import { CreatePostComponent } from './Posts/create-post/create-post.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGetComponent } from './Posts/admin-get/admin-get.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'signup',component:SignupComponent},
  { path: '', component: HomepageComponent },
  { path: 'list', component: GetPostComponent },
  {
    path: 'admin',canActivate: [AuthGuard], component: AdminGetComponent,
    children: [
      { path: '', component: AdminGetComponent }
    ]
  },
  { path: 'details/:ID', component: DetailsPostComponent },
  { path: 'create', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'edit/:ID', component: CreatePostComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
