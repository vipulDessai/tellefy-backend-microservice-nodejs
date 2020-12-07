// const app = require('../index');
// const supertest = require('supertest');
// const testServer = supertest.agent(app);

// describe('User Account', () => {
//     it('Get user data', (done) => {
//         testServer
//             .get('/account?userName=foo_bar')
//             .end((err, res) => {
//                 const rawResponseBody = res.body;
//                 expect(rawResponseBody.response[0].userName).toBe('foo_bar');
//                 done();
//             });
//     })
// });

// // after all the tests from this file are done
// // close the node js server
// after(() => {
//     app.close();
// });