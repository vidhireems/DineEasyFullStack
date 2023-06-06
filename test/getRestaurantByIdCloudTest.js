console.log('starting test');
var chai = require('chai');
var chaiHttp = require('chai-http');
const fs = require('../App.js');

var expect = chai.expect;

var http = require('http');
chai.use(chaiHttp);

if (!global.Promise) {
  var q = require('q');
  chai.request.addPromises(q.Promise);
}

// Test to get one restaurant
describe('Test GET one Restaurant result from cloud', function () {
    
    var requestResult;
    var response;
            
    before(function (done) {
        chai.request("https://dineeasyy.azurewebsites.net")
            .get("/restaurants/1")
            .end(function (err, res) {
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
    
    // Test to check if the API is responding correctly
    it('Should return a 200 status code', function () {
        expect(response).to.have.status(200);
        expect(response).to.have.headers;
        expect(response.body).to.be.an('object'); 
        expect(response.body).to.not.be.an('array');
    });
    
    // Test to check if the response contains the expected keys
    it('Should include specific keys in the response body', function () {
        expect(response.body).to.include.keys('name');
        expect(response.body).to.have.property('_id');
        expect(response.body).to.have.property('resId').to.be.equal('1').to.be.a.string;
        expect(response.body).to.have.property('image');
        expect(response.body).to.have.property('location');
        expect(response.body).to.have.property('rating').not.to.be.a.string;
        expect(response.body).to.have.property('reviews').not.to.be.a.string;
        expect(response.body).to.have.property('cost');
        expect(response.body).to.have.property('cuisines');
        expect(response.body).to.have.property('contact');
        expect(response.body).to.have.property('neighborhood');
        expect(response.body).to.have.property('hours');
        expect(response.body).to.have.property('parkingdetails');
        expect(response.body).to.have.property('isValetPark').not.to.be.a.string;
    });
    // Test to handle the failure scenario when the restaurant is not found
    it('Should return a 404 error when the restaurant is not found', function (done) {
        chai.request("https://dineeasyy.azurewebsites.net")
            .get("/restaurants/18") // Assuming restaurant with ID 100 does not exist
            .end(function (err, res) {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('error').to.equal('Restaurant not found');
                done();
            });
    });

});
