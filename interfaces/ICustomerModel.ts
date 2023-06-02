//imports
import Mongoose from 'mongoose';

//Interface for customer model
interface ICustomerModel extends Mongoose.Document {
    customerId: String;
    email: String;
    name: String;
    profilePic: String;
    address: String;
    contactNumber: String;
    isCheckedIn: Boolean;
    customerType: String;
}
export {ICustomerModel};