const http = require("http");
const url = require("url");

let items = [];
let nextId = 1; // Generate ID

const server = http.createServer((request,response) => {
    const parsedUrl = url.parse(request.url,true);
    const { pathname , query } = parsedUrl;

    // Create -> Post/items
    if (response.method === "POST" && pathname === "/items")
    {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end" , () => {
            try
            {
            const data = JSON.parse(body);
            if (!data.name){
                response.writeHead(400,{"content-type": "application/json"});
                return response.end(JSON.stringify({error: "Name is required"}));
            }
            const item = { id: nextId++ , name: data.name };
            items.push(item);
            response.writeHead(201 , {"content-type": "application/json"});
            response.end(JSON.stringify(item));
        }
        catch (error){
            response.writeHead(400 , {"content-type": "application/json"});
            response.end(JSON.stringify({error: "Invalid JSON"}));
        }
        });
    }

    // Read => Get/items => Get All items 
    else if (request.method === "GET" && pathname === "/items")
    {
        response.writeHead(200, {"content-type": "application/json"});
        response.end(JSON.stringify(items));
    }

    // Read => Get/items/:id => Get item By ID
    else if (request.method === "GET" && pathname.startsWith("/items/"))
    {
        const id = parseInt(pathname.split("/")[2]);
        const item = items.find((Item) => Item.id === id);
        if (!item)
        {
            response.writeHead(404, {"content-type": "application/json"});
            return response.end(JSON.stringify({error: "Item Not Found"}));
        }
        response.writeHead(200, {"content-type": "application/json"});
        response.end(JSON.stringify(item));
    }

    // Update => PUT/items/:id => Update Items 
    else if (request.method === "PUT" && pathname.startsWith("/items/"))
    {
         const id = parseInt(pathname.split("/")[2]);

         let body = "";
         request.on("data", (chunk) => {
            body += chunk;
         });

         request.on("end" , () => {
            const index = items.findIndex((Item) => Item.id === id);
            if (index === -1)
            {
                response.writeHead(404, {"content-type": "application.json"});
                return response.end(JSON.stringify({error: "Item Not Found"}));
            }

            try
            {
                const data = JSON.parse(body);
                items[index] = {...items[index], ...data, id};
                response.writeHead(200, {"content-type": "application/json"});
                response.end(JSON.stringify(items[index]));
            }
            catch(error)
            {
                response.writeHead(400, {"content-type": "application/json"});
                response.end(JSON.stringify({error: "Invalid JSON"}));
            }
         });
    }

    // Delete => Delete/items/:id => Delete items by ID 
    else if (request.method === "DELETE" && pathname.startsWith("/items/"))
    {
         const id = parseInt(pathname.split("/")[2]);
         const index = items.findIndex((Item) => Item.id === id);
         
         if (index === -1)
         {
            response.writeHead(404, {"content-type": "application.json"});
            return response.end(JSON.stringify({error: "Item Not Found"}));
         }

         const deleted = items.splice(index,1)[0];
         response.writeHead(200, {"content-type": "application/json"});
         response.end(JSON.stringify({deleted}));
    }

    // Not Found Page 
    else 
    {
        response.writeHead(404, {"content-type": "application/json"});
        response.end(JSON.stringify({error: "Endpoint Not Found"}));
    }
    
});

server.listen(3000 , () => {
    console.log("Server Is Listening on Port 3000");
});