const postRoute = require('../routes/postRoute');

module.exports = function (app) {
    app.use('/api/v1/post', postRoute);
}