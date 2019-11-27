const { expect } = require("chai")
const chai = require("chai")
const request = require("supertest")
const app = require("../app.js")
const connection = require("../db/connection.js")

describe("/api", () => {
  after(() => {
    connection.destroy()
  })
  beforeEach(() => {
    return connection.seed.run()
  })
  it("GET returns status 200 and the JSON object describing all available endpoints", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(response => {
        expect(response.body).to.be.an("object")
      })
  })
  describe("/users", () => {
    it("GET return status 200 and all users data", () => {
      return request(app)
        .get("/api/users")
        .expect(200)
        .then(response => {
          expect(response.body.users).to.have.length(4)
        })
    })
    it("POST returns status 201 and all users", () => {
      return request(app)
        .post("/api/users")
        .send({ username: "jc", avatar_url: "www.whatever.com" })
        .expect(201)
        .then(response => {
          expect(response.body).to.be.an("object")
        })
    })
    describe("/users/user_id", () => {
      it("GET returns status 200 and a single user object", () => {
        return request(app)
          .get("/api/users/1")
          .expect(200)
          .then(response => {
            expect(response.body.user).to.be.an("object")
          })
      })
      it("PATCH returns status 200 and a single user object with an updated username", () => {
        return request(app)
          .patch("/api/users/1")
          .send({
            username: "aj",
            avatar_url: "www.hello.com",
            online_status: true
          })
          .expect(200)
          .then(response => {
            expect(response.body).to.be.an("object")
          })
      })
    })
  })
})
