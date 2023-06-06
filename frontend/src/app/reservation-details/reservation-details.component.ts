import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservationId: string;
  date: string;
  time: string;
  tableNumber: number;
  resId: string;

  constructor(private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.reservationId = params['reservationId'];
      this.tableNumber = +params['tableNumber'];
      this.date = params['date'];
      this.time = params['time'];
      this.resId =params['resId'];
    });
  }

  goToOrder() {
    this.router.navigate(['../order'], { relativeTo: this.route });
  }
}