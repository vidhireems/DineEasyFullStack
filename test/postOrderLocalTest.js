const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

let orderId;
let message;

describe('POST Order', () => {

    it('should create an order for a restaurant with id 1 and the response shoud be in proper schema', (done) => {
        const requestData = {
            customerId: "99026a7c-634c-4741-a82b-f47be694452b",
            quantity: 2,
            itemIds: ["asdadd", "asdaasdsdd"],
          };
  
      chai.request('http://localhost:8080')
        .post('/restaurants/1/menu/1/items/order') // Replace the placeholders with actual values
        .send(requestData) // Send the request data as payload, if applicable
        .end((err, res) => {
            orderId = res.body.order.orderId;
            message = res.body.message;
            console.log(orderId);
          expect(res).to.have.status(200);
          expect(res.body).to.satisfy(
            function (body) {
                for (var i = 0; i < body.length; i++) {
                    expect(body[i]).to.have.property('orderId').that.is.a('string');
                    expect(body[i]).to.have.property('resId').that.is.a('string');
                    expect(body[i]).to.have.property('customerId').that.is.a('string');
                    expect(body[i]).to.have.property('orderDate').that.is.a('string'); 
                    expect(body[i]).to.have.property('status').that.is.a('string');
                    expect(body[i]).to.have.property('orderType').that.is.a('string');
                    expect(body[i]).to.have.property('quantity').that.is.a('number');
                    expect(body[i]).to.have.property('itemIds').that.is.an('array').of.all.be.a('string');
                }
                return true;
            });
          done();
        });
    });

    it('the order should exist', (done) => {
        expect(orderId).to.exist;
        done();
    });

    it('if order places successfully, response should have success message', (done) => {
        expect(message).to.equal("Order placed successfully");
        done();
      });
     
    //clean the entrywhich was created above  
    after((done) => {
        const OrderId = orderId
        chai.request('http://localhost:8080')
          .delete(`/orders/${OrderId}`)
          .end((err, res) => {
            if (err) {
              console.log("Error deleting order:", err);
              console.error(err);
            } else {
              console.log("Order deleted successfully");
            }
            done();
          });
      });      
  });
  