import { Component } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { IReservationModelAngular } from '../interfaces/IReservationModelAngular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  partySize: number;
  date: string;
  time: string;
  phone: string;
  reservationId: string;
  tableNumber: number;
  isReservationConfirmed: boolean = false;

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService, 

  ) {}

  createReservation() {
    const user = this.authenticationService.customer;
    const userID = user.customerId
    console.log(userID)
    const reservation: IReservationModelAngular = {
      peopleCount: parseInt(this.partySize.toString()),
      date: this.date,
      time: this.time,
      phoneNumber: this.phone,
      reservationId: '',
      customerId: parseInt(userID.toString()),
      resId: this.route.parent?.snapshot.paramMap.get('resId')!,
      status: 'pending',
      tableNumber: Math.floor(Math.random() * 20) + 1, // Generate a random number between 1 and 20
    };

    this.reservationService.createReservation(reservation).subscribe(
      (response) => {
        this.reservationId = response.reservationId;
        const tableNumber = +response.tableNumber;
        if (!isNaN(tableNumber)) {
          this.tableNumber = tableNumber;
          this.isReservationConfirmed = true;
          console.log('Response:', response);
          console.log(userID)
          this.router.navigate(['../reservation-details'], {
            relativeTo: this.route,
            queryParams: {
              reservationId: this.reservationId,
              tableNumber: this.tableNumber,
            },
          });
        } else {
          console.error('Invalid table number');
        }
      },
      (error) => {
        console.log('Error:', error);
        console.error('Failed to create reservation:', error);
      }
    );
  }
}
