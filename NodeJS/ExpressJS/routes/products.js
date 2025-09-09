const express = require("express");
const router = express.Router();

let products = [];
let idCounter = 1;

// Helper Function 
function findProductById(id)
{
    return products.find(p => p.id === id);
}

function findProductIndexById(id)
{
    return products.findIndex(p => p.id === id);
}


//CREATE (POST)
router.post("/", (request , response) => {

    const {name} = request.body;

    if (!name)
        return response.status(400).json({error: "Name required"});

    const product = {
        id: idCounter++,
        name
    };

    products.push(product);
    response.status(201).json(product);
});

// Get ALL (GET)
router.get("/", (request, response) => {
    response.json(products);
});

// GET ONE (GET) Get User By ID
router.get("/:id", (request,response) => {
const id = parseInt(request.params.id);
const product = findProductById(id);
if (!product)
{
    return response.status(404).json({error: "product not found"});
}
response.json(product);
});

//UPDATE (PUT)
router.put("/:id", (request,response) => {
const id = parseInt(request.params.id);
const index = findProductIndexById(id);

if (index === -1)
{
    return response.status(404).json({error: "product Not Found"});
}

const {name} = request.body;

if(name)
    products[index].name = name;
    
    response.json(products[index]);
});

// DELETE
router.delete("/:id", (request,response) => {
    const index = products.findIndex((p) => p.id === Number(request.params.id));
    if (index === -1)
        return response.status(404).json({error: "product Not Found"});
    const deleted = products.splice(index,1)[0];
    response.json(deleted);
});


module.exports = router;