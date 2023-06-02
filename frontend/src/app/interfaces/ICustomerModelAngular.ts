//Interface for Customer model
interface ICustomerModel {
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