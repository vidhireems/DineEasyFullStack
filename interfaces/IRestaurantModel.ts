//imports
import Mongoose from 'mongoose';

//Interface for restaurant model
interface IRestaurantModel extends Mongoose.Document {
    resId: String;
    name: String;
    image: String;
    location: String;
    rating: Number;
    reviews: Number;
    cost: String;
    cuisines: String;
    contact: String;
    neighborhood: String;
    hours: String;
    parkingdetails: String;
    isValetPark: Boolean;
    numberOfTables: Number;
}
export {IRestaurantModel};