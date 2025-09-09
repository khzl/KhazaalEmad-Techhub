

module.exports = (err , request , response , next) => {
    console.error(err);
    const status = err.statusCode || 500;
    response.status(status).json({error: err.message || 'Internal Server Error'});
}