import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {TopbarComponent} from './shared/components/topbar/topbar.component';
import {CommonModule} from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenavContainer, MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [CommonModule,SidebarComponent, TopbarComponent, RouterOutlet, MatToolbar, MatSidenavModule, MatSidenavContent,MatSidenavContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.replace('/', ' > ');
      }
    });
  }}
