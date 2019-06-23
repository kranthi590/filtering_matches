import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("app", () => {
  describe("GET /api", () => {
    it("should get version of api when server is up and running", (done) => {
      chai.request(app)
          .get('/api')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
    });
  });
});
