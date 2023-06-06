"use strict";
(self["webpackChunkDineEasy_fe"] = self["webpackChunkDineEasy_fe"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items/menu-items.component */ 49);
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurants/restaurants.component */ 3214);
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restaurant/restaurant.component */ 8071);
/* harmony import */ var _restaurant_overview_restaurant_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurant-overview/restaurant-overview.component */ 1301);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order.component */ 3779);
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-items/order-items.component */ 6945);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice/invoice.component */ 1140);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reservation/reservation.component */ 1674);
/* harmony import */ var _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reservation-details/reservation-details.component */ 3935);
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-orders/my-orders.component */ 2739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 6839);
















const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'restaurants',
  component: _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_3__.RestaurantsComponent
}, {
  path: 'profile/:customerId',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent
}, {
  path: 'myorders/',
  component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_12__.MyOrdersComponent
}, {
  path: 'restaurants/:resId',
  component: _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_4__.RestaurantComponent
}, {
  path: "",
  redirectTo: "/home",
  pathMatch: "full"
}, {
  path: "home",
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: "restaurants",
  component: _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_3__.RestaurantsComponent
}, {
  path: "profile/:customerId",
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent
}, {
  path: "restaurants/:resId",
  component: _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_4__.RestaurantComponent,
  children: [{
    path: "",
    redirectTo: "overview",
    pathMatch: "full"
  }, {
    path: "overview",
    component: _restaurant_overview_restaurant_overview_component__WEBPACK_IMPORTED_MODULE_5__.RestaurantOverviewComponent
  }, {
    path: "menu",
    component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent
  }, {
    path: "menu/:menuId/items",
    component: _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_2__.MenuItemsComponent
  }, {
    path: "order",
    component: _order_order_component__WEBPACK_IMPORTED_MODULE_6__.OrderComponent
  }, {
    path: "menu/:menuId/items/order",
    component: _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_7__.OrderItemsComponent
  }, {
    path: "reservation",
    component: _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_10__.ReservationComponent
  }, {
    path: "reservation-details",
    component: _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_11__.ReservationDetailsComponent
  }]
}, {
  path: "invoice",
  component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__.InvoiceComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/authentication.service */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);





function AppComponent_ng_container_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_14_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.MyOrders());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_14_div_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.profile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_14_div_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_14_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.toggleOptions());
    })("mouseenter", function AppComponent_ng_container_14_Template_img_mouseenter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.showOptions());
    })("mouseleave", function AppComponent_ng_container_14_Template_img_mouseleave_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.hideOptions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_ng_container_14_div_4_Template, 7, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Welcome, ", ctx_r0.authenticationService.customer.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.authenticationService.customer.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showOptionsFlag);
  }
}
function AppComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_template_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.title = 'DineEasy';
    this.restaurantImage = '../assets/images/DineEasy.jpg';
    this.showProfileForm = false;
    this.showOptionsFlag = false;
  }
  // Shows the dropdown options
  showOptions() {
    this.showOptionsFlag = true;
  }
  // Hides the dropdown options
  hideOptions(event) {
    setTimeout(() => {
      this.showOptionsFlag = false;
    }, 3000);
  }
  // Toggles the show options flag to appear and disappear drop-down menu on mouse events
  toggleOptions() {
    this.showOptionsFlag = !this.showOptionsFlag;
  }
  // Redirects to the profile information if profile option selected
  MyOrders() {
    this.router.navigateByUrl('/myorders/');
  }
  // Redirects to the profile information if profile option selected
  profile() {
    this.router.navigateByUrl('/profile/' + this.authenticationService.user.userId);
  }
  // Invokes to login functionality provided by authentication service
  login() {
    this.authenticationService.login();
  }
  // Invokes the logout functionality provided by authentication service
  logout() {
    this.authenticationService.logout().subscribe(response => {
      console.log(response);
      window.location.href = '/';
    }, error => {
      console.error('Error:', error);
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 23,
  vars: 2,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], [1, "navbar", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "dine-easy"], [1, "d-flex", "align-items-start"], [1, "d-flex", "buttons"], [4, "ngIf", "ngIfElse"], ["loginBlock", ""], [1, "content"], [1, "fixed-footer", "text-center", "text-lg-start", "section-spacing", 2, "background-color", "#ECCDB4"], [1, "text-black", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], [1, "dropdown"], ["alt", "Profile Picture", 1, "profile-pic", 3, "src", "click", "mouseenter", "mouseleave"], ["class", "dropdown-content", 4, "ngIf"], [1, "dropdown-content"], [1, "btn", "my-button", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DineEasy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "nav", 3)(9, "div", 4)(10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "DineEasy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_ng_container_14_Template, 5, 3, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_ng_template_15_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "footer", 11)(20, "div", 4)(21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u00A9 2023 DineEasy.com. All rights reserved. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticationService.isAuthenticated())("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: [".custom-image[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  height: 80vh;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  background: cadetblue;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n}\r\n\r\n.navbar-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 75px;\r\n}\r\n\r\n.navbar-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n.fixed-footer[_ngcontent-%COMP%] {\r\n  margin-top: auto;\r\n  width: 100%;\r\n}\r\n\r\n.section-spacing[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.dine-easy[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: black;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.search-custom[_ngcontent-%COMP%] {\r\n  color: rgb(74, 132, 213);\r\n  border-color: rgb(74, 132, 213);\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 1cm;\r\n  text-transform: uppercase;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n  transition: background-color 0.3s ease;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-size: small;\r\n  letter-spacing: 2px;\r\n  padding: 8px 12px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2fdf2;\r\n  color: #000000;\r\n  border: 1px solid #000000;\r\n}\r\n\r\n.profile-pic[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  width: 37.5px;\r\n  height: 37.5px; \r\n  border-radius: 50%;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  z-index: 1;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  max-width: 100%;\r\n  padding: 0 20px;\r\n  right: 0; \r\n  text-align: left; \r\n  transition: opacity 0.3s ease; \r\n  opacity: 0; \r\n  pointer-events: none;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%]:hover {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n  opacity: 1; \r\n  pointer-events: auto;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #000000;\r\n  border: none;\r\n  outline: none;\r\n  padding: 8px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2fdf2;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLGVBQWU7RUFDZixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmN1c3RvbS1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogODB2aDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubmF2YmFyLWxlZnQgaW1nIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG5cclxuLm5hdmJhci1yaWdodCBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZml4ZWQtZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VjdGlvbi1zcGFjaW5nIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5kaW5lLWVhc3kge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1jdXN0b20ge1xyXG4gIGNvbG9yOiByZ2IoNzQsIDEzMiwgMjEzKTtcclxuICBib3JkZXItY29sb3I6IHJnYig3NCwgMTMyLCAyMTMpO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFjbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm15LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5teS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmZkZjI7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDM3LjVweDtcclxuICBoZWlnaHQ6IDM3LjVweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIHJpZ2h0OiAwOyBcclxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTsgXHJcbiAgb3BhY2l0eTogMDsgXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCxcclxuLmRyb3Bkb3duLWNvbnRlbnQ6aG92ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBvcGFjaXR5OiAxOyBcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmZkZjI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _service_restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/restaurant.service */ 6024);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/menu.service */ 3225);
/* harmony import */ var _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-items/menu-items.component */ 49);
/* harmony import */ var _service_menu_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/menu-items.service */ 5359);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/order.service */ 2909);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurants/restaurants.component */ 3214);
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant/restaurant.component */ 8071);
/* harmony import */ var _restaurant_overview_restaurant_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restaurant-overview/restaurant-overview.component */ 1301);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order/order.component */ 3779);
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-items/order-items.component */ 6945);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoice/invoice.component */ 1140);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-orders/my-orders.component */ 2739);
/* harmony import */ var _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./success-dialog/success-dialog.component */ 6719);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reservation/reservation.component */ 1674);
/* harmony import */ var _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reservation-details/reservation-details.component */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 6839);




























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  providers: [_service_restaurant_service__WEBPACK_IMPORTED_MODULE_3__.RestaurantService, _service_menu_service__WEBPACK_IMPORTED_MODULE_5__.MenuService, _service_menu_items_service__WEBPACK_IMPORTED_MODULE_7__.MenuItemsService, _service_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent, _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_6__.MenuItemsComponent, _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_9__.RestaurantsComponent, _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_10__.RestaurantComponent, _restaurant_overview_restaurant_overview_component__WEBPACK_IMPORTED_MODULE_11__.RestaurantOverviewComponent, _order_order_component__WEBPACK_IMPORTED_MODULE_12__.OrderComponent, _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_13__.OrderItemsComponent, _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__.InvoiceComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__.ProfileComponent, _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_16__.MyOrdersComponent, _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_17__.SuccessDialogComponent, _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_18__.ReservationComponent, _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_19__.ReservationDetailsComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule]
  });
})();

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/authentication.service */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restaurants/restaurants.component */ 3214);




class HomeComponent {
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
    if (!this.authenticationService.isLoggingOut) this.authenticationService.checkAuthStatus();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 2,
  vars: 0,
  consts: [["src", "../assets/images/DineEasy.jpg", "alt", "Dineasy Logo", 1, "custom-image"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 0)(1, "app-restaurants");
    }
  },
  dependencies: [_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_1__.RestaurantsComponent],
  styles: [".custom-image[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  height:80vh;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDo4MHZoO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1140:
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceComponent": () => (/* binding */ InvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _service_restaurant_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/restaurant-data.service */ 2045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);




function InvoiceComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, item_r1.price));
  }
}
class InvoiceComponent {
  constructor(route, restaurantDataService, router) {
    this.route = route;
    this.restaurantDataService = restaurantDataService;
    this.router = router;
    this.selectedItems = [];
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const invoiceItems = JSON.parse(params['items']);
      this.resId = params['resId'];
      this.selectedItems = invoiceItems;
      const restaurantData = this.restaurantDataService.getRestaurantData();
      if (restaurantData) {
        this.restaurantName = restaurantData.name;
        this.restaurantLocation = restaurantData.location;
      }
    });
  }
  generateInvoiceContent() {
    let invoiceContent = 'Invoice\n\n';
    invoiceContent += `${this.restaurantName}\n`;
    invoiceContent += `${this.restaurantLocation}\n\n`;
    invoiceContent += '------------------------\n\n';
    invoiceContent += 'Selected Items:\n';
    for (const item of this.selectedItems) {
      invoiceContent += `- ${item.name} - ${item.price}\n`;
    }
    invoiceContent += '\nTotal: ' + this.calculateTotal();
    return invoiceContent;
  }
  downloadInvoice() {
    const invoiceContent = this.generateInvoiceContent();
    const blob = new Blob([invoiceContent], {
      type: 'text/plain'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'invoice.txt';
    link.click();
  }
  calculateTotal() {
    return this.selectedItems.reduce((total, item) => total + item.price, 0);
  }
  goBack() {
    this.router.navigate(['/restaurants', this.resId]);
  }
}
InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
  return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_restaurant_data_service__WEBPACK_IMPORTED_MODULE_0__.RestaurantDataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
InvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InvoiceComponent,
  selectors: [["app-invoice"]],
  decls: 18,
  vars: 6,
  consts: [[1, "invoice"], [1, "line-section"], [1, "item-list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "total"], [1, "download-button"], [3, "click"], [1, "back-button", 3, "click"], [1, "item"], [1, "item-name"], [1, "item-price"]],
  template: function InvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InvoiceComponent_div_9_Template, 6, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoiceComponent_Template_button_click_14_listener() {
        return ctx.downloadInvoice();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Download Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoiceComponent_Template_button_click_16_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurantName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurantLocation);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, ctx.calculateTotal()), "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
  styles: [".invoice[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n  width: 400px;\r\n  top: 80px;\r\n  padding: 50px;\r\n  background-color: #f2f2f2;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  margin: 0 auto;\r\n  text-align: center; \r\n}\r\n\r\n.invoice-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.item-list[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.item-name[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.total[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  text-align: right;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n\r\n.download-button[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  background-color: #4caf50;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n.line-section[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #b5a7a7;\r\n    margin: 10px 0;\r\n  }\r\n\r\n.back-button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 80px;\r\n  left: 10px;\r\n  padding: 10px;\r\n  background-color: #141715;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQixFQUFFLHdDQUF3QztBQUM5RDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7RUFDaEI7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICB0b3A6IDgwcHg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBlbnRpcmUgaW52b2ljZSBjb250YWluZXIgKi9cclxufVxyXG5cclxuLmludm9pY2UtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLml0ZW0tbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGluZS1zZWN0aW9uIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjVhN2E3O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuLmJhY2stYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNzE1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmFjay1idXR0b24gaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 49:
/*!****************************************************!*\
  !*** ./src/app/menu-items/menu-items.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemsComponent": () => (/* binding */ MenuItemsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/menu-items.service */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ 1105);







function MenuItemsComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r1.price);
  }
}
class MenuItemsComponent {
  constructor(menuItemsService$, route) {
    this.menuItemsService$ = menuItemsService$;
    this.route = route;
    this.resId = null;
  }
  ngOnInit() {
    // Get resId param from parent component [Menu]
    this.route.parent?.params.subscribe(params => {
      this.resId = params['resId'];
    });
    this.route.params.subscribe(params => {
      // Get the menuId param from the current route
      const menuId = params['menuId'];
      // Request menu items for that restaurant using the menu items service
      if (this.resId && menuId) {
        this.menuItemsService$.getMenuItems(this.resId, menuId).subscribe(data => {
          this.menuItems = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(data);
        });
      }
    });
  }
}
MenuItemsComponent.ɵfac = function MenuItemsComponent_Factory(t) {
  return new (t || MenuItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__.MenuItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
MenuItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MenuItemsComponent,
  selectors: [["app-menu-items"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__.MenuItemsService])],
  decls: 27,
  vars: 3,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], [1, "container"], [1, "row", "section-spacing"], [1, "col-md-11"], [1, "table"], [4, "ngFor", "ngForOf"]],
  template: function MenuItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "body")(8, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "table", 6)(14, "thead")(15, "tr")(16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, MenuItemsComponent_tr_23_Template, 7, 3, "tr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "> ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 1, ctx.menuItems)) == null ? null : tmp_0_0[0] == null ? null : tmp_0_0[0].menu);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".container[_ngcontent-%COMP%] {\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n}\r\n\r\n.section-spacing[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 12px 15px;\r\n  border: 1px solid #e9ecef;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  background-color: #f8f9fa;\r\n  font-weight: bold;\r\n  color: #343a40;\r\n  text-align: left;\r\n  text-transform: uppercase;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  color: #343a40;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\r\n  background-color: #f1f3f5;\r\n  animation: _ngcontent-%COMP%_fade 0.3s;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_fade {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0.8;\r\n  }\r\n}\r\n\r\n.router-outlet[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  padding: 20px;\r\n  border: 1px solid #dee2e6;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  animation: _ngcontent-%COMP%_slideUp 0.5s;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_slideUp {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .col-md-11[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS1pdGVtcy9tZW51LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1zcGFjaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnRhYmxlIHRoLFxyXG50YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxudGFibGUgdGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB0ZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxudGFibGUgdHI6aG92ZXIgdGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjU7XHJcbiAgYW5pbWF0aW9uOiBmYWRlIDAuM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG59XHJcblxyXG4ucm91dGVyLW91dGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvbC1tZC0xMSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 1105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/menu.service */ 3225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _service_menu_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/menu-items.service */ 5359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);







const _c0 = function (a1, a3) {
  return ["/restaurants", a1, "menu", a3, "items"];
};
function MenuComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r0.resId, menu_r1.menuId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menu_r1.name, " ");
  }
}
class MenuComponent {
  constructor(menuService$, route) {
    this.menuService$ = menuService$;
    this.route = route;
    this.resId = null;
  }
  ngOnInit() {
    // Request menu for a restaurant through the menu service
    this.route.parent?.params.subscribe(params => {
      this.resId = params['resId'];
      console.log("resID--", this.resId);
      if (this.resId) {
        this.menuService$.getMenu(this.resId).subscribe(data => {
          this.menu = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(data);
        });
      }
    });
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_service_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService, _service_menu_items_service__WEBPACK_IMPORTED_MODULE_1__.MenuItemsService])],
  decls: 16,
  vars: 3,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], [1, "container"], [1, "row", "section-spacing"], [1, "col-md-11"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["routerLinkActive", "active", "queryParamsHandling", "preserve", 1, "nav-link", 3, "routerLink"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "body")(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "header")(12, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MenuComponent_li_13_Template, 3, 5, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 1, ctx.menu));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".nav.nav-tabs[_ngcontent-%COMP%] {\r\n    background-color: #f8f9fa;\r\n    margin-top: 1.4cm;\r\n    padding: 10px;\r\n    border-bottom: 2px solid #dee2e6;\r\n    display: flex;\r\n    justify-content: flex-start\r\n  }\r\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: #343a40;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 0;\r\n    padding: 10px 15px;\r\n    font-weight: bold;\r\n    transition: background-color 0.3s ease;\r\n    background-color: transparent;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n  }\r\n\r\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: #000000;\r\n    color: #fff;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2Lm5hdi10YWJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjRjbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcclxuICB9XHJcbiAgLm5hdi5uYXYtdGFicyAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICMzNDNhNDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgfVxyXG5cclxuICAubmF2Lm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 2739:
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersComponent": () => (/* binding */ MyOrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/order.service */ 2909);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);



function MyOrdersComponent_div_2_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r4.resId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, order_r4.orderDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r4.orderType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r4.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r4.itemIds.join(", "));
  }
}
function MyOrdersComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "table", 3)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sr/No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Restaurant ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Order Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Item IDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MyOrdersComponent_div_2_tr_19_Template, 16, 9, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.userOrders);
  }
}
function MyOrdersComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No orders found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class MyOrdersComponent {
  constructor(orderService) {
    this.orderService = orderService;
  }
  ngOnInit() {
    this.getOrdersForCurrentUser();
  }
  //get all tehe orders of current user
  getOrdersForCurrentUser() {
    this.subscription = this.orderService.getAllOrderOfUser().subscribe(data => {
      this.userOrders = data;
    }, error => {
      console.log('Error retrieving user orders:', error);
    });
  }
}
MyOrdersComponent.ɵfac = function MyOrdersComponent_Factory(t) {
  return new (t || MyOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService));
};
MyOrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MyOrdersComponent,
  selectors: [["app-my-orders"]],
  decls: 5,
  vars: 2,
  consts: [["class", "table-responsive py-3", 4, "ngIf", "ngIfElse"], ["noOrders", ""], [1, "table-responsive", "py-3"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]],
  template: function MyOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "My Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyOrdersComponent_div_2_Template, 20, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyOrdersComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userOrders && ctx.userOrders.length > 0)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6945:
/*!******************************************************!*\
  !*** ./src/app/order-items/order-items.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItemsComponent": () => (/* binding */ OrderItemsComponent)
/* harmony export */ });
/* harmony import */ var _service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/menu-items.service */ 5359);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/order.service */ 2909);
/* harmony import */ var _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../success-dialog/success-dialog.component */ 6719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7486);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ 7217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order/order.component */ 3779);













function OrderItemsComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label")(3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function OrderItemsComponent_tr_18_Template_input_change_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const menuItem_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleSelection(menuItem_r2.itemId, menuItem_r2.price, menuItem_r2.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", menuItem_r2 == null ? null : menuItem_r2.itemId)("checked", ctx_r0.isSelected(menuItem_r2.itemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](menuItem_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](menuItem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](menuItem_r2.price);
  }
}
function OrderItemsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderItemsComponent_div_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.generateInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Generate Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class OrderItemsComponent {
  constructor(menuItemsService$, OrderService$, route, router, dialog, authenticationService) {
    this.menuItemsService$ = menuItemsService$;
    this.OrderService$ = OrderService$;
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.authenticationService = authenticationService;
    this.selectedItems = [];
    this.invoiceItems = [];
    this.showInvoiceButton = false;
    this.itemsSubmitted = false;
  }
  ngOnInit() {
    // empty the selected items
    this.itemIds = [];
    this.selectedItems = [];
    // Get resId param from parent component [Menu]
    this.route.parent?.params.subscribe(params => {
      this.resId = params['resId'];
    });
    this.route.params.subscribe(params => {
      // Get the menuId param from the current route
      this.menuId = params['menuId'];
      // Request menu items for that restaurant using the menu items service
      if (this.resId && this.menuId) {
        this.menuItemsService$.getMenuItems(this.resId, this.menuId).subscribe(data => {
          this.menuItems = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(data);
        });
      }
    });
  }
  toggleSelection(itemId, price, name) {
    if (this.isSelected(itemId)) {
      this.selectedItems = this.selectedItems.filter(item => item !== itemId);
      this.invoiceItems = this.invoiceItems.filter(item => item.itemId !== itemId);
      console.log("deselect the item from the invoiceItems array", this.invoiceItems);
      console.log("deselect the item from the array to selectedItems", this.selectedItems);
    } else {
      this.selectedItems.push(itemId);
      this.invoiceItems.push({
        itemId,
        name,
        price
      });
      console.log("successfully added the items to invoiceItems", this.invoiceItems);
      console.log("successfully added the items to selectedItems", this.selectedItems);
    }
  }
  // check if the item contains in the selected.
  isSelected(itemId) {
    return this.selectedItems.includes(itemId);
  }
  sendOrder() {
    if (this.selectedItems.length === 0) {
      alert("Please select at least one item");
      return;
    }
    console.log("OrderSubmitted");
    const user = this.authenticationService.customer;
    const userId = user.customerId;
    this.itemIds = this.selectedItems;
    console.log(this.itemIds);
    //calculate quantity
    this.quantity = this.itemIds.length;
    let data = {
      customerId: userId,
      quantity: this.quantity,
      itemIds: this.itemIds
    };
    console.log(data);
    this.OrderService$.postOrder(data, this.resId, this.menuId).subscribe(response => {
      console.log("response:", response);
      this.dialog.open(_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SuccessDialogComponent);
      this.showInvoiceButton = true;
      this.generateInvoice();
    });
  }
  generateInvoice() {
    if (this.invoiceItems.length === 0) {
      console.log('No items selected for the invoice');
      return;
    }
    console.log('Generating invoice...', this.invoiceItems);
    this.router.navigate(['/invoice'], {
      queryParams: {
        items: JSON.stringify(this.invoiceItems),
        resId: this.resId
      }
    });
  }
}
OrderItemsComponent.ɵfac = function OrderItemsComponent_Factory(t) {
  return new (t || OrderItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__.MenuItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService));
};
OrderItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: OrderItemsComponent,
  selectors: [["app-order-items"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__.MenuItemsService, _service_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService])],
  decls: 24,
  vars: 4,
  consts: [[1, "container"], [1, "row", "section-spacing"], [1, "col-md-11"], [3, "submit"], [1, "table"], [4, "ngFor", "ngForOf"], ["type", "submit", "onclick", "sendOrder()", 1, "button", "generate-invoice-button"], ["class", "invoice-button", 4, "ngIf"], ["type", "checkbox", "name", "menuItem", 3, "value", "checked", "change"], [1, "invoice-button"], [1, "button", "generate-invoice-button", 3, "click"]],
  template: function OrderItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-order");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function OrderItemsComponent_Template_form_submit_5_listener() {
        return ctx.sendOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 4)(7, "thead")(8, "tr")(9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, OrderItemsComponent_tr_18_Template, 10, 5, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, OrderItemsComponent_div_22_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 2, ctx.menuItems)) == null ? null : tmp_0_0[0] == null ? null : tmp_0_0[0].menu);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.itemsSubmitted);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _order_order_component__WEBPACK_IMPORTED_MODULE_4__.OrderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: [".invoice-button[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n.generate-invoice-button[_ngcontent-%COMP%] {\r\n  background-color: #080202;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.generate-invoice-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2fdf2;\r\n  color: #000000; \r\n  border: #000000 1px solid;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3JkZXItaXRlbXMvb3JkZXItaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZ2VuZXJhdGUtaW52b2ljZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODAyMDI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdlbmVyYXRlLWludm9pY2UtYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmZGYyO1xyXG4gIGNvbG9yOiAjMDAwMDAwOyBcclxuICBib3JkZXI6ICMwMDAwMDAgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 3779:
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderComponent": () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/order.service */ 2909);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/menu.service */ 3225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);







const _c0 = function (a1, a3) {
  return ["/restaurants", a1, "menu", a3, "items", "order"];
};
function OrderComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r0.resId, menu_r1.menuId));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menu_r1.name, " ");
  }
}
class OrderComponent {
  constructor(menuService$, route) {
    this.menuService$ = menuService$;
    this.route = route;
    this.resId = null;
  }
  ngOnInit() {
    // Request menu for a restaurant through the menu service
    this.route.parent?.params.subscribe(params => {
      this.resId = params['resId'];
      if (this.resId) {
        this.menuService$.getMenu(this.resId).subscribe(data => {
          this.menu = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(data);
        });
      }
    });
  }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) {
  return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
OrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OrderComponent,
  selectors: [["app-order"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_service_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService, _service_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService])],
  decls: 16,
  vars: 3,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], [1, "container"], [1, "row", "section-spacing"], [1, "col-md-11"], [1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["routerLinkActive", "active", "queryParamsHandling", "preserve", 1, "nav-link", 3, "routerLink"]],
  template: function OrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "body")(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "header")(12, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, OrderComponent_li_13_Template, 3, 5, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 1, ctx.menu));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".nav.nav-tabs[_ngcontent-%COMP%] {\r\n    background-color: #f8f9fa;\r\n    margin-top: 1.4cm;\r\n    padding: 10px;\r\n    border-bottom: 2px solid #dee2e6;\r\n    display: flex;\r\n    justify-content: flex-start\r\n  }\r\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    color: #343a40;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 0;\r\n    padding: 10px 15px;\r\n    font-weight: bold;\r\n    transition: background-color 0.3s ease;\r\n    background-color: transparent;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n  }\r\n\r\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: #000000;\r\n    color: #fff;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2I7RUFDRjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYubmF2LXRhYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIG1hcmdpbi10b3A6IDEuNGNtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG4gIH1cclxuICAubmF2Lm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2Lm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogIzM0M2E0MDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB9XHJcblxyXG4gIC5uYXYubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/authentication.service */ 7217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6477);





function ProfileComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Provided email does not match with registered email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ProfileComponent {
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.customerInfo = {};
    this.isEditable = {};
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
      customerType: customer.customerType
    };
  }
  // Checks if the same email is provided as user who is logged-in
  isEmailSameAsRegisteredUser() {
    return this.customerInfo.email === this.authenticationService.user.email;
  }
  // Toggles the edit flags to switch between read-only and edit mode.
  toggleEdit(field, editMode) {
    this.isEditable[field] = editMode;
  }
  // Exit edit mode when click anywhere outside text boxes
  exitEditMode() {
    for (const field in this.isEditable) {
      this.isEditable[field] = false;
    }
  }
  // Saves the profile if any change is made
  SaveProfile() {
    if (this.customerInfo === this.authenticationService.customer) {
      console.log('No change in the profile');
      this.router.navigateByUrl('/');
    } else {
      this.authenticationService.updateProfile(this.customerInfo).subscribe(response => {
        console.log('Profile updated successfully');
        this.router.navigateByUrl('/');
      }, error => {
        console.error('Error updating profile:', error);
      });
    }
  }
  CloseProfile() {
    this.router.navigateByUrl('/');
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 59,
  vars: 12,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], [1, "profile-container"], [1, "profile-form", 3, "click"], [1, "form-group"], ["for", "profilePic"], [1, "input-group"], ["alt", "Profile Picture", 1, "profile-picture", 3, "src"], ["for", "name"], ["id", "name", "type", "text", "required", "", 1, "form-control", "rounded", 3, "ngModel", "readonly", "autofocus", "ngModelChange", "click", "blur"], [1, "edit-icon", 3, "click"], [1, "form-group", "form-group-row"], [1, "form-group-item"], ["for", "email"], ["id", "email", "type", "email", "required", "", 1, "form-control", "rounded", 3, "ngModel", "readonly", "ngModelChange", "click", "blur"], ["class", "email-error", 4, "ngIf"], ["for", "phone"], ["id", "phone", "type", "tel", 1, "form-control", "rounded", 3, "ngModel", "readonly", "ngModelChange", "click", "blur"], ["for", "address"], ["id", "address", "type", "text", 1, "form-control", "rounded", 3, "ngModel", "readonly", "ngModelChange", "click", "blur"], ["id", "customerType", 1, "form-group"], ["for", "customerType"], ["required", "", 1, "form-control", "rounded", 3, "ngModel", "ngModelChange", "click"], ["value", "Freemium"], ["value", "Premium"], [1, "table-button"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "email-error"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "div", 3)(9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_div_click_9_listener() {
        return ctx.exitEditMode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Profile Picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.customerInfo.name = $event;
      })("click", function ProfileComponent_Template_input_click_19_listener($event) {
        return $event.stopPropagation();
      })("blur", function ProfileComponent_Template_input_blur_19_listener() {
        return ctx.toggleEdit("name", false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_20_listener($event) {
        ctx.toggleEdit("name", true);
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u270E");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "div", 13)(24, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Email ID: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7)(27, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.customerInfo.email = $event;
      })("click", function ProfileComponent_Template_input_click_27_listener($event) {
        return $event.stopPropagation();
      })("blur", function ProfileComponent_Template_input_blur_27_listener() {
        return ctx.toggleEdit("email", false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_28_listener($event) {
        ctx.toggleEdit("email", true);
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u270E");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProfileComponent_div_30_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13)(32, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Phone: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7)(35, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.customerInfo.contactNumber = $event;
      })("click", function ProfileComponent_Template_input_click_35_listener($event) {
        return $event.stopPropagation();
      })("blur", function ProfileComponent_Template_input_blur_35_listener() {
        return ctx.toggleEdit("phone", false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_36_listener($event) {
        ctx.toggleEdit("phone", true);
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u270E");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5)(39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 7)(42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_42_listener($event) {
        return ctx.customerInfo.address = $event;
      })("click", function ProfileComponent_Template_input_click_42_listener($event) {
        return $event.stopPropagation();
      })("blur", function ProfileComponent_Template_input_blur_42_listener() {
        return ctx.toggleEdit("address", false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_43_listener($event) {
        ctx.toggleEdit("address", true);
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u270E");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21)(46, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Want to be Premium member?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_48_listener($event) {
        return ctx.customerInfo.customerType = $event;
      })("click", function ProfileComponent_Template_select_click_48_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Freemium");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Premium");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26)(54, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_54_listener($event) {
        ctx.SaveProfile();
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Save Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_56_listener($event) {
        ctx.CloseProfile();
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.customerInfo.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.name)("readonly", !ctx.isEditable["name"])("autofocus", ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.email)("readonly", !ctx.isEditable["email"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEmailSameAsRegisteredUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.contactNumber)("readonly", !ctx.isEditable["phone"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.address)("readonly", !ctx.isEditable["address"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.customerType);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: [".profile-container[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 1.3cm auto 0;\r\n    padding: 40px;\r\n    background-color: #f8f8f8;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n\r\n  }\r\n\r\n  .email-error[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-style: italic;\r\n    color: red;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .profile-title[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n    color: #333;\r\n  }\r\n\r\n  .profile-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .profile-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .profile-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 8px;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .btn[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    background-color: #dc3545;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #c82333;\r\n  }\r\n  .form-group-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .form-group-item[_ngcontent-%COMP%] {\r\n    flex-basis: 48%;\r\n  }\r\n\r\n  .input-group[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n  \r\n  .edit-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 10px;\r\n    transform: translateY(-50%);\r\n    width: 20px;\r\n    height: 20px;\r\n    background-image: url('icon.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .form-control.rounded[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    padding-right: 30px; \r\n  }\r\n\r\n  .profile-picture[_ngcontent-%COMP%] {\r\n    width: 100 px;\r\n    height: 100 px; \r\n    border-radius: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7O0VBRTFDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0lBRVosc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFxRDtJQUNyRCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUUsb0RBQW9EO0VBQzNFOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogMS4zY20gYXV0byAwO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHJcbiAgfVxyXG5cclxuICAuZW1haWwtZXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIC5wcm9maWxlLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1mb3JtIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAtaXRlbSB7XHJcbiAgICBmbGV4LWJhc2lzOiA0OCU7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuZWRpdC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbC5yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAvKiBBZGp1c3QgdGhlIHBhZGRpbmcgdG8gYWNjb21tb2RhdGUgdGhlIGVkaXQgaWNvbiAqL1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICB3aWR0aDogMTAwIHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAgcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 3935:
/*!**********************************************************************!*\
  !*** ./src/app/reservation-details/reservation-details.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationDetailsComponent": () => (/* binding */ ReservationDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);


class ReservationDetailsComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.reservationId = params['reservationId'];
      this.tableNumber = +params['tableNumber'];
      this.date = params['date'];
      this.time = params['time'];
      this.resId = params['resId'];
    });
  }
  goToOrder() {
    this.router.navigate(['../order'], {
      relativeTo: this.route
    });
  }
}
ReservationDetailsComponent.ɵfac = function ReservationDetailsComponent_Factory(t) {
  return new (t || ReservationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
ReservationDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ReservationDetailsComponent,
  selectors: [["app-reservation-details"]],
  decls: 15,
  vars: 2,
  consts: [[1, "container"], [1, "reservation-status"], [1, "pre-order"], [3, "click"]],
  template: function ReservationDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reservation Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Thank you for choosing us !");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Do you want to order your meal now itself?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservationDetailsComponent_Template_button_click_13_listener() {
        return ctx.goToOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello customer, your reservation with us is confirmed. Your reservation ID is ", ctx.reservationId, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Table Number ", ctx.tableNumber, " is reserved for you. ");
    }
  },
  styles: [".reservation-status[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  padding: 20px;\r\n  background-color: #f5f5f5;\r\n  border-radius: 4px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.reservation-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.reservation-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\n.pre-order[_ngcontent-%COMP%] {\r\n  margin-top: 1cm;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1cm;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.pre-order[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 18px;\r\n  color: #333;\r\n}\r\n\r\n.pre-order[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: #000000;\r\n  color: #f2fdf2;\r\n  transition: background-color 0.3s ease;\r\n  text-decoration: none;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pre-order[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2fdf2;\r\n  color: #000000;\r\n  border: #000000 1px solid;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzZXJ2YXRpb24tZGV0YWlscy9yZXNlcnZhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNlcnZhdGlvbi1zdGF0dXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmVzZXJ2YXRpb24tc3RhdHVzIGgyIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlc2VydmF0aW9uLXN0YXR1cyBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5wcmUtb3JkZXIge1xyXG4gIG1hcmdpbi10b3A6IDFjbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxY207XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmUtb3JkZXIgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnByZS1vcmRlciBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNmMmZkZjI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmUtb3JkZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmZGYyO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJvcmRlcjogIzAwMDAwMCAxcHggc29saWQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1674:
/*!******************************************************!*\
  !*** ./src/app/reservation/reservation.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationComponent": () => (/* binding */ ReservationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_reservation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/reservation.service */ 4815);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/authentication.service */ 7217);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);





class ReservationComponent {
  constructor(reservationService, router, route, authenticationService) {
    this.reservationService = reservationService;
    this.router = router;
    this.route = route;
    this.authenticationService = authenticationService;
    this.isReservationConfirmed = false;
  }
  createReservation() {
    const user = this.authenticationService.customer;
    const userID = user.customerId;
    console.log(userID);
    const reservation = {
      peopleCount: parseInt(this.partySize.toString()),
      date: this.date,
      time: this.time,
      phoneNumber: this.phone,
      reservationId: '',
      customerId: parseInt(userID.toString()),
      resId: this.route.parent?.snapshot.paramMap.get('resId'),
      status: 'pending',
      tableNumber: Math.floor(Math.random() * 20) + 1 // Generate a random number between 1 and 20
    };

    this.reservationService.createReservation(reservation).subscribe(response => {
      this.reservationId = response.reservationId;
      const tableNumber = +response.tableNumber;
      if (!isNaN(tableNumber)) {
        this.tableNumber = tableNumber;
        this.isReservationConfirmed = true;
        console.log('Response:', response);
        console.log(userID);
        this.router.navigate(['../reservation-details'], {
          relativeTo: this.route,
          queryParams: {
            reservationId: this.reservationId,
            tableNumber: this.tableNumber
          }
        });
      } else {
        console.error('Invalid table number');
      }
    }, error => {
      console.log('Error:', error);
      console.error('Failed to create reservation:', error);
    });
  }
}
ReservationComponent.ɵfac = function ReservationComponent_Factory(t) {
  return new (t || ReservationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_reservation_service__WEBPACK_IMPORTED_MODULE_0__.ReservationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
};
ReservationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ReservationComponent,
  selectors: [["app-reservation"]],
  decls: 64,
  vars: 4,
  consts: [[1, "reservation-container"], [1, "reservation-title"], [1, "reservation-form"], [1, "form-group"], ["for", "partySize"], ["id", "partySize", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], [1, "form-group", "form-group-row"], [1, "form-group-item"], ["for", "date"], ["type", "date", "id", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "time"], ["type", "time", "id", "time", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["type", "tel", "id", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table-button"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
  template: function ReservationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Make a Reservation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Party Size:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.partySize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "1 person");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "2 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "3 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "4 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "5 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "6 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "7 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "8 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "9 person");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "10 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "11 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "12 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "13 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "14 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "15 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "16 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "17 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "18 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "19 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "20 people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 26)(49, "div", 27)(50, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Date:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_52_listener($event) {
        return ctx.date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 27)(54, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Time:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_56_listener($event) {
        return ctx.time = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 3)(58, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Phone:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReservationComponent_Template_input_ngModelChange_60_listener($event) {
        return ctx.phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 34)(62, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReservationComponent_Template_button_click_62_listener() {
        return ctx.createReservation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Reserve a Table ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.partySize);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.time);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.phone);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".reservation-container[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 1.3cm auto 0;\r\n    padding: 40px;\r\n    background-color: #f8f8f8;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    \r\n  }\r\n  \r\n  .reservation-title[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    margin-bottom: 20px;\r\n    color: #333;\r\n  }\r\n  \r\n  .reservation-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .reservation-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .reservation-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 8px;\r\n    \r\n    border: 1px solid #ccc;\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    background-color: #dc3545;\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n  }\r\n  \r\n  .btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #c82333;\r\n  }\r\n  .form-group-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .form-group-item[_ngcontent-%COMP%] {\r\n    flex-basis: 48%;\r\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3Qzs7RUFFMUM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNlcnZhdGlvbi1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogMS4zY20gYXV0byAwO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAucmVzZXJ2YXRpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXNlcnZhdGlvbi1mb3JtIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmVzZXJ2YXRpb24tZm9ybSBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAucmVzZXJ2YXRpb24tZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xyXG4gIH1cclxuICAuZm9ybS1ncm91cC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAtaXRlbSB7XHJcbiAgICBmbGV4LWJhc2lzOiA0OCU7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 1301:
/*!**********************************************************************!*\
  !*** ./src/app/restaurant-overview/restaurant-overview.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantOverviewComponent": () => (/* binding */ RestaurantOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/restaurant.service */ 6024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 9941);




class RestaurantOverviewComponent {
  constructor(route, service) {
    this.route = route;
    this.service = service;
  }
  ngOnInit() {
    const resId = this.route.parent?.snapshot.paramMap.get('resId');
    console.log("resId ", resId);
    this.service.getRestaurantDetailsById(resId).subscribe(data => {
      this.restaurant = data;
      console.log("restaurant", this.restaurant.name);
    });
  }
}
RestaurantOverviewComponent.ɵfac = function RestaurantOverviewComponent_Factory(t) {
  return new (t || RestaurantOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__.RestaurantService));
};
RestaurantOverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RestaurantOverviewComponent,
  selectors: [["app-restaurant-overview"]],
  decls: 88,
  vars: 10,
  consts: [[1, "container"], [1, "row", "section-spacing"], [1, "col-md-11"], [1, "row"], [1, "col-md-3"], [1, "icon-container"], [1, "icon-info"], [1, "icon-yellow"], [1, "heading"], [1, "info-text"], [1, "icon-grey"], [1, "icon-green"], [1, "row", "line-section", "section-spacing", "shadow-box"], [1, "col-md-6"], [1, "icon-blue"], [1, "col-md-6", "justify-content-end"]],
  template: function RestaurantOverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "star");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ratings:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4)(17, "div", 5)(18, "div", 6)(19, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Review:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4)(26, "div", 5)(27, "div", 6)(28, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "attach_money");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Cost:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 4)(35, "div", 5)(36, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Cuisine:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 12)(42, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 5)(47, "div", 6)(48, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Contact:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 5)(56, "div", 6)(57, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "location_city");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Neighborhood:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 5)(65, "div", 6)(66, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Hours:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 15)(73, "div", 5)(74, "div", 6)(75, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "local_parking");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Parking Info: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 5)(83, "div", 6)(84, "strong", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Valet Parking:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurant.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurant.rating);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurant.reviews);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurant.cost);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurant.cuisines);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.restaurant.contact);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.restaurant.neighborhood, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.restaurant.hours, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.restaurant.parkingdetails, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.restaurant.isValetPark ? "Yes" : "No", " ");
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n}\r\n\r\n.image-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.section-spacing[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.line-section[_ngcontent-%COMP%] {\r\n  border-top: 1px solid rgb(172, 165, 165);\r\n  margin: 20px 0;\r\n}\r\n\r\n.icon-yellow[_ngcontent-%COMP%] {\r\n  color: rgb(218, 122, 32);\r\n}\r\n\r\n.icon-blue[_ngcontent-%COMP%] {\r\n  color: navy;\r\n}\r\n\r\n.icon-grey[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}\r\n\r\n.icon-green[_ngcontent-%COMP%] {\r\n  color: green;\r\n}\r\n\r\n.shadow-box[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  padding: 20px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n\r\n.restaurant-name[_ngcontent-%COMP%] {\r\n  color: #333333;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n.heading[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  font-size: small;\r\n  font-weight: 800;\r\n}\r\n.icon-info[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center; \r\n  gap: 10px;\r\n}\r\n.info-text[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdGF1cmFudC1vdmVydmlldy9yZXN0YXVyYW50LW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uaW1hZ2Utd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNlY3Rpb24tc3BhY2luZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpbmUtc2VjdGlvbiB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzIsIDE2NSwgMTY1KTtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLmljb24teWVsbG93IHtcclxuICBjb2xvcjogcmdiKDIxOCwgMTIyLCAzMik7XHJcbn1cclxuXHJcbi5pY29uLWJsdWUge1xyXG4gIGNvbG9yOiBuYXZ5O1xyXG59XHJcblxyXG4uaWNvbi1ncmV5IHtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmljb24tZ3JlZW4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnNoYWRvdy1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIG1hdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnJlc3RhdXJhbnQtbmFtZSB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmljb24taW5mb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gIGdhcDogMTBweDtcclxufVxyXG4uaW5mby10ZXh0IHtcclxuICBjb2xvcjogZ3JleTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8071:
/*!****************************************************!*\
  !*** ./src/app/restaurant/restaurant.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantComponent": () => (/* binding */ RestaurantComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/restaurant.service */ 6024);
/* harmony import */ var _service_restaurant_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/restaurant-data.service */ 2045);
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);






function RestaurantComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 6)(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reservation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/restaurants/" + ctx_r0.restaurant.resId + "/reservation");
  }
}
const _c0 = function (a1) {
  return ["/restaurants", a1, "order"];
};
function RestaurantComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 6)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r1.restaurant.resId));
  }
}
const _c1 = function (a1) {
  return ["/restaurants", a1, "overview"];
};
const _c2 = function (a1) {
  return ["/restaurants", a1, "menu"];
};
class RestaurantComponent {
  constructor(route, service, restaurantDataService, authenticationService) {
    this.route = route;
    this.service = service;
    this.restaurantDataService = restaurantDataService;
    this.authenticationService = authenticationService;
  }
  ngOnInit() {
    const resId = this.route.snapshot.paramMap.get('resId');
    console.log("resId ", resId);
    this.service.getRestaurantDetailsById(resId).subscribe(data => {
      this.restaurant = data;
      console.log("restaurant", this.restaurant.name);
      this.restaurantDataService.setRestaurantData(this.restaurant);
    });
  }
}
RestaurantComponent.ɵfac = function RestaurantComponent_Factory(t) {
  return new (t || RestaurantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__.RestaurantService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_restaurant_data_service__WEBPACK_IMPORTED_MODULE_1__.RestaurantDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
};
RestaurantComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RestaurantComponent,
  selectors: [["app-restaurant"]],
  decls: 21,
  vars: 10,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], ["alt", "Dineasy Logo", 1, "custom-image", 3, "src"], [1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["aria-current", "page", "routerLinkActive", "active", 1, "nav-link", "active", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], [1, "nav-link", 3, "routerLink"]],
  template: function RestaurantComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4)(10, "header")(11, "ul", 5)(12, "li", 6)(13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "OverView");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 6)(16, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, RestaurantComponent_li_18_Template, 3, 1, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RestaurantComponent_li_19_Template, 3, 3, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.restaurant.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.restaurant.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c1, ctx.restaurant.resId));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c2, ctx.restaurant.resId));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authenticationService.isAuthenticated() && ctx.authenticationService.customer.customerType === "Premium");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authenticationService.isAuthenticated());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
  styles: [".custom-image[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height:80vh;\r\n  }\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    color: rgb(119, 84, 20);\r\n  }\r\n  .nav-link[_ngcontent-%COMP%]:hover {\r\n        color: grey;\r\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdGF1cmFudC9yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7UUFDTSxXQUFXO0lBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDo4MHZoO1xyXG4gIH1cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiByZ2IoMTE5LCA4NCwgMjApO1xyXG4gIH1cclxuICAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 3214:
/*!******************************************************!*\
  !*** ./src/app/restaurants/restaurants.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantsComponent": () => (/* binding */ RestaurantsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/restaurant.service */ 6024);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2193);








const _c0 = function (a1) {
  return ["/restaurants", a1, "overview"];
};
function RestaurantsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13)(1, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content")(4, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17)(7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "View Restaurant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const restaurant_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", restaurant_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](restaurant_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rating: ", restaurant_r1.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Reviews: ", restaurant_r1.reviews, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cuisines: ", restaurant_r1.cuisines, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, restaurant_r1.resId));
  }
}
class RestaurantsComponent {
  constructor(restaurantService) {
    this.restaurantService = restaurantService;
    this.searchTerm = '';
  }
  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(data => {
      this.showAllRestaurant = data;
      this.restaurants = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(data.slice(0, 4));
      this.filteredRestaurants = this.restaurants;
    });
  }
  showAllCards() {
    this.restaurants = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.showAllRestaurant);
    this.filteredRestaurants = this.restaurants;
  }
  filterRestaurants() {
    if (this.searchTerm) {
      // Filter restaurants based on the search term
      this.filteredRestaurants = this.restaurants.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(restaurants => restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || restaurant.cuisines.toLowerCase().includes(this.searchTerm.toLowerCase()))));
    } else {
      // If the search term is empty, show all restaurants
      this.filteredRestaurants = this.restaurants;
    }
  }
  clearSearch() {
    this.searchTerm = '';
    this.filterRestaurants();
  }
}
RestaurantsComponent.ɵfac = function RestaurantsComponent_Factory(t) {
  return new (t || RestaurantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__.RestaurantService));
};
RestaurantsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RestaurantsComponent,
  selectors: [["app-restaurants"]],
  decls: 19,
  vars: 4,
  consts: [[1, "container"], [1, "row", "section-spacing"], [1, "col-md-6"], [1, "input-group"], ["type", "text", "placeholder", "Search your favorite Restaurant or Cuisine", 1, "form-control", "search-input", 3, "ngModel", "ngModelChange", "input"], ["type", "button", 1, "btn", "btn-outline-secondary", "clear-button", 3, "click"], [1, "col-md-11"], [1, "dining"], [1, "col-md"], [1, "btn", "btn-link", "my-button", 3, "click"], [1, "line-section"], [1, "row", "justify-content-start", "d-flex", "flex-wrap", "section-spacing"], ["class", "col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "card", "h-100"], ["mat-card-image", "", "alt", "Restaurant Image", 1, "img-width", 3, "src"], [1, "card-title"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "small-text", "text-secondary", "info"], [1, "text-truncate", "info"], ["mat-button", "", "color", "primary", 1, "view-restaurant", 3, "routerLink"]],
  template: function RestaurantsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RestaurantsComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchTerm = $event;
      })("input", function RestaurantsComponent_Template_input_input_5_listener() {
        return ctx.filterRestaurants();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantsComponent_Template_button_click_6_listener() {
        return ctx.clearSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "CLEAR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1)(9, "div", 6)(10, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Available For Dining");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RestaurantsComponent_Template_a_click_13_listener() {
        return ctx.showAllCards();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "See All");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RestaurantsComponent_div_17_Template, 15, 8, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 2, ctx.filteredRestaurants));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardImage, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".image-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .section-spacing[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    margin-bottom: 1px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .line-section[_ngcontent-%COMP%] {\r\n    border-top: 2px solid black;\r\n    margin: 5px 0;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n  transition: transform 0.5s;\r\n  cursor: pointer;\r\n  background-color: #F8F6F4;\r\n    ;\r\n}\r\n.card-title[_ngcontent-%COMP%]{\r\n  margin-top: 3px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.09);\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  font-weight:lighter;\r\n  letter-spacing: 0.2em;\r\n}\r\n\r\n.view-restaurant[_ngcontent-%COMP%]{\r\n  border-radius: 0.2cm;\r\n  padding: 0.2cm;\r\n  border: #000000 1px solid;\r\n} \r\n.info[_ngcontent-%COMP%]{\r\n  font-size: medium;\r\n  font-weight: 600;\r\n  letter-spacing: 1px;\r\n}\r\n.search-input[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  outline: none;\r\n  \r\n  border: 2px solid #b3b3b3;\r\n  box-shadow: none;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  letter-spacing: 3px;\r\n  padding: 8px 12px;\r\n}\r\n.search-input[_ngcontent-%COMP%]:focus {\r\n  border-color: #f8f9fa\r\n}\r\n.clear-button[_ngcontent-%COMP%] {\r\n  background-color: #f2fdf2; \r\n  color: #000000;\r\n  transition: background-color 0.3s ease; \r\n  text-decoration: none;\r\n}\r\n\r\n.clear-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #000000; \r\n  color: #f2fdf2; \r\n  border: #000000 1px solid;\r\n}\r\n.input-group[_ngcontent-%COMP%]{\r\n  gap: 1cm;\r\n}\r\n\r\n.dining[_ngcontent-%COMP%]{\r\n  font-size:xx-large;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%] {\r\n  background-color: #000000; \r\n  color: #FFFFFF;\r\n  transition: background-color 0.3s ease; \r\n  text-decoration: none;\r\n}\r\n\r\n.my-button[_ngcontent-%COMP%]:hover {\r\n  background-color: #f2fdf2; \r\n  color: #000000; \r\n  border: #000000 1px solid;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdGF1cmFudHMvcmVzdGF1cmFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0VBQ2Y7O0VBRUE7RUFDQSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTs7RUFFYix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXNwYWNpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubGluZS1zZWN0aW9uIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY2RjQ7XHJcbiAgICA7XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG59XHJcbi50ZXh0e1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG59XHJcblxyXG4udmlldy1yZXN0YXVyYW50e1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmNtO1xyXG4gIHBhZGRpbmc6IDAuMmNtO1xyXG4gIGJvcmRlcjogIzAwMDAwMCAxcHggc29saWQ7XHJcbn0gXHJcbi5pbmZve1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYjNiM2IzO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxufVxyXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNmOGY5ZmFcclxufVxyXG4uY2xlYXItYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmZGYyOyBcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyBcclxuICBjb2xvcjogI2YyZmRmMjsgXHJcbiAgYm9yZGVyOiAjMDAwMDAwIDFweCBzb2xpZDtcclxufVxyXG4uaW5wdXQtZ3JvdXB7XHJcbiAgZ2FwOiAxY207XHJcbn1cclxuXHJcbi5kaW5pbmd7XHJcbiAgZm9udC1zaXplOnh4LWxhcmdlO1xyXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5teS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IFxyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5teS1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmZkZjI7IFxyXG4gIGNvbG9yOiAjMDAwMDAwOyBcclxuICBib3JkZXI6ICMwMDAwMDAgMXB4IHNvbGlkO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7217:
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);




class AuthenticationService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.isLoggedIn = false;
    this.isLoggingOut = false;
    this.hostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostUrl;
  }
  // Used to set the isLoggenIn flag
  setAuthenticated(flag) {
    this.isLoggedIn = flag;
  }
  // Checks if the current user is authenticated and retrieves the users information
  checkAuthStatus() {
    this.http.get(this.hostUrl + 'checkAuth').subscribe(response => {
      if (response.authenticated === true) {
        this.isLoggedIn = true;
        this.user = response.user;
        this.getCustomerInfo(this.user.userId).subscribe(data => {
          this.customer = data;
        }, error => {
          console.error('Error:', error);
        });
      } else {
        this.isLoggedIn = false;
      }
    }, error => {
      console.error('Error:', error);
    });
  }
  // Gets the customer information
  getCustomerInfo(userId) {
    return this.http.get(this.hostUrl + 'user/' + userId);
  }
  // Checks where the current user is logged-in
  isAuthenticated() {
    return this.isLoggedIn;
  }
  // Updated the customer profile
  updateProfile(profileData) {
    return this.http.put(this.hostUrl + 'profile/' + this.user.userId, profileData);
  }
  // Redirect to Google OAuth callback API for login
  login() {
    this.isLoggingOut = false;
    window.location.href = '/auth/google';
  }
  // Invoke the logout API to destroy the current session
  logout() {
    this.isLoggedIn = false;
    this.isLoggingOut = true;
    console.log("Calling logout in Authentication Service URL: " + this.hostUrl);
    return this.http.post(this.hostUrl + 'logout', {});
  }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
  return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthenticationService,
  factory: AuthenticationService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5359:
/*!***********************************************!*\
  !*** ./src/app/service/menu-items.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemsService": () => (/* binding */ MenuItemsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class MenuItemsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.hostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostUrl;
  }
  getMenuItems(resId, menuId) {
    console.log("Here");
    return this.httpClient.get(this.hostUrl + 'restaurants/' + resId + '/menu/' + menuId + '/items');
  }
}
MenuItemsService.ɵfac = function MenuItemsService_Factory(t) {
  return new (t || MenuItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MenuItemsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MenuItemsService,
  factory: MenuItemsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3225:
/*!*****************************************!*\
  !*** ./src/app/service/menu.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class MenuService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.hostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostUrl;
  }
  getMenu(resId) {
    return this.httpClient.get(this.hostUrl + 'restaurants/' + resId + '/menu');
  }
}
MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MenuService,
  factory: MenuService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2909:
/*!******************************************!*\
  !*** ./src/app/service/order.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class OrderService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.hostUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostUrl;
  }
  //post a order
  postOrder(data, resId, menuId) {
    let url = this.hostUrl + 'restaurants/' + resId + '/menu/' + menuId + '/items/order';
    console.log(url);
    console.log(data);
    return this.httpClient.post(url, data);
  }
  getAllOrderOfUser() {
    console.log("in get all order of user");
    return this.httpClient.get(this.hostUrl + 'myorders');
  }
}
OrderService.ɵfac = function OrderService_Factory(t) {
  return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
OrderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OrderService,
  factory: OrderService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 4815:
/*!************************************************!*\
  !*** ./src/app/service/reservation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationService": () => (/* binding */ ReservationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class ReservationService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.hostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostUrl;
  }
  createReservation(reservation) {
    console.log("reservation", reservation);
    return this.httpClient.post(this.hostUrl + 'addreservation', reservation);
  }
}
ReservationService.ɵfac = function ReservationService_Factory(t) {
  return new (t || ReservationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ReservationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ReservationService,
  factory: ReservationService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2045:
/*!****************************************************!*\
  !*** ./src/app/service/restaurant-data.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantDataService": () => (/* binding */ RestaurantDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class RestaurantDataService {
  constructor() {
    this.restaurantStorageKey = 'restaurantData';
  }
  setRestaurantData(restaurant) {
    localStorage.setItem(this.restaurantStorageKey, JSON.stringify(restaurant));
  }
  getRestaurantData() {
    const restaurantData = localStorage.getItem(this.restaurantStorageKey);
    return restaurantData ? JSON.parse(restaurantData) : null;
  }
  clearRestaurantData() {
    localStorage.removeItem(this.restaurantStorageKey);
  }
}
RestaurantDataService.ɵfac = function RestaurantDataService_Factory(t) {
  return new (t || RestaurantDataService)();
};
RestaurantDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: RestaurantDataService,
  factory: RestaurantDataService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6024:
/*!***********************************************!*\
  !*** ./src/app/service/restaurant.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestaurantService": () => (/* binding */ RestaurantService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3765);



class RestaurantService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.hostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostUrl;
  }
  getAllRestaurants() {
    console.log(this.hostUrl);
    return this.httpClient.get(this.hostUrl + 'restaurants');
  }
  getRestaurantDetailsById(id) {
    return this.httpClient.get(this.hostUrl + 'restaurants/' + id);
  }
}
RestaurantService.ɵfac = function RestaurantService_Factory(t) {
  return new (t || RestaurantService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
RestaurantService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RestaurantService,
  factory: RestaurantService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6719:
/*!************************************************************!*\
  !*** ./src/app/success-dialog/success-dialog.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessDialogComponent": () => (/* binding */ SuccessDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7486);


class SuccessDialogComponent {
  constructor(dilogRef) {
    this.dilogRef = dilogRef;
  }
  ngOnInit() {}
  closeDialog() {
    this.dilogRef.close();
  }
}
SuccessDialogComponent.ɵfac = function SuccessDialogComponent_Factory(t) {
  return new (t || SuccessDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
};
SuccessDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SuccessDialogComponent,
  selectors: [["app-success-dialog"]],
  decls: 8,
  vars: 0,
  consts: [[1, "text-center", "p-4"], [1, "mb-4"], [1, "d-flex", "justify-content-center"], ["mat-button", "", "mat-dialog-close", "'close'", 1, "btn", "btn-primary"]],
  template: function SuccessDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your order has been submitted successfully.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  hostUrl: "http://localhost:8080/"
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map