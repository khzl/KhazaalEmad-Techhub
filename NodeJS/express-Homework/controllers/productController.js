const model = require('../models/productModel');
const asyncHandler = require('../middleware/asyncHandler');

exports.GetAll = asyncHandler(async(request,response) => {
    const Products = await model.GetAllProduct();
    response.json(Products);
});

exports.GetById = asyncHandler(async (request , response) => {
    const id = parseInt(request.params.id);
    const product = await model.GetProductById(id);
    if (!product)
        return response.status(400).json({error: "product not found"});
    response.json(product);
});

exports.create = asyncHandler(async (request , response) => {
    const { name , price , stock } = request.body;
    const created = await model.CreateNewProduct({name , price , stock});
    response.status(201).json(created);
});

exports.update = asyncHandler(async (request , response) => {
    const id = parseInt(request.params.id);
    const existing = await model.GetProductById(id);
    if (!existing)
        return response.status(404).json({error: 'Product Not Found'});

    const updated = await model.UpdateProduct(id , request.body);
    response.json(updated);
});

exports.remove = asyncHandler(async (request , response) => {
    const id = parseInt(request.params.id);
    const deleted = await model.RemoveProduct(id);
    if (!deleted)
        return response.status(404).json({error: 'Product Not Found'});
    response.json(deleted);
});

