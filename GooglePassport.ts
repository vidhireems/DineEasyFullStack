import {googleAppAuth} from './googleOauth2';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20-with-people-api').Strategy;

class GooglePassport {

    clientId: string;
    secretId: string;
     
    constructor() { 

        this.clientId = googleAppAuth.id;
        this.secretId = googleAppAuth.secret;

        const callbackURLs = [
            "http://localhost:8080/auth/google",
            "https://dineeasyy.azurewebsites.net/auth/google/callback"
        ];

        callbackURLs.forEach(callbackURL => {
            passport.use(new GoogleStrategy({
                    clientID: this.clientId,
                    clientSecret: this.secretId,
                    callbackURL: callbackURL
                },
                (accessToken: string, _refreshToken: string, profile: any, done: any) => {
                    console.log("inside new passport google strategy");
                    process.nextTick(() => {
                        console.log('validating google profile:' + JSON.stringify(profile));
                        console.log("userId:" + profile.id);
                        console.log("displayName: " + profile.displayName);
                        console.log("retrieve all of the profile info needed");
                        return done(null, profile);
                    }); 
                }
            ));
        });

        passport.serializeUser(function(user: any, done: any) {
            done(null, user);
        });

        passport.deserializeUser(function(user: any, done: any) {
            done(null, user);
        });
    }
}



export default GooglePassport;