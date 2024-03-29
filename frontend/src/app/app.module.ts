import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestaurantService } from './service/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './service/menu.service';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuItemsService } from './service/menu-items.service';
import { OrderService } from './service/order.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantOverviewComponent } from './restaurant-overview/restaurant-overview.component';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MenuItemsComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantOverviewComponent,
    ReservationComponent,
    OrderComponent,
    OrderItemsComponent,
    InvoiceComponent,
    ProfileComponent,
    MyOrdersComponent,
    SuccessDialogComponent,
    ReservationComponent,
    ReservationDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [RestaurantService, MenuService, MenuItemsService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
