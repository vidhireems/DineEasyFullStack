import {googleAppAuth} from './googleOauth2';
import { IUserModel } from './interfaces/IUserModel';
import { CustomerModel } from './models/CustomerModel';
import { UserModel } from './models/UserModel';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;

class GooglePassport {

    clientId: string;
    secretId: string;
    user: UserModel;
    customer: CustomerModel;
    static env: string;

    constructor() { 

        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;
        this.user = new UserModel();
        this.customer = new CustomerModel();

        let callbackURL = "https://dineeasyy.azurewebsites.net/auth/google/callback";
        if (GooglePassport.env === 'localhost')
        {
            callbackURL =  "http://localhost:8080/auth/google";
        }

    
        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: callbackURL
            },
            (accessToken: string, _refreshToken: string, profile: any, done: any) => {
                console.log("inside new passport google strategy");
                process.nextTick(() => {
                    console.log('validating google profile:' + JSON.stringify(profile));
                    console.log("retrieve all of the profile info needed");
                    let response: any;
                    this.user.retrieveUser(response, { ssoId: profile.id })
                    .then((userResponse) => {
                        console.log("Resp: " + userResponse);
                        if (userResponse === null) 
                        {
                            const req = {
                                    ssoId: profile.id,
                                    name: profile.displayName,
                                    email: profile.emails[0].value,
                                    userType: "Customer",
                                };
    
                                this.user.createUser(req).then((resp: any) => {
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
                        // Handle any errors that occurred during the retrieval process
                        console.error("Error retrieving user:", error);
                    });
                    
                    return done(null, profile);
                }); 
            }
        ));

        passport.serializeUser(function(user: any, done: any) {
            done(null, user);
        });

        passport.deserializeUser(function(user: any, done: any) {
            done(null, user);
        });
    }
}



export default GooglePassport;