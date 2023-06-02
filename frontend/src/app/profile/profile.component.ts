import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { ICustomerModel } from '../interfaces/ICustomerModelAngular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  authenticated:any;
  customerInfo: any = {};

  constructor(public authenticationService: AuthenticationService, private router: Router) {
    authenticationService.checkAuthStatus();
  }

  isEmailSameAsLoggedInUser()
  {
    return (this.customerInfo.email === this.authenticationService.user.email);
  }

  SaveProfile()
  {
    this.authenticationService.updateProfile(this.customerInfo).subscribe(
      (response: any) => {
        console.log('Profile updated successfully:', response);
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        console.error('Error updating profile:', error);
      }
    )
  }

  CloseProfile()
  {
    this.router.navigateByUrl('/');
  }
}
