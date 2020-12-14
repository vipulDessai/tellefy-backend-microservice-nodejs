const axios = require('axios');
const expect = require('chai').expect;

describe('User Account', () => {
    it('Get `foo_bar` user data', async () => {
        const userData = await axios.get(`http://localhost:${process.env.TEST_LOCAL_SERVER_PORT}/account?userName=foo_bar`);
        expect(userData.data.response.userName).equals('foo_bar');
    });
});