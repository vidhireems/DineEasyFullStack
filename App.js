"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
//Imports
const RestaurantModel_1 = require("./models/RestaurantModel");
const MenuModel_1 = require("./models/MenuModel");
const MenuItemsModel_1 = require("./models/MenuItemsModel");
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
const OrderModel_1 = require("./models/OrderModel");
const CustomerModel_1 = require("./models/CustomerModel");
const cors_1 = __importDefault(require("cors"));
const ReservationModel_1 = require("./models/ReservationModel");
const GooglePassport_1 = __importDefault(require("./GooglePassport"));
const passport = require("passport");
const path = require("path");
const uuid_1 = require("uuid");
const UserModel_1 = require("./models/UserModel");
const session = require('express-session');
const cookieParser = require('cookie-parser');
// Class App which creates and configure the express application
class App {
    // Constructor which runs the configuration on the express application and calls the routes function
    constructor() {
        this.expressApp = express();
        this.Restaurants = new RestaurantModel_1.RestaurantModel();
        this.Menu = new MenuModel_1.MenuModel();
        this.MenuItems = new MenuItemsModel_1.MenuItemsModel();
        this.Orders = new OrderModel_1.OrderModel();
        this.Customer = new CustomerModel_1.CustomerModel();
        this.Reservation = new ReservationModel_1.ReservationModel();
        this.googlePassportObj = new GooglePassport_1.default();
        this.users = UserModel_1.UserModel.getInstance();
        this.sessionKey = (0, uuid_1.v4)();
        this.middleware();
        this.routes();
    }
    // Configure the middleware of express application
    middleware() {
        this.expressApp.use((0, cors_1.default)());
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(express.static(path.join(__dirname, '/frontend/dist')));
        this.expressApp.use(session({
            name: 'DineEasy-Cookie',
            secret: 'keyboard ysaeenid',
            resave: true,
            saveUninitialized: true
        }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    }
    // Validates if the user is authenticated for an API
    validateAuth(req, res, next) {
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/');
    }
    // Api Endpoints....
    routes() {
        let router = express.Router();
        // Google OAuth callback for localhost
        router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }), (req, res) => {
            console.log("Localhost: successfully authenticated user and returned to callback page.");
            res.redirect('/');
        });
        // Google OAuth callback for production environment
        router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
            console.log("successfully authenticated user and returned to callback page.");
            res.redirect('/');
        });
        // Checks if the current user is authenticated and gives the user's information as response 
        router.get('/checkAuth', (req, res) => {
            if (req.isAuthenticated()) {
                res.json({ authenticated: true, user: req.user });
            }
            else {
                res.json({ authenticated: false });
            }
        });
        // Gets the user information based on id.
        router.get('/user/:userId', this.validateAuth, (req, res) => {
            if (req.user) {
                let userId = req.params.userId;
                this.Customer.retrieveCustomer(res, { customerId: userId });
            }
            else {
                console.log('User not authenticated');
                res.status(401).json({ message: 'User not authenticated' });
            }
        });
        // Gets customer information
        router.put('/profile/:customerId', this.validateAuth, (req, res) => {
            if (req.user) {
                this.Customer.updateCustomer(req, res);
            }
            else {
                console.log('User not authenticated');
                res.status(401).json({ message: 'User not authenticated' });
            }
        });
        //retrives all the orders of a particular user
        router.get('/myorders', this.validateAuth, (req, res) => {
            const userdata = req.user;
            console.log(userdata);
            console.log("retriving all the orders of a user");
            this.Orders.getAllOrderOfUser(userdata, res);
        });
        // Handles logout of a user 
        router.post('/logout', this.validateAuth, (req, res, next) => {
            req.session.destroy((err) => {
                if (err) {
                    console.error('Error destroying session:', err);
                    return next(err);
                }
                req.logout((err) => {
                    if (err) {
                        console.error('Error logging out:', err);
                        return next(err);
                    }
                    res.clearCookie('DineEasy-Cookie');
                    res.sendStatus(200);
                    res.redirect('/');
                });
            });
        });
        // Retrieve all the restaurant endpoint
        router.get("/restaurants", (req, res) => {
            console.log("Query all the restaurants");
            this.Restaurants.retrieveAllRestaurants(res);
        });
        // Retrieve specific restaurant details
        router.get("/restaurants/:resId", (req, res) => {
            let resId = req.params.resId;
            console.log("Query single restaurant with id: " + resId);
            this.Restaurants.getRestaurantDetailsById(res, { resId: resId });
        });
        // Routing post order requests to save data
        //Create restaurant
        router.post("/restaurants", (request, response) => {
            console.log("Creating restaurant");
            this.Restaurants.createRestaurant(request, response);
        });
        //Delete Restaurant
        router.delete("/restaurants/:resId", (req, res) => {
            this.MenuItems.deleteAllMenuItemsForRestaurant(req, res, () => {
                this.Menu.deleteAllMenuForRestaurant(req, res, () => {
                    this.Restaurants.deleteRestaurant(req, res);
                });
            });
        });
        //Update restaurant
        router.put("/restaurants/:resId", (req, res) => {
            this.Restaurants.updateRestaurant(req, res);
        });
        //Retrieve Menu
        router.get("/restaurants/:resId/menu", (req, res) => {
            var resId = req.params.resId;
            console.log("Query single menu with restid: " + resId);
            this.Menu.retrieveMenu(res, { resId: resId });
        });
        //Create menu
        router.post("/restaurants/:resId/menu", (req, res) => {
            this.Menu.createMenu(req, res);
        });
        //Delete menu
        router.delete("/restaurants/:resId/menu/:menuId", (req, res) => {
            this.MenuItems.deleteAllMenuItems(req, res, () => {
                this.Menu.deleteMenu(req, res);
            });
        });
        //Retrieve Menu Items
        router.get("/restaurants/:resId/menu/:menuId/items", (req, res) => {
            var resId = req.params.resId;
            var menuId = req.params.menuId;
            console.log("Query single menu of menu id: " + menuId + " with restid: " + resId);
            this.MenuItems.retrieveMenuItems(res, {
                menuId: menuId,
                resId: resId,
            });
        });
        // Create menu Items
        router.post("/restaurants/:resId/menu/:menuId/items", (req, res) => {
            console.log("In post menu item");
            var resId = req.params.resId;
            var menuId = req.params.menuId;
            this.MenuItems.createMenuItems(req, res, {
                menuId: menuId,
                resId: resId
            });
        });
        // Delete menu Items
        router.delete("/restaurants/:resId/menu/:menuId/items", (req, res) => {
            this.MenuItems.deleteMenuItems(req, res);
        });
        // update menu Items
        router.patch("/restaurants/:resId/menu/:menuId/items", (req, res) => {
            this.MenuItems.updateMenuItems(req, res);
        });
        // post order - figure out the route
        router.post("/restaurants/:resId/menu/:menuid/items/order", (request, response) => {
            console.log("posting order");
            this.Orders.createOrder(request, response);
        });
        // post- create customer
        router.post("/addcustomer", (request, response) => {
            console.log("Adding New Customer:...");
            this.Customer.createCustomer(request, response);
        });
        //post- customer update
        router.post("/updatecustomer/:customerId", (req, res) => {
            console.log("Update Customer:...");
            this.Customer.updateCustomer(req, res);
        });
        // post reservations
        router.post("/addreservation", (request, response) => {
            console.log("Adding New Reservation");
            this.Reservation.createReservation(request, response);
        });
        // get reservations
        router.get("/reservation", (request, response) => {
            console.log("Query all reservations");
            this.Reservation.getAllReservations(response);
        });
        // update reservation
        router.patch("/reservation/:reservationId", (request, response) => {
            console.log("Updating Reservation");
            this.Reservation.updateReservation(request, response);
        });
        // delete reservation
        router.delete("/reservation/:reservationId", (request, response) => {
            console.log("Deleting Reservation");
            this.Reservation.cancelReservation(request, response);
        });
        this.expressApp.use("/", router);
    }
}
exports.App = App;
