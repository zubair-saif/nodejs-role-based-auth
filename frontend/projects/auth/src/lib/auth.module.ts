import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { UserGridComponent } from './user-grid/user-grid.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    UserGridComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TableModule,
    ToastModule,
    DropdownModule,

  ],
  exports: [AuthComponent,
    LoginComponent,
    SignupComponent,
    UserGridComponent,
  ]
})
export class AuthModule { }
