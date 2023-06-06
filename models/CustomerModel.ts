//Imports
import Mongoose from "mongoose";
import { DbConnection } from "../DbConnection";
import { ICustomerModel } from "../interfaces/ICustomerModel"
import { v4 as uuidv4 } from "uuid";

//Mongoose connections and object
let mongooseConnection = DbConnection.mongooseConnection;
let mongooseObj = DbConnection.mongooseInstance;

//Class for customer model
class CustomerModel {
  public schema: any;
  public model: any;

  //constructor initilize the create schema and model
  public constructor() {
    this.createSchema();
    this.createModel();
  }

  //function to create the schema for customer
  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        customerId: { type: String, require: true },
        email: { type: String, require: true },
        name: { type: String, require: true },
        profilePic: { type: String },
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
      },
      { collection: "Customer" }
    );
  }

  //function to create model
  public createModel(): void {
    if (!mongooseConnection.models.Customer) {
      this.model = mongooseConnection.model<ICustomerModel>(
        "Customer",
        this.schema
      );
    } else {
      this.model = mongooseConnection.models.Customer;
    }
  }

  // function for retriving specific customer
  public async retrieveCustomer(response: any, filter: Object): Promise<any> {
    try {
      const CustomerInfo = await this.model.findOne(filter);

        if (!CustomerInfo) {
          console.error({ error: "Unable to find Customer" });
          if(response)
          {
          response.status(404).send({ error: "Customer not found" });
          }
        } else {
          if(response)
          {
            return response.status(200).json(CustomerInfo);
          }
          else
          {
            return CustomerInfo;
          }
        }
    } catch (err) {
      console.error(err);
      if (response) {
        return response.status(500).json({
          message: "Internal server error while retrieving Customer detail",
        });
      } else {
        throw new Error("Internal server error while retrieving Customer detail");
      }
    }
  }

  public async createCustomer(request: any, response?: any): Promise<any> {
    try {
      const customerId = uuidv4();
      const name = request.name;
      const email = request.email;
      const profilePic = request.profilePic;
      if (!name || !email || !customerId) {
        if (response) {
          return response.status(400).json({ message: "Please fill all fields" });
        } else {
          throw new Error("Please fill all fields");
        }
      }
  
      const customer = new this.model({
        customerId,
        email,
        name,
        profilePic,
        address: "",
        contactNumber: "",
        isCheckedIn: false,
        customerType: "Freemium",
      });
  
      const resp = await customer.save();
  
      console.log("Customer created successfully" );
      const responseData = {
        customerId: customerId,
        email: email,
        name: name,
      };
  
      if (response) {
        response.json(responseData);
        response.status(200);
      } else {
        return responseData;
      }
    } catch (error) {
      if (response) {
        response.error(500).json({ message: "Error Creating Customer..." });
      } else {
        throw new Error("Error Creating Customer...");
      }
    }
  }
  
  //update customer
  public async updateCustomer(customerId:any, request: any, response: any): Promise<any> {
    try {
     
      const { name, profilePic, email, address, contactNumber, customerType } = request.body;
      if ( !name || !profilePic || !email || !customerType )
        return response.status(400).json({ message: "Please fill all the fields" });

      //find the user and update it in customer collection
      const updateCustomer = await this.model.findOneAndUpdate(
        { customerId },
        { name, profilePic, email, address, contactNumber, customerType },
        { new: true }
      );

      if (!updateCustomer)
        return response.status(400).json({ message: "Customer Not found" });

      return response.status(200).json({
        message: "Customer Updated",
        customer: updateCustomer,
      });
    } catch (error) {
      console.log("Error Updating Customer:...");
      response.status(500).json({ message: "Error Updating Customer" });
    }
  }
}

export { CustomerModel };
