import { Injectable } from '@angular/core';
import {AuthenticationServiceService} from '../../auth/services/authentication-service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Staff} from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
  public staffBaseUrl: string;
  constructor(private authenticationService: AuthenticationServiceService,
              private http: HttpClient) {
  this.staffBaseUrl = this.authenticationService.baseUrl+ 'staff/';

  }

  getAvailableStaff(): Observable<Staff[]>{
    return this.http.get<Staff[]>(this.staffBaseUrl);
  }
}
