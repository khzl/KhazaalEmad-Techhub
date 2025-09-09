// ignore repeat try/catch

module.exports = fn => (request, response, next) => {
    Promise.resolve(fn(request,response,next)).catch(next);
};