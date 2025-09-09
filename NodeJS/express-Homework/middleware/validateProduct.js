
function isInteger(n)
{
    return Number.isInteger(n);
}

exports.create = (request , response , next) => {
    const {name , price , stock} = request.body;
    if (!name)
        return response.status(400).json({error: "Name Is Required" });
    if (price === undefined || isNaN(price))
        return response.status(400).json({error: "Price must be a number"});
    if (stock === undefined || !isInteger(stock))
        return response.status(400).json({error: "Stock must be an integer"});
    next();
};

exports.update = (request , response , next) => {
    const { price , stock } = request.body;
    if (price !== undefined || isNaN(price))
        return response.status(400).json({error: "Price must be a number"});
    if (stock !== undefined || !isInteger(stock))
        return response.status(400).json({error: "Stock must be a Integer"});
    next();
};