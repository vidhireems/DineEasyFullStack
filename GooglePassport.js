"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleOauth2_1 = require("./googleOauth2");
const CustomerModel_1 = require("./models/CustomerModel");
const UserModel_1 = require("./models/UserModel");
let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;
class GooglePassport {
    constructor() {
        this.clientId = googleOauth2_1.googleAppAuth.id;
        this.secretId = googleOauth2_1.googleAppAuth.secret;
        this.users = new UserModel_1.UserModel();
        this.customer = new CustomerModel_1.CustomerModel();
        let callbackURL = "https://dineeasyy.azurewebsites.net/auth/google/callback";
        if (GooglePassport.env === 'localhost') {
            callbackURL = "http://localhost:8080/auth/google";
        }
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: callbackURL
        }, (accessToken, _refreshToken, profile, done) => {
            console.log(profile);
            process.nextTick(() => {
                let response;
                this.users.retrieveUser(response, { ssoId: profile.id })
                    .then((userResponse) => {
                    if (userResponse === null) {
                        const request = {
                            ssoId: profile.id,
                            name: profile.displayName,
                            profilePic: profile.photos[0].value,
                            email: profile.emails[0].value,
                            userType: "Customer",
                        };
                        this.users.createUser(request).then((resp) => {
                            if (resp.ssoId === profile.id) {
                                console.log("The user was successfully added to the database using OAuth!");
                            }
                        })
                            .catch((error) => {
                            console.error("Error creating user:", error);
                        });
                    }
                    else {
                        console.log("User already registered");
                    }
                })
                    .catch((error) => {
                    console.error("Error retrieving user:", error);
                });
                return done(null, profile);
            });
        }));
        passport.serializeUser((user, done) => {
            done(null, user.id);
        });
        passport.deserializeUser((id, done) => {
            let resp;
            this.users.retrieveUser(resp, { ssoId: id }).then((user) => {
                done(null, user);
            });
        });
    }
}
exports.default = GooglePassport;
