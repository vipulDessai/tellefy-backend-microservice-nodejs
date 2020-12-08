const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
let dbError = null;
db.on('error', (error) => {
    dbError = error;
});

const userAccountSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    userName: String, 
    password: String
});
const Account = mongoose.model('Account', userAccountSchema);

const dbService = {
    getDbStatus: function () {
        return dbError;
    },
    postRequest: async function (body) {
        const accountEntry = new Account(body);
        const dbSaveResult = await accountEntry.save();

        let err, response;
        if(dbSaveResult.errors) {
            console.log(dbSaveResult.errors);
            err = dbSaveResult.errors;
        }
        else {
            response = dbSaveResult;
        }

        return {err, response}
    },
    getRequest: async function (params) {
        const dbSaveResult = await Account.find(params);

        let err, response;
        if(dbSaveResult.errors) {
            console.log(dbSaveResult.errors);
            err = dbSaveResult.errors;
        }
        else {
            response = dbSaveResult;
        }

        return {err, response}
    }
};

module.exports = dbService;