var  app = require('../app');
var request = require("request");
var base_url = "http://localhost:7000/";
var about_url = base_url + "about";
var contact_url = base_url + "about";

describe("Express Server", function(){
  describe("Get /", function(){
    it("returns status code 200", function(done){
      request.get(base_url, function(err, res, body){
          expect ( res.statusCode).toBe(200);
          done();
      });
    });
  });

  describe("Get /about", function(){
    it("returns status code 200", function(done){
      request.get(about_url, function(err, res, body){
          expect ( res.statusCode).toBe(200);
          done();
      });
    });
  });

  describe("Get /contact", function(){
    it("returns status code 200", function(done){
      request.get(contact_url, function(err, res, body){
          expect ( res.statusCode).toBe(200);
          done();
      });
    });
  });

});
