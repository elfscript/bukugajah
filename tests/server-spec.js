const chai      = require('chai');
const chaiHttp  = require('chai-http');
const server    = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Notes', () => {
  describe('GET Note', () => {
    it('SUITE 1: should list ALL NOTES on /api/notes GET in JSON format', (done) => {
      chai.request(server)
        .get('/api/notes')
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.equal('application/json');
          done();
        });
    });
  });
  describe('POST Note', () => {
    it('should add a SINGLE blob on /blobs POST');
  });
  describe('PUT Note', () => {
    it('should update a SINGLE blob on /blob/<id> PUT');
  });
  describe('DELETE Note', () => {
    it('should delete a SINGLE blob on /blob/<id> DELETE');
  });
});
