// Explain What Different Between Restfull API and GraphQL API
// Restful API and GraphQL API are two different approaches to building APIs for web applications. Here are the key differences:

// 1. Data Fetching
//    - REST: Clients make multiple requests to different endpoints to fetch related data.
//    - GraphQL: Clients can request all the required data in a single query, reducing the number of requests.

// 2. Flexibility
//    - REST: The server defines the structure of the responses, and clients must adapt to it.
//    - GraphQL: Clients can specify exactly what data they need, allowing for more flexibility and reducing over-fetching.

// 3. Versioning
//    - REST: Versioning is often handled by creating new endpoints (e.g., /api/v1/resource).
//    - GraphQL: Versioning is typically not needed, as clients can request only the fields they need.

// 4. Tooling and Ecosystem
//    - REST: Has a mature ecosystem with many tools and libraries available.
//    - GraphQL: Is newer and has a growing ecosystem, with powerful tools like Apollo and Relay.

// 5. Learning Curve
//    - REST: Generally easier to understand and implement, especially for simple APIs.
//    - GraphQL: Has a steeper learning curve due to its more complex query language and concepts.

// 6. Error Handling
//    - REST: Uses standard HTTP status codes to indicate success or failure.
//    - GraphQL: Returns errors in a consistent format within the response body, allowing clients to handle them more easily.
// 7. Caching
//    - REST: Caching is often done at the HTTP level using standard caching mechanisms.
//    - GraphQL: Caching can be more complex due to the dynamic nature of queries, but tools like Apollo Client provide built-in caching solutions.
// 8. Performance
//    - REST: Performance can be affected by the number of requests needed to fetch related data
//    - GraphQL: Can improve performance by allowing clients to fetch all required data in a single request, but complex queries can lead to performance issues if not managed properly.
// 9. Use Cases
//    - REST: Well-suited for simple CRUD operations and applications with a fixed data structure
//    - GraphQL: Ideal for applications with complex data relationships, real-time updates, and scenarios where clients need to control the data they receive.
// In summary, RESTful APIs are simpler and more established, while GraphQL APIs offer greater flexibility and efficiency for complex applications. The choice between the two depends on the specific requirements of the application being developed.
// Example of a RESTful API endpoint
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/api/users', (req, res) => {
    // Fetch users from database
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];
    res.json(users);
});
app.get('/api/users/:id', (req, res) => {
    // Fetch user by ID from database
    const userId = parseInt(req.params.id, 10);
    const user = { id: userId, name: `User ${userId}` };
    res.json(user);
}
);
app.post('/api/users', (req, res) => {
    // Create a new user in the database
    const newUser = req.body;
    newUser.id = Math.floor(Math.random() * 1000); // Simulate ID generation
    res.status(201).json(newUser);
}
);
