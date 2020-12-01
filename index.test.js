const supertest = require('supertest');

const app = require("./index");
const testServer = supertest(app);

describe('account', () => {
    test("get user data", (done) => {
        testServer
            .get("/account/")
            .expect(200)
            .end((err, res) => {
                const rawResponseBody = res.body;
                expect(rawResponseBody.foo).toBeTruthy();
                done();
            });
    })
});

afterAll(() => {
    app.close();
});