// Access Data (queries)

const db = require('../db');

async function GetAllProduct()
{
    const response = await db.query('SELECT * FROM Products ORDER BY id');
    return response.rows;
}

async function GetProductById(id)
{
    const response = await db.query('SELECT * FROM products where id = $1' , [id]);
    return response.rows[0];
}

async function CreateNewProduct({name , price , stock})
{
    const response = await db.query('INSERT INTO products (name,price,stock) VALUES ($1,$2,$3) RETURNING *',
        [name,price,stock]
    );

    return response.rows[0];
}

async function UpdateProduct(id , fields = {})
{
    const keys = Object.keys(fields);
    if (keys.length === 0)
    {
        return GetProductById(id);
    }

    const values = keys.map(key => fields[key]);
    const set = keys.map((key,index) => `${key} = $${index + 1}`).join(', ');
    const query = `UPDATE Products SET ${set} WHERE id = $${keys.length + 1} RETURNING *`;
    const response = await db.query(query, [...values,id]);
    return response.rows[0];
}

async function RemoveProduct(id)
{
    const response = await db.query('DELETE FROM Products WHERE id = $1 RETURNING *',
        [id]
    );
    return response.rows[0];
}

module.exports = { 
    GetAllProduct,
    GetProductById,
    CreateNewProduct,
    UpdateProduct,
    RemoveProduct,
};