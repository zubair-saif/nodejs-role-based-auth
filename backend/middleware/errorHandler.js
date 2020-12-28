module.exports = function (err, req, res, next) {
    // status(500) means that internal server error...
    res.status(500).json({ Error: 'Something Failed! ' + err.message });
};