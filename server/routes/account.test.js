const app = require("../../index");
const supertest = require('supertest');
const testServer = supertest.agent(app);

describe('account', () => {
    test("get user data", (done) => {
        testServer
            .get("/account/")
            .end((err, res) => {
                const rawResponseBody = res.body;
                expect(rawResponseBody.foo).toBeTruthy();
                done();
            });
    })
});

// after all the tests from this file are done
// close the node js server
afterAll(() => {
    app.close();
});