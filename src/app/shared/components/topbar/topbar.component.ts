import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Location as Loc} from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
    imports: [MatToolbar, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{
  currentUserFullName = 'Olfa Hamroun';
  routePath = '';
  parentPath='';
  homeModuleList = ['/dashboard', '/reports', '/overview', '/planning', '/requests'];

  constructor(private router: Router,
              private _loc: Loc) {
  }

  ngOnInit() {
    this.getCurrentUser();
    this.getCurrenPath();
  }

  getCurrenPath(){
    this.router.events.subscribe(() => {
      this.routePath = this.router.url;
      if(this.homeModuleList.includes(this.routePath)){
        this.parentPath='Home'
      } else {
        this.parentPath='Configurations';
      }
    });
  }

  returnBack(){
    this._loc.back();
  }
  displayNotifications(){

  }
  displayMessages(){

  }
  getCurrentUser(){
    // this.currentUserFullName = this.authenticationService.loadCurrentUserFromLocalStorage()?.fullName || '';
    // return this.currentUserFullName;
  }
}
