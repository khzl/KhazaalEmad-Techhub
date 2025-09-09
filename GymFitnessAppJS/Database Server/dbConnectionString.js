const { Pool } = require("pg");

// Used Connection String Directly 

const pool = new Pool(
    {
        connectionString: "postgresql://postgres:123456@localhost:3000/GymDB",
    }
);

module.exports = {
    query: (text,params) => pool.query(text,params),
};