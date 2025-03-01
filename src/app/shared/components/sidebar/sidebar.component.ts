import {Component, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, } from '@angular/material/sidenav';
import {Router} from '@angular/router';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenav, MatNavList, MatSidenavContainer, MatCardModule, MatListItem, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  constructor(private router: Router){
  }

  ngOnInit() {

  }

  goToPath(path: string){
    this.router.navigate([path]).then();
  }

}
