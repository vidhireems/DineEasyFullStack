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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6839);













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
  path: 'updateProfile/:customerId',
  component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent
}, {
  path: 'restaurants/:resId',
  component: _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_4__.RestaurantComponent,
  children: [{
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }, {
    path: 'overview',
    component: _restaurant_overview_restaurant_overview_component__WEBPACK_IMPORTED_MODULE_5__.RestaurantOverviewComponent
  }, {
    path: 'menu',
    component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent
  }, {
    path: 'menu/:menuId/items',
    component: _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_2__.MenuItemsComponent
  }, {
    path: 'order',
    component: _order_order_component__WEBPACK_IMPORTED_MODULE_6__.OrderComponent
  }, {
    path: 'menu/:menuId/items/order',
    component: _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_7__.OrderItemsComponent
  }]
}, {
  path: 'invoice',
  component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__.InvoiceComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
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





function AppComponent_ng_container_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_14_div_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.profile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Update Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_14_div_3_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.authenticationService.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13)(2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_14_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.toggleOptions());
    })("mouseenter", function AppComponent_ng_container_14_Template_img_mouseenter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.showOptions());
    })("mouseleave", function AppComponent_ng_container_14_Template_img_mouseleave_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.hideOptions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_ng_container_14_div_3_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.authenticationService.user.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showOptionsFlag);
  }
}
function AppComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_template_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.authenticationService.login());
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
  profile() {
    this.router.navigateByUrl('/updateProfile/' + this.authenticationService.user.userId);
  }
  showOptions() {
    this.showOptionsFlag = true;
  }
  hideOptions(event) {
    setTimeout(() => {
      this.showOptionsFlag = false;
    }, 3000);
  }
  toggleOptions() {
    this.showOptionsFlag = !this.showOptionsFlag;
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
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], [1, "navbar", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "dine-easy"], [1, "d-flex", "align-items-start"], [1, "d-flex", "buttons"], [4, "ngIf", "ngIfElse"], ["loginBlock", ""], [1, "content"], [1, "fixed-footer", "text-center", "text-lg-start", "section-spacing", 2, "background-color", "#ECCDB4"], [1, "text-black", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], [1, "dropdown"], ["alt", "Profile Picture", 1, "profile-pic", 3, "src", "click", "mouseenter", "mouseleave"], ["class", "dropdown-content", 4, "ngIf"], [1, "dropdown-content"], ["href", "#", 3, "click"], [1, "btn", "my-button", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_ng_container_14_Template, 4, 2, "ng-container", 8);
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
  styles: [".custom-image[_ngcontent-%COMP%] {\n    width: 100vw;\n    height:80vh;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    background: cadetblue;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 100;\n  }\n  \n  .navbar-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  \n  .navbar-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  \n  .fixed-footer[_ngcontent-%COMP%] {\n    margin-top: auto;\n    width: 100%;\n  }\n\n  .section-spacing[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    margin-bottom: 20px;\n  }\n\n  .dine-easy[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight:bold;\n    text-decoration: none;\n    color: black;\n    letter-spacing: 0.2em;\n  }\n\n  .search-custom[_ngcontent-%COMP%] {\n    color : rgb(74, 132, 213);\n    border-color:rgb(74, 132, 213);\n  }\n.buttons[_ngcontent-%COMP%]{\n  display: flex;\n  gap: 1cm;\n  text-transform: uppercase;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n  .my-button[_ngcontent-%COMP%] {\n    background-color: #000000; \n    color: #FFFFFF;\n    transition: background-color 0.3s ease; \n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: small;\n    letter-spacing: 2px;\n  }\n  \n  .my-button[_ngcontent-%COMP%]:hover {\n    background-color: #f2fdf2; \n    color: #000000; \n    border: #000000 1px solid;\n  }\n\n  .profile-pic[_ngcontent-%COMP%] {\n    width: 50px; \n    height: 50px;\n    border-radius: 50%;\n  }\n\n  .dropdown[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n  }\n\n  .dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    z-index: 1;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    padding: 12px 16px;\n  }\n\n  .dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n    display: block;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmO0lBQ0ksWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDhCQUE4QjtFQUNoQztBQUNGO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVzLmNzcyAqL1xuLmN1c3RvbS1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDo4MHZoO1xuICB9XG4gIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICBcbiAgLm5hdmJhci1sZWZ0IGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIFxuICAubmF2YmFyLXJpZ2h0IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5maXhlZC1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2VjdGlvbi1zcGFjaW5nIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZGluZS1lYXN5e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICB9XG5cbiAgLnNlYXJjaC1jdXN0b20ge1xuICAgIGNvbG9yIDogcmdiKDc0LCAxMzIsIDIxMyk7XG4gICAgYm9yZGVyLWNvbG9yOnJnYig3NCwgMTMyLCAyMTMpO1xuICB9XG4uYnV0dG9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxY207XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4gIC5teS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IFxuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIH1cbiAgXG4gIC5teS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmZkZjI7IFxuICAgIGNvbG9yOiAjMDAwMDAwOyBcbiAgICBib3JkZXI6ICMwMDAwMDAgMXB4IHNvbGlkO1xuICB9XG5cbiAgLnByb2ZpbGUtcGljIHtcbiAgICB3aWR0aDogNTBweDsgXG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIH1cblxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 2193);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _service_restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/restaurant.service */ 6024);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ 1105);
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/menu.service */ 3225);
/* harmony import */ var _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-items/menu-items.component */ 49);
/* harmony import */ var _service_menu_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/menu-items.service */ 5359);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/order.service */ 2909);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 9240);
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./restaurants/restaurants.component */ 3214);
/* harmony import */ var _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./restaurant/restaurant.component */ 8071);
/* harmony import */ var _restaurant_overview_restaurant_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restaurant-overview/restaurant-overview.component */ 1301);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order/order.component */ 3779);
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-items/order-items.component */ 6945);
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoice/invoice.component */ 1140);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 6839);























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
  providers: [_service_restaurant_service__WEBPACK_IMPORTED_MODULE_3__.RestaurantService, _service_menu_service__WEBPACK_IMPORTED_MODULE_5__.MenuService, _service_menu_items_service__WEBPACK_IMPORTED_MODULE_7__.MenuItemsService, _service_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent, _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_6__.MenuItemsComponent, _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_9__.RestaurantsComponent, _restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_10__.RestaurantComponent, _restaurant_overview_restaurant_overview_component__WEBPACK_IMPORTED_MODULE_11__.RestaurantOverviewComponent, _order_order_component__WEBPACK_IMPORTED_MODULE_12__.OrderComponent, _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_13__.OrderItemsComponent, _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__.InvoiceComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__.ProfileComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule]
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
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../restaurants/restaurants.component */ 3214);



class HomeComponent {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
    authenticationService.checkAuthStatus();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
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
  styles: [".custom-image[_ngcontent-%COMP%] {\n  width: 100vw;\n  height:80vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1pbWFnZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0Ojgwdmg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
      const itemsJson = params['items'];
      this.resId = params['resId'];
      this.selectedItems = itemsJson ? JSON.parse(itemsJson) : [];
      console.log("selectedItems:", this.selectedItems);
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
  styles: [".invoice[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  width: 400px;\n  top: 80px;\n  padding: 50px;\n  background-color: #f2f2f2;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 0 auto;\n  text-align: center; \n}\n\n.invoice-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.item-list[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.total[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  text-align: right;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.download-button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background-color: #4caf50;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.line-section[_ngcontent-%COMP%] {\n    border-top: 1px solid #b5a7a7;\n    margin: 10px 0;\n  }\n\n  .back-button[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 80px;\n    left: 10px;\n    padding: 10px;\n    background-color: #141715;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n  \n  .back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQixFQUFFLHdDQUF3QztBQUM5RDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52b2ljZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDQwMHB4O1xuICB0b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBlbnRpcmUgaW52b2ljZSBjb250YWluZXIgKi9cbn1cblxuLmludm9pY2UtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b3RhbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZG93bmxvYWQtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpbmUtc2VjdGlvbiB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiNWE3YTc7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cblxuICAuYmFjay1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDgwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE3MTU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5iYWNrLWJ1dHRvbiBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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
  styles: [".container[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.section-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: Arial, sans-serif;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border: 1px solid #e9ecef;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: bold;\n  color: #343a40;\n  text-align: left;\n  text-transform: uppercase;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #343a40;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background-color: #f1f3f5;\n  animation: _ngcontent-%COMP%_fade 0.3s;\n}\n\n@keyframes _ngcontent-%COMP%_fade {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.8;\n  }\n}\n\n.router-outlet[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border: 1px solid #dee2e6;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_slideUp 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 576px) {\n  .col-md-11[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS1pdGVtcy9tZW51LWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc2VjdGlvbi1zcGFjaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxudGFibGUgdHI6aG92ZXIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y1O1xuICBhbmltYXRpb246IGZhZGUgMC4zcztcbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbi5yb3V0ZXItb3V0bGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBhbmltYXRpb246IHNsaWRlVXAgMC41cztcbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29sLW1kLTExIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
  styles: [".nav.nav-tabs[_ngcontent-%COMP%] {\n    background-color: #f8f9fa;\n    margin-top: 1.4cm;\n    padding: 10px;\n    border-bottom: 2px solid #dee2e6;\n    display: flex;\n    justify-content: flex-start\n  }\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: #343a40;\n    border: none;\n    cursor: pointer;\n    border-radius: 0;\n    padding: 10px 15px;\n    font-weight: bold;\n    transition: background-color 0.3s ease;\n    background-color: transparent;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n  }\n\n  .nav.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n    background-color: #000000;\n    color: #fff;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2Lm5hdi10YWJzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIG1hcmdpbi10b3A6IDEuNGNtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcbiAgfVxuICAubmF2Lm5hdi10YWJzIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLm5hdi5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjMzQzYTQwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB9XG5cbiAgLm5hdi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/order.service */ 2909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order/order.component */ 3779);










function OrderItemsComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label")(3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function OrderItemsComponent_tr_18_Template_input_change_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const menuItem_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.toggleSelection(menuItem_r2.itemId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", menuItem_r2 == null ? null : menuItem_r2.itemId)("checked", ctx_r0.isSelected(menuItem_r2.itemId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r2.price);
  }
}
function OrderItemsComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderItemsComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.showInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Get Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class OrderItemsComponent {
  constructor(menuItemsService$, OrderService$, route, router) {
    this.menuItemsService$ = menuItemsService$;
    this.OrderService$ = OrderService$;
    this.route = route;
    this.router = router;
    this.menuId = null;
    this.resId = null;
    this.selectedItems = [];
    this.showInvoiceButton = false;
    this.data = [];
  }
  ngOnInit() {
    // empty the selected items
    this.itemIds = [];
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
          this.menuItems = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(data);
        });
      }
    });
  }
  toggleSelection(itemId) {
    this.menuItems.subscribe(items => {
      const menuItem = items[0].menu.find(item => item.itemId === itemId);
      if (menuItem) {
        if (this.isSelected(itemId)) {
          this.selectedItems = this.selectedItems.filter(item => item.itemId !== itemId);
        } else {
          this.selectedItems.push({
            itemId: menuItem.itemId,
            name: menuItem.name,
            price: menuItem.price,
            category: menuItem.category
          });
        }
      }
    });
  }
  //check if the item is selected
  isSelected(itemId) {
    return this.selectedItems.includes(itemId);
  }
  sendOrder() {
    console.log("OrderSubmitted");
    this.itemIds = this.selectedItems.map(item => item.itemId);
    //calculate quantity
    this.quantity = this.itemIds.length;
    let data = {
      "customerId": "asdasdasd",
      quantity: this.quantity,
      itemIds: this.itemIds
    };
    this.OrderService$.postOrder(data, this.resId, this.menuId).subscribe(response => {
      console.log("response:", response);
      this.showInvoiceButton = true;
    });
  }
  showInvoice() {
    // Convert selectedItems to JSON string
    const itemsJson = JSON.stringify(this.selectedItems);
    // Pass the selected items as query parameters when navigating to the InvoiceComponent
    this.router.navigate(['/invoice'], {
      queryParams: {
        items: itemsJson,
        resId: this.resId
      }
    });
  }
}
OrderItemsComponent.ɵfac = function OrderItemsComponent_Factory(t) {
  return new (t || OrderItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__.MenuItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
OrderItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: OrderItemsComponent,
  selectors: [["app-order-items"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_service_menu_items_service__WEBPACK_IMPORTED_MODULE_0__.MenuItemsService, _service_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService])],
  decls: 24,
  vars: 4,
  consts: [[1, "container"], [1, "row", "section-spacing"], [1, "col-md-11"], [3, "submit"], [1, "table"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "button", "btn-primary"], ["class", "invoice-button", 3, "click", 4, "ngIf"], ["type", "checkbox", "name", "menuItem", 3, "value", "checked", "change"], [1, "invoice-button", 3, "click"]],
  template: function OrderItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-order");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function OrderItemsComponent_Template_form_submit_5_listener() {
        return ctx.sendOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 4)(7, "thead")(8, "tr")(9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Category");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, OrderItemsComponent_tr_18_Template, 10, 5, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, OrderItemsComponent_button_22_Template, 2, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 2, ctx.menuItems)) == null ? null : tmp_0_0[0] == null ? null : tmp_0_0[0].menu);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showInvoiceButton);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _order_order_component__WEBPACK_IMPORTED_MODULE_2__.OrderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".invoice-button[_ngcontent-%COMP%] {\n    float: right;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3JkZXItaXRlbXMvb3JkZXItaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZvaWNlLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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





function ProfileComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email does not match the currently logged-in user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ProfileComponent {
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.customerInfo = {};
    authenticationService.checkAuthStatus();
  }
  isEmailSameAsLoggedInUser() {
    return this.customerInfo.email === this.authenticationService.user.email;
  }
  SaveProfile() {
    this.authenticationService.updateProfile(this.customerInfo).subscribe(response => {
      console.log('Profile updated successfully:', response);
      this.router.navigateByUrl('/');
    }, error => {
      console.error('Error updating profile:', error);
    });
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
  decls: 44,
  vars: 7,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], [1, "profile-container"], [1, "profile-title"], [1, "profile-form"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-group-row"], [1, "form-group-item"], ["for", "email"], ["id", "email", "type", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "phone"], ["id", "phone", "type", "tel", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "address"], ["id", "address", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "customerType", 1, "form-group"], ["for", "customerType"], ["required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Freemium"], ["value", "Premium"], [1, "table-button"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body")(8, "div", 3)(9, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Make a profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.customerInfo.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10)(18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email ID: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.customerInfo.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProfileComponent_div_21_Template, 2, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10)(23, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Phone: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.customerInfo.contactNumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6)(27, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.customerInfo.address = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Want to be Premium member?:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_33_listener($event) {
        return ctx.customerInfo.customerType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Freemium");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Premium");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23)(39, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_39_listener() {
        return ctx.SaveProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Save Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_41_listener() {
        return ctx.CloseProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.authenticationService.user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEmailSameAsLoggedInUser());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.contactNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.address);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.customerInfo.customerType);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: [".profile-container[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 1.3cm auto 0;\n    padding: 40px;\n    background-color: #f8f8f8;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n\n  }\n\n  .profile-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: bold;\n    margin-bottom: 20px;\n    color: #333;\n  }\n\n  .profile-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n\n  .profile-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n  }\n\n  .profile-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px;\n\n    border: 1px solid #ccc;\n    border-radius: 10px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    background-color: #dc3545;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n\n  .btn[_ngcontent-%COMP%]:hover {\n    background-color: #c82333;\n  }\n  .form-group-row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .form-group-item[_ngcontent-%COMP%] {\n    flex-basis: 48%;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7O0VBRTFDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0lBRVosc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDEuM2NtIGF1dG8gMDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICB9XG5cbiAgLnByb2ZpbGUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG5cbiAgLnByb2ZpbGUtZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLnByb2ZpbGUtZm9ybSBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnByb2ZpbGUtZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAuYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xuICB9XG4gIC5mb3JtLWdyb3VwLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuZm9ybS1ncm91cC1pdGVtIHtcbiAgICBmbGV4LWJhc2lzOiA0OCU7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
  styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.image-width[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.section-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line-section[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(172, 165, 165);\n  margin: 20px 0;\n}\n\n.icon-yellow[_ngcontent-%COMP%] {\n  color: rgb(218, 122, 32);\n}\n\n.icon-blue[_ngcontent-%COMP%] {\n  color: navy;\n}\n\n.icon-grey[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.icon-green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.shadow-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  gap: 10px;\n}\n\n.icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.restaurant-name[_ngcontent-%COMP%] {\n  color: #333333;\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: small;\n  font-weight: 800;\n}\n.icon-info[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  justify-content: center; \n  gap: 10px;\n}\n.info-text[_ngcontent-%COMP%] {\n  color: grey;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdGF1cmFudC1vdmVydmlldy9yZXN0YXVyYW50LW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmltYWdlLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNlY3Rpb24tc3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5saW5lLXNlY3Rpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE3MiwgMTY1LCAxNjUpO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmljb24teWVsbG93IHtcbiAgY29sb3I6IHJnYigyMTgsIDEyMiwgMzIpO1xufVxuXG4uaWNvbi1ibHVlIHtcbiAgY29sb3I6IG5hdnk7XG59XG5cbi5pY29uLWdyZXkge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmljb24tZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5zaGFkb3ctYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaWNvbi1jb250YWluZXIgbWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnJlc3RhdXJhbnQtbmFtZSB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmhlYWRpbmcge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmljb24taW5mb3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICBnYXA6IDEwcHg7XG59XG4uaW5mby10ZXh0IHtcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/restaurant.service */ 6024);
/* harmony import */ var _service_restaurant_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/restaurant-data.service */ 2045);




const _c0 = function (a1) {
  return ["/restaurants", a1, "overview"];
};
const _c1 = function (a1) {
  return ["/restaurants", a1, "menu"];
};
const _c2 = function (a1) {
  return ["/restaurants", a1, "order"];
};
class RestaurantComponent {
  constructor(route, service, restaurantDataService) {
    this.route = route;
    this.service = service;
    this.restaurantDataService = restaurantDataService;
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
  return new (t || RestaurantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_restaurant_service__WEBPACK_IMPORTED_MODULE_0__.RestaurantService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_restaurant_data_service__WEBPACK_IMPORTED_MODULE_1__.RestaurantDataService));
};
RestaurantComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RestaurantComponent,
  selectors: [["app-restaurant"]],
  decls: 25,
  vars: 12,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"], ["alt", "Dineasy Logo", 1, "custom-image", 3, "src"], [1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["aria-current", "page", "routerLinkActive", "active", 1, "nav-link", "active", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink"]],
  template: function RestaurantComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0)(2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "head")(4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "header")(11, "ul", 5)(12, "li", 6)(13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "OverView");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 6)(16, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 6)(19, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Reservation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 6)(22, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.restaurant.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.restaurant.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.restaurant.resId));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, ctx.restaurant.resId));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/restaurants/" + ctx.restaurant.resId + "/reservation");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx.restaurant.resId));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  styles: [".custom-image[_ngcontent-%COMP%] {\n    width: 100vw;\n    height:80vh;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: large;\n    color: rgb(119, 84, 20);\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n        color: grey;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdGF1cmFudC9yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCO0VBQ0E7UUFDTSxXQUFXO0lBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWltYWdlIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0Ojgwdmg7XG4gIH1cbiAgLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGNvbG9yOiByZ2IoMTE5LCA4NCwgMjApO1xuICB9XG4gIC5uYXYtbGluazpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
  styles: [".image-width[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n\n  .section-spacing[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 1px;\n    margin-bottom: 20px;\n  }\n\n  .line-section[_ngcontent-%COMP%] {\n    border-top: 2px solid black;\n    margin: 5px 0;\n  }\n\n  .card[_ngcontent-%COMP%] {\n  transition: transform 0.5s;\n  cursor: pointer;\n  background-color: #F8F6F4;\n    ;\n}\n.card-title[_ngcontent-%COMP%]{\n  margin-top: 3px;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.09);\n}\n.text[_ngcontent-%COMP%]{\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight:lighter;\n  letter-spacing: 0.2em;\n}\n\n.view-restaurant[_ngcontent-%COMP%]{\n  border-radius: 0.2cm;\n  padding: 0.2cm;\n  border: #000000 1px solid;\n} \n.info[_ngcontent-%COMP%]{\n  text-transform: uppercase;\n  font-size: medium;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.search-input[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  outline: none;\n  \n  border: 2px solid #b3b3b3;\n  box-shadow: none;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 3px;\n  padding: 8px 12px;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #f8f9fa\n}\n.clear-button[_ngcontent-%COMP%] {\n  background-color: #f2fdf2; \n  color: #000000;\n  transition: background-color 0.3s ease; \n  text-decoration: none;\n}\n\n.clear-button[_ngcontent-%COMP%]:hover {\n  background-color: #000000; \n  color: #f2fdf2; \n  border: #000000 1px solid;\n}\n.input-group[_ngcontent-%COMP%]{\n  gap: 1cm;\n}\n\n.dining[_ngcontent-%COMP%]{\n  font-size:xx-large;\n  letter-spacing: 5px;\n}\n\n.my-button[_ngcontent-%COMP%] {\n  background-color: #000000; \n  color: #FFFFFF;\n  transition: background-color 0.3s ease; \n  text-decoration: none;\n}\n\n.my-button[_ngcontent-%COMP%]:hover {\n  background-color: #f2fdf2; \n  color: #000000; \n  border: #000000 1px solid;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzdGF1cmFudHMvcmVzdGF1cmFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0VBQ2Y7O0VBRUE7RUFDQSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7O0VBRWIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Utd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5zZWN0aW9uLXNwYWNpbmcge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAubGluZS1zZWN0aW9uIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjZGNDtcbiAgICA7XG59XG4uY2FyZC10aXRsZXtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xufVxuLnRleHR7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xufVxuXG4udmlldy1yZXN0YXVyYW50e1xuICBib3JkZXItcmFkaXVzOiAwLjJjbTtcbiAgcGFkZGluZzogMC4yY207XG4gIGJvcmRlcjogIzAwMDAwMCAxcHggc29saWQ7XG59IFxuLmluZm97XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLnNlYXJjaC1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiM2IzYjM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG59XG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhXG59XG4uY2xlYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZmRmMjsgXG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsZWFyLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IFxuICBjb2xvcjogI2YyZmRmMjsgXG4gIGJvcmRlcjogIzAwMDAwMCAxcHggc29saWQ7XG59XG4uaW5wdXQtZ3JvdXB7XG4gIGdhcDogMWNtO1xufVxuXG4uZGluaW5ne1xuICBmb250LXNpemU6eHgtbGFyZ2U7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5teS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyBcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubXktYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZmRmMjsgXG4gIGNvbG9yOiAjMDAwMDAwOyBcbiAgYm9yZGVyOiAjMDAwMDAwIDFweCBzb2xpZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    this.hostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hostUrl;
  }
  setAuthenticated() {
    this.isLoggedIn = true;
  }
  checkAuthStatus() {
    this.http.get(this.hostUrl + 'checkAuth').subscribe(response => {
      if (response.authenticated) {
        this.isLoggedIn = true;
        this.user = response.user;
        console.log(this.user);
        this.getCustomerInfo(this.user.userId).subscribe(data => {
          this.customer = data; // Assuming the response is a single customer object
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
  getCustomerInfo(userId) {
    return this.http.get(this.hostUrl + 'user/' + userId);
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
  login() {
    window.location.href = '/auth/google';
  }
  logout() {
    this.isLoggedIn = false;
    this.http.post(this.hostUrl + 'logout', {}).subscribe(response => {
      this.router.navigateByUrl('/');
    }, error => {
      console.error('Error:', error);
    });
  }
  updateProfile(profileData) {
    return this.http.put(this.hostUrl + 'updateProfile/' + this.user.userId, profileData);
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
  postOrder(data, resId, menuId) {
    let url = this.hostUrl + 'restaurants/' + resId + '/menu/' + menuId + '/items/order';
    console.log(url);
    console.log(data);
    return this.httpClient.post(url, data);
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