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
        this.user = new UserModel_1.UserModel();
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
            console.log("inside new passport google strategy");
            process.nextTick(() => {
                console.log('validating google profile:' + JSON.stringify(profile));
                console.log("retrieve all of the profile info needed");
                let response;
                this.user.retrieveUser(response, { ssoId: profile.id })
                    .then((userResponse) => {
                    console.log("Resp: " + userResponse);
                    if (userResponse === null) {
                        const req = {
                            ssoId: profile.id,
                            name: profile.displayName,
                            email: profile.emails[0].value,
                            userType: "Customer",
                        };
                        this.user.createUser(req).then((resp) => {
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
                    // Handle any errors that occurred during the retrieval process
                    console.error("Error retrieving user:", error);
                });
                return done(null, profile);
            });
        }));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}
exports.default = GooglePassport;
