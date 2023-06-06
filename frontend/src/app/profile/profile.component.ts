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
  isEditable: { [key: string]: boolean } = {};

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.initializeCustomerInfo();
  }

  // Initalizes the default customer information to be shown on the form
  initializeCustomerInfo() {
    const customer = this.authenticationService.customer;
    
    this.customerInfo = {
      name: customer.name,
      profilePic: customer.profilePic,
      email: customer.email,
      contactNumber: customer.contactNumber,
      address: customer.address,
      customerType: customer.customerType,
    };
  }

  // Checks if the same email is provided as user who is logged-in
  isEmailSameAsRegisteredUser()
  {
    return (this.customerInfo.email === this.authenticationService.user.email);
  }

  // Toggles the edit flags to switch between read-only and edit mode.
  toggleEdit(field:string, editMode: boolean): void {
    this.isEditable[field] = editMode;
  }

  // Exit edit mode when click anywhere outside text boxes
  exitEditMode()
  {
    for (const field in this.isEditable) {
      this.isEditable[field] = false;
    }
  }

  // Saves the profile if any change is made
  SaveProfile()
  {
    if(this.customerInfo === this.authenticationService.customer)
    {
      console.log('No change in the profile');
      this.router.navigateByUrl('/');
    }
    else
    {
      this.authenticationService.updateProfile(this.customerInfo).subscribe(
        (response: any) => {
          console.log('Profile updated successfully');
          this.router.navigateByUrl('/');
        },
        (error: any) => {
          console.error('Error updating profile:', error);
        }
      )
    }
    
  }

  CloseProfile()
  {
    this.router.navigateByUrl('/');
  }

  
}
