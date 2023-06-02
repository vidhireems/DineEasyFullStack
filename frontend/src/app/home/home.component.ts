import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Observable, of } from 'rxjs';
import { IUserModel } from '../interfaces/IUserModelAngular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private authenticationService: AuthenticationService, private router:Router) {
    if(!this.authenticationService.isLoggingOut)
      this.authenticationService.checkAuthStatus();
  }
}
