import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservationId: string;
  tableNumber: number;
  resId: string;

  constructor(private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.reservationId = params['reservationId'];
      this.tableNumber = +params['tableNumber'];
      this.resId =params['resId'];
    });
  }

  goToOrder() {
    this.router.navigate(['../order'], { relativeTo: this.route });
  }
}