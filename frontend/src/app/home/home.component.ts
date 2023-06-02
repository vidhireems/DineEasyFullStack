import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Observable, of } from 'rxjs';
import { IUserModel } from '../interfaces/IUserModelAngular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.checkAuthStatus();
  }
}
