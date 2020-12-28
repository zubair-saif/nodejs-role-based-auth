const usersRoute = require('../routes/userRoute');

module.exports = function (app) {
    app.use('/api/v1/users', usersRoute);
}