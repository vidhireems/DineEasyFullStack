import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserModel } from '../interfaces/IUserModelAngular';
import { environment } from '../../environments/environment';
import { ICustomerModel } from '../interfaces/ICustomerModelAngular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private isLoggedIn = false;
  public user: IUserModel;
  customer: ICustomerModel[];
  name: String;
  hostUrl: String = environment.hostUrl;
  constructor(private http: HttpClient, private router: Router) {}

  setAuthenticated(): void {
    this.isLoggedIn = true;
  }

  checkAuthStatus() {
    this.http.get<any>(this.hostUrl + 'checkAuth').subscribe(
      (response) => {
        if (response.authenticated) {
          this.isLoggedIn = true;
          this.user = response.user;
          console.log(this.user);
  
          this.getCustomerInfo(this.user.userId).subscribe(
            (data) => {
              this.customer = data; // Assuming the response is a single customer object
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
    window.location.href = '/auth/google';
  }

  logout() {
    this.isLoggedIn = false;
    this.http.post( this.hostUrl + 'logout', {}).subscribe(
      (response) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  updateProfile(profileData: any) {
    return this.http.put(this.hostUrl + 'updateProfile/' + this.user.userId, profileData);
  }

}
