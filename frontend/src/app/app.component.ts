import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { ICustomerModel } from './interfaces/ICustomerModelAngular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DineEasy'; 
  restaurantImage = '../assets/images/DineEasy.jpg';
  profileData: ICustomerModel;
  showProfileForm = false;
  
  showOptionsFlag: boolean = false;

  constructor(public authenticationService: AuthenticationService, private router: Router) {
  }
 
  // Shows the dropdown options
  showOptions() {
    this.showOptionsFlag = true;
  }

  // Hides the dropdown options
  hideOptions(event: MouseEvent) {
    setTimeout(() => {
      this.showOptionsFlag = false;
    }, 3000);
  }

  // Toggles the show options flag to appear and disappear drop-down menu on mouse events
  toggleOptions() {
    this.showOptionsFlag = !this.showOptionsFlag;
  }

  // Redirects to the profile information if profile option selected
  profile()
  {
    this.router.navigateByUrl('/profile/'+ this.authenticationService.user.userId);
  }

  // Invokes to login functionality provided by authentication service
  login() {
    this.authenticationService.login();
  }

  // Invokes the logout functionality provided by authentication service
  logout() {
    this.authenticationService.logout().subscribe((response) => {
          console.log(response)
          window.location.href = '/';
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
