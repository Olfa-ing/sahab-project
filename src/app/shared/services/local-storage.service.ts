import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private previousUrlSubject = new BehaviorSubject<string | null>(null);

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // const currentUrl = event.url;
        const previousUrl = localStorage.getItem('previousUrl');
        this.previousUrlSubject.next(previousUrl);
        // localStorage.setItem('previousUrl', currentUrl);
      }
    });
  }

  // Method to get the previous URL
  getPreviousUrl(): string | null {
    return localStorage.getItem('previousUrl');
  }
  setPreviousUrl(path: string): void{
    return localStorage.setItem('previousUrl', path )
  }

  // Method to get the current previous URL from BehaviorSubject
  getPreviousUrlAsObservable() {
    return this.previousUrlSubject.asObservable();
  }

  // Optionally, you can remove the previous URL if needed
  clearPreviousUrl() {
    localStorage.removeItem('previousUrl');
    this.previousUrlSubject.next(null);
  }
}
