const mediaRoute = require('../routes/mediaRoute')

module.exports = function (app) {
    app.use('/api/v1/media', mediaRoute);
}