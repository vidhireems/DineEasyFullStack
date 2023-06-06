const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const googletoken = "108268008684415002541";

describe('GET /myorders', () => {
  it('should return 200 as status code and body should not be string', (done) => {
    chai.request('http://localhost:8080')
      .get('/myorders')
      .set('Authorization', googletoken) 
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.not.be.a.string;
        done();
      });
  });

  it('should check the properties of response', (done) => {
    chai.request('http://localhost:8080')
      .get('/myorders')
      .set('Authorization', googletoken)
      .end((err, res) => {
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
  

  it('should return unauthorized error if no access token provided', (done) => {
    chai.request('http://localhost:8080')
      .get('/myorders')
      .set('Authorization', '098347523')
      .end((err, res) => {
        expect(res).to.redirectTo('http://localhost:8080/');
        done();
      });
  });
});
