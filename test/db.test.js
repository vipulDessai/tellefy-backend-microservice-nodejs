const expect = require('chai').expect;
const axios = require('axios');

describe('DB setup', () => {
    it('Check Connection', async () => {
        const dbStatus = await axios.get(`http://localhost:${process.env.TEST_LOCAL_SERVER_PORT}/test-db-connection`);
        expect(dbStatus.data.ok).equals(1);
    })
});