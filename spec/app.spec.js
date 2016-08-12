var  app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/";
var about_url = base_url + "about";
var contact_url = base_url + "about";

describe("Express Server API", function () {
  describe('should return users json on get /users', function() {
    it("returns status code 200", function (done) {
      supertest(app)
        .get('/users')
        .set('Accept', 'text/html')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("returns a correct json format", function (done) {
      supertest(app)
        .get('/users')
        .expect({
          name: 'Junius',
          job: 'asking questions',
          age: 25
        }, done);
    });

  });
});

// describe("Express Server", function(){
//   describe("Get /", function(){
//     it("returns status code 200", function(done){
//       request.get(base_url, function(err, res, body){
//           expect ( res.statusCode).toBe(200);
//           done();
//       });
//     });
//   });
//
//   describe("Get /about", function(){
//     it("returns status code 200", function(done){
//       request.get(about_url, function(err, res, body){
//           expect ( res.statusCode).toBe(200);
//           done();
//       });
//     });
//   });
//
//   describe("Get /contact", function(){
//     it("returns status code 200", function(done){
//       request.get(contact_url, function(err, res, body){
//           expect ( res.statusCode).toBe(200);
//           done();
//       });
//     });
//   });

// });
