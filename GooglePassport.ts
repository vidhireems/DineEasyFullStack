import {googleAppAuth} from './googleOauth2';
import { CustomerModel } from './models/CustomerModel';
import { UserModel } from './models/UserModel';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;

class GooglePassport {

    clientId: string;
    secretId: string;
    users: UserModel;
    customer: CustomerModel;
    static env: string;

    constructor() { 

        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;
        this.users = UserModel.getInstance();
        this.customer = new CustomerModel();

        // Updating callback url based on environment
        let callbackURL = "https://dineeasyy.azurewebsites.net/auth/google/callback";
        if (GooglePassport.env === 'localhost')
        {
            callbackURL =  "http://localhost:8080/auth/google";
        }

        // Using passport Google strategy for authentication
        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: callbackURL
            },
            (accessToken: string, _refreshToken: string, profile: any, done: any) => {
                process.nextTick(() => {
                    let response: any;
                    this.users.retrieveUser(response, { ssoId: profile.id })
                    .then((userResponse) => {
                        // If user is not already registered then add new user
                        if (userResponse === null) 
                        {
                            const request = {
                                    ssoId: profile.id,
                                    name: profile.displayName,
                                    profilePic: profile.photos[0].value,
                                    email: profile.emails[0].value,
                                    userType: "Customer",
                                };
                                
                                this.users.createUser(request).then((resp: any) => {
                                    if (resp.ssoId === profile.id) {
                                        console.log("The user was successfully added to the database using OAuth!");
                                    }
                                })
                                .catch((error: any) => {
                                    console.error("Error creating user:", error);
                                });
                        } else {
                            console.log("User already registered")
                        }
                    })
                    .catch((error) => {
                        console.error("Error retrieving user:", error);
                    });

                    return done(null, profile);
                }); 
            }
        ));
        
        // Serializing user for session management
        passport.serializeUser((user: any, done: any) => { 
            done(null, user.id);
        });

        // Deserializing user for session management
        passport.deserializeUser((id: any, done: any) => {
            let resp;
             this.users.retrieveUser(resp, {ssoId: id}).then((user:any) => {
                done( null, user);
            });
        });
    }
}


export default GooglePassport;