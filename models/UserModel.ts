//Imports
import Mongoose from 'mongoose';
import { DbConnection } from "../DbConnection";
import { IUserModel } from '../interfaces/IUserModel';
import { CustomerModel } from './CustomerModel';

//Mongoose connections and object
let mongooseConnection = DbConnection.mongooseConnection;
let mongooseObj = DbConnection.mongooseInstance;

//Class for restaurant model
class UserModel {
    private static instance: UserModel;
    public schema:any;
    public model:any;
    public customer: CustomerModel;

    //constructor initilize the create schema and model
    public constructor() {
        this.createSchema();
        this.createModel();
        this.customer = new CustomerModel();
    }

    //public method to get the single instance ofuser model
    public static getInstance(): UserModel {
        if (!UserModel.instance) {
          UserModel.instance = new UserModel();
        }
        return UserModel.instance;
      }

    //function to create the schema for restaurants
    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                ssoId: String, 
                userId: String,
                name: String,
                profilePic: String,
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
            const {ssoId, name, profilePic, email, userType} = request;
            const customerResponse = await this.customer.createCustomer( {email: email, name: name, profilePic: profilePic});
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
                profilePic,
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
                profilePic: profilePic,
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

    //map user  sso id with user id and return user id
    // mapSSOtoUserId(req: any) {
    //   //get the sso id from response
    //   const ssoid:String = req.user.ssoId;
    //   const filter = {ssoId: ssoid};

    //   const UserDetail = this.model.findOne(filter);
    //   console.log(UserDetail);
    //   return UserDetail.userId;
    // }
    
}

export {UserModel};