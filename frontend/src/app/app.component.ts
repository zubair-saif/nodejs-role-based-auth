import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '';
  items: MenuItem[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.autoAuthUser();

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        routerLink: 'home'
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'about'
      },
      {
        label: 'Blog',
        icon: 'pi pi-fw pi-user',
        routerLink: 'blog'
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-calendar',
        routerLink: 'contact'
      },
    ];
  }
}
