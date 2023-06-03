import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserModel } from '../interfaces/IUserModelAngular';
import { environment } from '../../environments/environment';
import { ICustomerModel } from '../interfaces/ICustomerModelAngular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private isLoggedIn = false;
  public isLoggingOut = false;
  public user: IUserModel;
  public customer: ICustomerModel;
  name: String;
  hostUrl: String = environment.hostUrl;
  constructor(private http: HttpClient, private router: Router) {}

  // Used to set the isLoggenIn flag
  setAuthenticated(flag: boolean): void {
    this.isLoggedIn = flag;
  }

  // Checks if the current user is authenticated and retrieves the users information
  checkAuthStatus() {
    this.http.get<any>(this.hostUrl + 'checkAuth').subscribe(
      (response) => {
        if (response.authenticated === true) {
          this.isLoggedIn = true;
          this.user = response.user;
          this.getCustomerInfo(this.user.userId).subscribe(
            (data) => {
              this.customer = data;
            },
            (error) => {
              console.error('Error:', error);
            }
          );
        } else {
          this.isLoggedIn = false;
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  
  // Gets the customer information
  getCustomerInfo(userId: String) {
    return this.http.get<ICustomerModel>(this.hostUrl + 'user/' + userId);
  }
  
  // Checks where the current user is logged-in
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Updated the customer profile
  updateProfile(profileData: any) {
    return this.http.put(this.hostUrl + 'profile/' + this.user.userId, profileData);
  }

  // Redirect to Google OAuth callback API for login
  login() {
    this.isLoggingOut = false;
    window.location.href = '/auth/google';
  }

  // Invoke the logout API to destroy the current session
  logout(): Observable<any>  {
    this.isLoggedIn = false;
    this.isLoggingOut = true;
    console.log("Calling logout in Authentication Service URL: " + this.hostUrl)
    return this.http.post( this.hostUrl + 'logout', {});
  }

}
