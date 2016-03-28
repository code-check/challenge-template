"use strict";

var
  assert = require("chai").assert,
  spec = require("api-first-spec"),
  config = require("../../config/config.json");

var API = spec.define({
  "endpoint": "/api/users",
  "method": "POST",
  "request": {
    "contentType": spec.ContentType.URLENCODED,
    "params": {
      "name": "string",
      "password": "string",
      "email": "string",
      "birthday": "date"
    },
    "rules": {
      "name": {
        "required": false
      },
      "password": {
        "required": true
      },
      "email": {
        "required": true
      },
      "birthday": {
        "required": false,
        "format": "YYYY-MM-DD"
      }
    }
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": {
      "code": "int"
    },
    "rules": {
      "code": {
      "required": true
      }
    }
  }
});

describe("create", function () {
  var host = spec.host(config.host);

  //Currently for template purpose only basic functionality 
  //i.e basic correct response 200 - ok is implemented
  //Please uncomment following lines/tests to see failing tests

  // it("invalid email", function (done) {
  //   host.api(API).params({
  //     "name": "Test",
  //     "password": "123abc!",
  //     "email": "invalid",
  //     "birthday": "2000-04-17"
  //   }).badRequest(done);
  // });

  // it("invalid Birthday", function (done) {
  //   host.api(API).params({
  //     "name": "Ted",
  //     "password": "password!",
  //     "email": "user7@test.com",
  //     "birthday": "2030-04-17"
  //   }).badRequest(done);
  // });

  it("user already present", function (done) {
    host.api(API).params({
      "name": "user1",
      "password": "password",
      "email": "user1@test.com"
    }).badRequest(done);
  });

  it("success", function (done) {
    host.api(API).params({
      "name": "user3-testUser",
      "password": "password",
      "email": "user3@test.com"
    }).success(function (data) {
      assert.equal(data.code, 200);
      done();
    });
  });

});

function initData(done) {
  db.del().then(function() {
    db.create(require(app.fromSpecRoot("/fixtures/challenges.json"))).then(function(data) {
      done(data);
    });
  });
}

module.exports = API;