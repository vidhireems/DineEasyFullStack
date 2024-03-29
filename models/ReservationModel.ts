//Imports
import Mongoose from "mongoose";
import { DbConnection } from "../DbConnection";
import { IReservationModel } from "../interfaces/IReservationModel";
import { v4 as uuidv4 } from "uuid";
import { RestaurantModel } from "./RestaurantModel";
import cron from "node-cron";
import { CustomerModel } from "./CustomerModel";

//Mongoose connections and object
let mongooseConnection = DbConnection.mongooseConnection;
let mongooseObj = DbConnection.mongooseInstance;

//Class for restaurant model
class ReservationModel {
  public schema: any;
  public model: any;
  private restaurantModel: any;
  private CustomerModel: any;

  //constructor initilize the create schema and model
  public constructor() {
    this.createSchema();
    this.createModel();
    this.restaurantModel = new RestaurantModel();
    this.CustomerModel = new CustomerModel();
    cron.schedule("1 0 * * *", this.resetTableCount.bind(this));
  }

  //function to create the schema for restaurants
  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        reservationId: {
          type: String,
          required: true,
          unique: true,
        },
        customerId: String,
        resId: String,
        date: Date,
        time: String,
        peopleCount: Number,
        phoneNumber: String,
        tableNumber: Number,
        status: {
          type: String,
          enum: ['confirmed', 'pending', 'cancelled'],
          default: 'pending'
        },
      },
      { collection: "Reservation" }
    );
  }

  //function to create model for the User interface and schema
  public createModel(): void {
    this.model = mongooseConnection.model<IReservationModel>(
      "Reservation",
      this.schema
    );
  }


  private async resetTableCount(): Promise<void> {
    try { 
      const restaurants = await this.restaurantModel.model.find({});
      for (const restaurant of restaurants) {
        const originalTableCount = restaurant.originalNumberOfTables;
        restaurant.numberOfTables = originalTableCount;
        await restaurant.save();
      }
      console.log("Table count reset successfully.");
    } catch (error) {
      console.error("Error occurred while resetting table count:", error);
    }
  }

  public async retrieveUserReservation(
    response: any,
    filter: Object
  ): Promise<any> {
    try {
      const query = this.model.findOne(filter);
      query.then((UserDetail: any) => {
        if (!UserDetail) {
          console.error({ error: "Unable to find User Reservation" });
          response.status(404).send({ error: "Reservation not found" });
        } else {
          response.send(UserDetail);
        }
      });
    } catch (err) {
      console.error(err);
      response.sendStatus(500).send({
        message: "Internal server error while retrieving User Reservation",
      });
    }
  }
  // add reservation
  // add reservation
public async createReservation(request: any, response: any): Promise<any> {
  try {
    const reservationId = uuidv4();
    const { resId, customerId, date, time, peopleCount, phoneNumber } = request.body;

    if (!resId || !date || !time || !peopleCount || !phoneNumber) {
      return response.status(400).json({ message: "Please fill all fields" });
    }
    const restaurant = await this.restaurantModel.model.findOne({ resId });
    if (!restaurant) {
      return response.status(404).json({ message: "Restaurant not found" });
    }
    if (restaurant.numberOfTables <= 0) {
      return response.status(400).json({ message: "Cannot reserve. No tables available" });
    }

    let tableNumber = getRandomInt(1, restaurant.numberOfTables);
    const maxAttempts = restaurant.numberOfTables;
    let attempts = 0;
    while (attempts < maxAttempts) {
      const existingReservation = await this.model.findOne({
        resId,
        tableNumber,
        status: { $ne: "canceled" },
      });
      if (!existingReservation) {
        break;
      }
      tableNumber = getRandomInt(1, restaurant.numberOfTables);
      attempts++;
    }
    if (attempts === maxAttempts) {
      return response.status(400).json({ message: "Cannot reserve. No tables available" });
    }

    const checkInTime = new Date(`${date} ${time}`);
    const reservation = new this.model({
      customerId,
      reservationId,
      resId,
      date,
      time,
      peopleCount,
      phoneNumber,
      status: "confirmed",
      tableNumber,
    });
    
    await reservation.save();
    restaurant.numberOfTables -= 1;
    await restaurant.save();

    response.status(200).json({
        reservationId,
        customerId,
        tableNumber,
        status: "confirmed",
        date,
        time,
        peopleCount,
        phoneNumber,
      });
  } catch (error) {
    console.error(error);
    response.sendStatus(500);
  }
}

  // get all reservations
  public async getAllReservations(response: any): Promise<any> {
    try {
      const allReservations = await this.model.find();
      return response.json(allReservations);
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: "Failed to retrieve reservations" });
    }
  }

  // update reservation
  public async updateReservation(request: any, response: any): Promise<any> {
    try {
      const { customerId, reservationId, peopleCount, date, time } =
        request.body;
      if (!reservationId || !customerId) {
        return response
          .status(400)
          .json({ message: "Missing customer ID or reservation ID" });
      }
  
      const reservation = await this.model.findOne({ reservationId });
      if (!reservation) {
        return response.status(404).json({ message: "Reservation not found" });
      }
  
      if (peopleCount !== undefined) {
        reservation.peopleCount = peopleCount;
      }
      if (date !== undefined) {
        reservation.date = new Date(date);
      }
      if (time !== undefined) {
        reservation.time = time;
      }
      await reservation.save();
  
      response
        .status(200)
        .json({ message: "Reservation updated successfully", reservation });
    } catch (error) {
      console.error(error);
      response.sendStatus(500);
    }
  }
  

  // cancel reservation
  public async cancelReservation(request: any, response: any): Promise<any> {
    try {
      const { reservationId } = request.params;
  
      const canceledReservation = await this.model.findOneAndUpdate(
        { reservationId },
        { status: "canceled" },
        { new: true }
      ).select("resId");
  
      if (!canceledReservation) {
        return response.status(404).json({ message: "Reservation not found" });
      }
  
      const RestaurantModel = Mongoose.model("Restaurant");
      await RestaurantModel.updateOne(
        { resId: canceledReservation.resId },
        { $inc: { numberOfTables: 1 } }
      );
  
      return response.status(200).json({
        message: "Reservation canceled successfully",
        reservation: canceledReservation,
      });
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        message: "Internal server error while canceling reservation",
      });
    }
  }
}
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export { ReservationModel };
