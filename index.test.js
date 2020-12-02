const app = require("./index");
const supertest = require('supertest');
const testServer = supertest.agent(app);

describe("server is up", () => {
    test("server initialization", () => {
        expect(app.listening).toBeTruthy();
    });
});

// after all the tests from this file are done
// close the node js server
afterAll(() => {
    app.close();
});