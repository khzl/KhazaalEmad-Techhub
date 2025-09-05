const http = require("http");
const { send } = require("process");
const url = require("url");

let items = [];
let nextId = 1; // Generate ID


// Helpers Functions
// sendJSON 
function sendJSON(response, statusCode, data)
{
    response.writeHead(statusCode , {"Content-Type": "application/json"});
    response.end(JSON.stringify(data));
}

// parseBody
function parseBody(request)
{
    return new Promise((resolve,reject) => {
        let body = "";
        request.on("data" , (chunk) => (body += chunk));
        request.on("end", () => {
            try{
                const parsed = JSON.parse(body || "{}");
                resolve(parsed);
            }
            catch(error)
            {
                reject(error);
            }
        });
    });
}

// getIdFromPath
function getIdFromPath(pathname)
{
    const parts = pathname.split("/");
    return parts.length > 2 ? parseInt(parts[2]) : null;
}

// CRUD Handlers 
async function handleCreate(request,response)
{
    try{
        const data = await parseBody(request);
        if (!data.name)
            return sendJSON(response,400,{error: "Name Is Required"});
        const item = {id: nextId++ , name: data.name};
        items.push(item);
        sendJSON(response,201,item);
    }
    catch{
        sendJSON(response, 400, {error: "Invalid JSON"});
    }
}

function handleGetAll(response)
{
    sendJSON(response, 200, items);
}

function handleGetOne(response,id)
{
    const item = items.find((Item) => Item.id === id);
    if (!item)
        return sendJSON(response, 404 , {error: "Item Not Found"});
    sendJSON(response, 200, item);
}

async function handleUpdate(request , response , id)
{
    const index = items.findIndex((Item) => Item.id === id);
    if (index === -1)
        return sendJSON(response , 404 , {error: "Item Not Found"});

    try {
        const data = await parseBody(request);
        items[index] = {...items[index], ...data, id};
        sendJSON(response, 200 , items[index]);
    }
    catch{
        sendJSON(response , 400 , {error: "Invalid JSON"});
    }
}

function handleDelete(response, id)
{
    const index = items.findIndex((Item) =>  Item.id === id);
    if (index === -1)
        return sendJSON(response, 404 , {error: "Item Not Found"});

    const deleted = items.splice(index, 1)[0];
    sendJSON(response , 200 , {deleted});
}

// Server 
const server = http.createServer((request,response) => {
    const parsedUrl = url.parse(request.url, true);
    const { pathname , query } = parsedUrl;

    if (request.method === "POST" && pathname === "/items")
        return handleCreate(request,response);

    if (request.method === "GET" && pathname === "/items")
        return handleGetAll(response);

    if (request.method === "GET" && pathname.startsWith("/items/"))
        return handleGetOne(response, getIdFromPath(pathname));

    if (request.method === "PUT" && pathname.startsWith("/items/"))
        return handleUpdate(request, response, getIdFromPath(pathname));
    
    if (request.method === "DELETE" && pathname.startsWith("/items/"))
        return handleDelete(response , getIdFromPath(pathname));

    sendJSON(response , 404 , {error: "Endpoint Not Found"});
});

server.listen(3000 , () => {
    console.log("Server Is Listening on Port 3000");
});