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
exports.CustomerModel = void 0;
//Imports
const mongoose_1 = __importDefault(require("mongoose"));
const DbConnection_1 = require("../DbConnection");
const uuid_1 = require("uuid");
//Mongoose connections and object
let mongooseConnection = DbConnection_1.DbConnection.mongooseConnection;
let mongooseObj = DbConnection_1.DbConnection.mongooseInstance;
//Class for customer model
class CustomerModel {
    //constructor initilize the create schema and model
    constructor() {
        this.createSchema();
        this.createModel();
    }
    //function to create the schema for customer
    createSchema() {
        this.schema = new mongoose_1.default.Schema({
            customerId: { type: String, require: true },
            email: { type: String, require: true },
            name: { type: String, require: true },
            address: { type: String, require: true },
            contactNumber: { type: String, require: true },
            isCheckedIn: {
                type: Boolean,
                default: false,
            },
            customerType: {
                type: String,
                default: "Freemium",
            }
        }, { collection: "Customer" });
    }
    //function to create model
    createModel() {
        if (!mongooseConnection.models.Customer) {
            this.model = mongooseConnection.model("Customer", this.schema);
        }
        else {
            this.model = mongooseConnection.models.Customer;
        }
    }
    // function for retriving specific customer
    retrieveCustomer(response, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = this.model.findOne(filter);
                query.then((CustomerDetail) => {
                    if (!CustomerDetail) {
                        console.error({ error: "Unable to find Customer" });
                        response.status(404).send({ error: "Customer not found" });
                    }
                    else {
                        response.send(CustomerDetail);
                    }
                });
            }
            catch (err) {
                console.error(err);
                response
                    .sendStatus(500)
                    .send({
                    message: "Internal server error while retrieving Customer detail",
                });
            }
        });
    }
    createCustomer(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customerId = (0, uuid_1.v4)();
                const name = request.name;
                const email = request.email;
                if (!name || !email || !customerId) {
                    if (response) {
                        return response.status(400).json({ message: "Please fill all fields" });
                    }
                    else {
                        throw new Error("Please fill all fields");
                    }
                }
                const customer = new this.model({
                    customerId,
                    email,
                    name,
                    address: "",
                    contactNumber: "",
                    isCheckedIn: false,
                    customerType: "Freemium",
                });
                const resp = yield customer.save();
                console.log("Customer created successfully");
                const responseData = {
                    customerId: customerId,
                    email: email,
                    name: name,
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
                if (response) {
                    response.error(500).json({ message: "Error Creating Customer..." });
                }
                else {
                    throw new Error("Error Creating Customer...");
                }
            }
        });
    }
    //update customer
    //only update name, address, contact number
    updateCustomer(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customerId = request.params.customerId;
                const { name, address, contactNumber } = request.body;
                if (!name || !address || !contactNumber)
                    return response.status(400).json({ message: "Please fill all the fields" });
                //find the user and update it in customer collection
                const updateCustomer = yield this.model.findOneAndUpdate({ customerId }, { name, address, contactNumber }, { new: true });
                if (!updateCustomer)
                    return response.status(400).json({ message: "Customer Not found" });
                return response.status(200).json({
                    message: "Customer Updated",
                    customer: updateCustomer,
                });
            }
            catch (error) {
                console.log("Error Updating Customer:...");
                response.status(500).json({ message: "Error Updating Customer" });
            }
        });
    }
}
exports.CustomerModel = CustomerModel;
