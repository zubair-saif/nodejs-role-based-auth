import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    NavbarsComponent
  ],
  imports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    CommonModule
  ],
  exports: [
    LayoutComponent,
    SidebarComponent,
    NavbarsComponent
  ]
})
export class LayoutModule { }
