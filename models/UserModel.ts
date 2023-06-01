//Imports
import Mongoose from 'mongoose';
import { DbConnection } from "../DbConnection";
import { IUserModel } from '../interfaces/IUserModel';
const bcrypt = require('bcrypt');
import { v4 as uuidv4 } from "uuid";
import { CustomerModel } from './CustomerModel';

//Mongoose connections and object
let mongooseConnection = DbConnection.mongooseConnection;
let mongooseObj = DbConnection.mongooseInstance;

//Class for restaurant model
class UserModel {
    public schema:any;
    public model:any;
    public customer: CustomerModel;

    //constructor initilize the create schema and model
    public constructor() {
        this.createSchema();
        this.createModel();
        this.customer = new CustomerModel();
    }

    //function to create the schema for restaurants
    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                ssoId: String, 
                userId: String,
                name: String,
                email: String,
                userType: String,
            }, {collection: 'Users'}
        );
    }

    //function to create model for the User interface and schema
    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("Users", this.schema);
    }
    
    // function for retriving specific user
    public async retrieveUser(response:any, filter:Object): Promise<any> {

        try {
            const UserDetail = await this.model.findOne(filter);
            if(response)
            {
                response.json(UserDetail);
            }
            console.log(UserDetail)
            return UserDetail;
        }catch(err) {
            console.error(err);
            if(response)
            {
                response.json({ message: "Internal server error while retrieving User detail" });
                response.sendStatus(500);
            }
            return { message: "Internal server error while retrieving User detail" };
        }
    }
 
    // add new user
    public async createUser(request: any, response?: any): Promise<any> {
        try {

            // Extract the required data from the 'data' parameter
            const {ssoId, name, email, userType} = request;
            console.log("user: " + ssoId + " name: " + name + " email: " + email)
            const customerResponse = await this.customer.createCustomer( {email: email, name: name});
            console.log(customerResponse)
            if(!customerResponse)
            {
                throw new Error("Error Creating User because customer could not be created");
            }

            const userId = customerResponse.customerId;
          
            // Perform the logic to create a user based on the provided data
            const newUser = new this.model({
                ssoId,
                userId,
                name,
                email,
                userType
            });

            await newUser.save();
            console.log("User created successfully" );

            const responseData = {
                ssoId: ssoId,
                userId: userId,
                email: email,
                name: name,
                userType: userType
              };
          
              if (response) {
                response.json(responseData);
                response.status(200);
              } else {
                return responseData;
              }
        } catch (error) {
            console.error("Error Creating User:", error);
            throw new Error("Error Creating User");
        }
    }
    
}

export {UserModel};