require('dotenv').config();

const supertest = require('supertest');
const expect = require('chai').expect;
const axios = require('axios');

// const app = require("../index");

// const testServer = supertest.agent(app);

describe("Server Stats", function () {
    it("Initialization", async function () {
        const serverResult = await axios.get(`http://localhost:${process.env.TEST_LOCAL_SERVER_PORT}/account/`);
        expect(serverResult.status).equals(200);
    });
});

// after all the tests from this file are done
// close the node js server
after(() => {
    // app.close();

    const foo = "bar";
});