import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationRequest} from '../models/authentication-request';
import {CurrentUser} from '../../user-management/models/current-user';
import {EmitterServiceService} from '../../shared/services/emitter-service.service';

export const AUTHENTICATED_USER = 'authenticatedUser';
@Injectable({providedIn: 'root'})
export class AuthenticationServiceService {


  public local = 'http://localhost:8080/rest/';

  public remote = '/rest/';

  public baseUrl = this.local;

  public authenticationUrl = this.baseUrl + 'auth';

  public authenticationHeaders = new HttpHeaders({'Content-Type': 'application/json', 'X-Skip-Interceptor': ''});
  public currentUser: Observable<any>;

  public currentUserUrl = this.baseUrl + 'users/currentUser';
  private currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem(AUTHENTICATED_USER));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserName(): any {
    return this.currentUserSubject.value;
  }

  login(authenticationRequest: AuthenticationRequest): Observable<any> {
    return this.http.post<any>(this.authenticationUrl, JSON.stringify({
      username: authenticationRequest.username,
      password: authenticationRequest.password
    }), {headers: this.authenticationHeaders})
      .pipe(
        tap(response => {
            // login successful if there's a jwt token in the response
            const token = response.token;
            if (token) {
              // store username and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem(
                'currentIdentity',
                JSON.stringify({username: authenticationRequest.username, token: token})
              );
              this.loadCurrentUserFromRemoteServer();
            } else {
              this.logout();
            }
          }
        ),
        catchError(this.handleError<any>())
      );
  }

  logout(): void {
    this.router.navigate(['login']);
    this.clearStorage();
  }

  clearStorage() {
    localStorage.removeItem('currentIdentity');
    localStorage.removeItem('currentUser');
  }

  loadCurrentUserFromRemoteServer() {
    this.getCurrentUser().subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        EmitterServiceService.get('Authorized').emit(true);
        this.router.navigate(['dashboard']);
      }, err => {
        console.log('An error occurred while getting authenticated user.' + err);
      });
  }

  getCurrentUser(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(this.currentUserUrl);
  }

  loadCurrentUserFromLocalStorage(): CurrentUser | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead of backend side
      return of(result as T);
    };
  }


}
