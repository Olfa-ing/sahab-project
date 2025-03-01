import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MonthYearCalendarComponent} from '../../shared/components/month-year-calendar/month-year-calendar.component';
import {MatSelectComponent} from '../../shared/components/mat-select/mat-select.component';
import {StaffServiceService} from '../../staff/services/staff-service.service';
import {Staff} from '../../staff/models/staff';
import {SelectItem} from 'primeng/api';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatListModule, CommonModule, MatFormFieldModule, MatDatepickerModule, MonthYearCalendarComponent, MatSelectComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit{
  staffList: Staff[] = [];
  regionList: SelectItem[] = [];

  // constructor(private staffService: StaffServiceService) {
  // }

  ngOnInit() {
    this.getRegionList();
  }

  getRegionList(){
  }
  filter(){
    //  this.staffService.getAvailableStaff().subscribe(
    // res =>{
    //          this.staffList = res;
    //      }, error => {
    //          console.log('An error occurred while loading staff list')
    //      }
    //    );
  }
}
