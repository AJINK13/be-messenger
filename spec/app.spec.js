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
    describe("/users", () => {
        it("GET return status 200 and all users data", () => {
            return request(app).get("/api/users").expect(200).then(response => {
                expect(response.body.users).to.have.length(4)
            })
        })
    })
})
