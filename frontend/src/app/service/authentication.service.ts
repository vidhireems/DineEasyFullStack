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
  customer: ICustomerModel[];
  name: String;
  hostUrl: String = environment.hostUrl;
  constructor(private http: HttpClient, private router: Router) {}

  setAuthenticated(flag: boolean): void {
    this.isLoggedIn = flag;
  }

  checkAuthStatus() {
    this.http.get<any>(this.hostUrl + 'checkAuth').subscribe(
      (response) => {
        if (response.authenticated === true) {
          console.log('here')
          this.isLoggedIn = true;
          this.user = response.user;
          console.log(this.user);
  
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
  
  getCustomerInfo(userId: String) {
    return this.http.get<ICustomerModel[]>(this.hostUrl + 'user/' + userId);
  }
  

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login() {
    this.isLoggingOut = false;
    window.location.href = '/auth/google';
  }

  logout(): Observable<any>  {
    this.isLoggedIn = false;
    this.isLoggingOut = true;
    console.log("Calling logout in Authentication Service URL: " + this.hostUrl)
    return this.http.post( this.hostUrl + 'logout', {});
  }

  updateProfile(profileData: any) {
    return this.http.put(this.hostUrl + 'updateProfile/' + this.user.userId, profileData);
  }

}
