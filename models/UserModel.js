"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
//Imports
const mongoose_1 = __importDefault(require("mongoose"));
const DbConnection_1 = require("../DbConnection");
const bcrypt = require('bcrypt');
const CustomerModel_1 = require("./CustomerModel");
//Mongoose connections and object
let mongooseConnection = DbConnection_1.DbConnection.mongooseConnection;
let mongooseObj = DbConnection_1.DbConnection.mongooseInstance;
//Class for restaurant model
class UserModel {
    //constructor initilize the create schema and model
    constructor() {
        this.createSchema();
        this.createModel();
        this.customer = new CustomerModel_1.CustomerModel();
    }
    //function to create the schema for restaurants
    createSchema() {
        this.schema = new mongoose_1.default.Schema({
            ssoId: String,
            userId: String,
            name: String,
            profilePic: String,
            email: String,
            userType: String,
        }, { collection: 'Users' });
    }
    //function to create model for the User interface and schema
    createModel() {
        this.model = mongooseConnection.model("Users", this.schema);
    }
    // function for retriving specific user
    retrieveUser(response, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const UserDetail = yield this.model.findOne(filter);
                if (response) {
                    response.json(UserDetail);
                }
                return UserDetail;
            }
            catch (err) {
                console.error(err);
                if (response) {
                    response.json({ message: "Internal server error while retrieving User detail" });
                    response.sendStatus(500);
                }
                return { message: "Internal server error while retrieving User detail" };
            }
        });
    }
    // add new user
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Extract the required data from the 'data' parameter
                const { ssoId, name, profilePic, email, userType } = request;
                const customerResponse = yield this.customer.createCustomer({ email: email, name: name, profilePic: profilePic });
                if (!customerResponse) {
                    throw new Error("Error Creating User because customer could not be created");
                }
                const userId = customerResponse.customerId;
                // Perform the logic to create a user based on the provided data
                const newUser = new this.model({
                    ssoId,
                    userId,
                    name,
                    profilePic,
                    email,
                    userType
                });
                yield newUser.save();
                console.log("User created successfully");
                const responseData = {
                    ssoId: ssoId,
                    userId: userId,
                    email: email,
                    name: name,
                    profilePic: profilePic,
                    userType: userType
                };
                if (response) {
                    response.json(responseData);
                    response.status(200);
                }
                else {
                    return responseData;
                }
            }
            catch (error) {
                console.error("Error Creating User:", error);
                throw new Error("Error Creating User");
            }
        });
    }
}
exports.UserModel = UserModel;
