import { NgModule } from '@angular/core';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import {MonthYearCalendarComponent} from './components/month-year-calendar/month-year-calendar.component';
import {MatSelectComponent} from './components/mat-select/mat-select.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [FormsModule,
    SidebarComponent, TopbarComponent, MonthYearCalendarComponent, MatSelectComponent
  ]
})
export class SharedModule { }
