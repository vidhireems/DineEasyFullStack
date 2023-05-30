"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleOauth2_1 = require("./googleOauth2");
let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;
class GooglePassport {
    constructor() {
        this.clientId = googleOauth2_1.googleAppAuth.id;
        this.secretId = googleOauth2_1.googleAppAuth.secret;
        const callbackURLs = [
            "http://localhost:8080/auth/google",
        ];
        callbackURLs.forEach(callbackURL => {
            passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: callbackURL
            }, (accessToken, _refreshToken, profile, done) => {
                console.log("inside new passport google strategy");
                process.nextTick(() => {
                    console.log('validating google profile:' + JSON.stringify(profile));
                    console.log("userId:" + profile.id);
                    console.log("displayName: " + profile.displayName);
                    console.log("retrieve all of the profile info needed");
                    return done(null, profile);
                });
            }));
        });
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}
exports.default = GooglePassport;
