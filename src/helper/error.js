const error = (err, req, res, next) => {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
    if (err.code && err.code != 500) {
        res.status(err.code).json({
        status: err.code,
        message: err.message,
        });
    } else {
        res.status(500).json({
        status: 500,
        message: 'Internal Server Error',
        });
    }
}
module.exports = error