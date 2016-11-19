const chai      = require('chai');
const chaiHttp  = require('chai-http');

const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Notes', () => {
  describe('GET Note', () => {
    it('SUITE 1: should list all notes on /api/notes GET in JSON format', (done) => {
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
    it('SUITE 1: should add a new note on /api/note POST', (done) => {
      chai.request(server)
        .post('/api/note')
        .send({
          title: 'dummy post',
          description: 'just a super dummy post',
          createdAt: '20-20-2016',
          updatedAt: '20-20-2016',
          tags: [],
          category: 'anything',
          images: [],
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.type.should.equal('application/json');
          done();
        });
    });
  });
  describe('PUT Note', () => {
    it('should update a SINGLE blob on /blob/<id> PUT');
  });
  describe('DELETE Note', () => {
    it('should delete a SINGLE blob on /blob/<id> DELETE');
  });
});
