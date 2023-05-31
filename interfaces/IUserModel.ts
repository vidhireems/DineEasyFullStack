//imports
import Mongoose from 'mongoose';

//Interface for restaurant model
interface IUserModel extends Mongoose.Document {
    userId: String;
    name: String;
    email: String;
    userType: String;
    referenceCustomerTypeId: String;
}
export {IUserModel};