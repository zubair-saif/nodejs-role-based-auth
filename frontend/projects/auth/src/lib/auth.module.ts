import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { UserGridComponent } from './user-grid/user-grid.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent, 
    UserGridComponent, SidebarComponent, NavbarsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TableModule,
    ToastModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SidebarModule
  ],
  exports: [AuthComponent,
    LoginComponent,
    SignupComponent,
    UserGridComponent,
    NavbarsComponent,
    SidebarComponent
  ]
})
export class AuthModule { }
