//Interface for User model
interface IUserModel {
    ssoId: String;
    userId: String;
    name: String;
    profilePic: String;
    email: String;
    userType: String;
}
export {IUserModel};