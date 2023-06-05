import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { IOrderModel } from '../interfaces/IOrderModelAngular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  userOrders: IOrderModel[];
  private subscription: Subscription;

  constructor( private orderService: OrderService){}

  ngOnInit()
  {
    this.getOrdersForCurrentUser();
  }

  //get all tehe orders of current user
  getOrdersForCurrentUser() {
    this.subscription = this.orderService.getAllOrderOfUser().subscribe((data: IOrderModel[]) => {
        this.userOrders = data;
      },
      (error) => {
        console.log('Error retrieving user orders:', error);
      }
    );
  }  
}
