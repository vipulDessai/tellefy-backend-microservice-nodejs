require('dotenv').config();

const expect = require('chai').expect;
const axios = require('axios');

describe("Server Stats", () => {
    it("Initialization", async () => {
        const serverResult = await axios.get(`http://localhost:${process.env.TEST_LOCAL_SERVER_PORT}/test-server-up`);
        expect(serverResult.status).equals(200);
    });
});