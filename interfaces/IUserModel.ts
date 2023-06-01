//imports
import Mongoose from 'mongoose';

//Interface for restaurant model
interface IUserModel extends Mongoose.Document {
    ssoId: String;
    userId: String;
    name: String;
    email: String;
    userType: String;
}
export {IUserModel};