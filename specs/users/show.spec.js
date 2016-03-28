"use strict";

var
  assert = require("chai").assert,
  spec = require("api-first-spec"),
  config = require("../../config/config.json");

var API = spec.define({
  "endpoint": "/api/users/[id]",
  "method": "GET",
  "request": {
    "contentType": spec.ContentType.URLENCODED,
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": {
      "code": "int",
      "result": {
        "name": "string",
        "created_at": "date"
      }
    },
    "rules": {
      "code": {
        "required": true
      },
      "result": function (data) {
        return data.code == 200;
      },
      "result.*": function(data) {
        return data.code == 200;
      }
    }
  }
});

describe("show", function () {
  var host = spec.host(config.host);

  it("invalid id", function (done) {
    host.api(API).params({
      "id": 99
    }).notFound(done);
  });

  it("success on valid id", function (done) {
    host.api(API).params({
      "id": 1
    }).success(function (data) {
      console.log("data", data);
      assert.equal(data.code, 200);
      assert.equal(data.result.name, "user1");
      done();
    });
  });

});

module.exports = API;