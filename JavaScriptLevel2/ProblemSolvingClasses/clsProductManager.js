const CategoryManager = require("./clsCategoryManager");

class clsProductManager{
    constructor() {
        this.products = {};
        this.clsCategoryManager = CategoryManager; // Instance
    }

    // Create new product
    CreateNewProduct(productId, Name, description, stock, price, categoryId) {
        if (
            typeof productId !== "number" ||
            typeof categoryId !== "number" ||
            !Name ||
            !description ||
            typeof stock !== "number" ||
            typeof price !== "number"
        ) {
            return { "create product failed": "Invalid input" };
        }

        if (!this.clsCategoryManager.CategoryExists(categoryId))
        {
             return { "create product failed": "category does not exist" };
        }

        if (this.products[productId]) {
            return { "create product failed": "product already exists" };
        }

        for (const p of Object.values(this.products)) {
            if (p.description === description) {
                return { "create product failed": "product already exists" };
            }
        }

        this.products[productId] = {
            id: productId,
            Name,
            description,
            stock,
            price,
            categoryId
        };
        return { "create product success": this.products[productId] };
    }

    // List products
    ListProducts() {
        return Object.values(this.products).sort((product1, product2) => {
            if (product1.id !== product2.id) return product1.id - product2.id;
            return product1.Name.localeCompare(product2.Name);
        });
    }

    // Get product by productId
    GetProductByID(productId) {
        return this.products[productId] || "product Not Found";
    }

    // Update product
    UpdateProduct(productId, Name, description, stock, price, categoryId) {
        if (
            typeof productId !== "number" ||
            typeof categoryId !== "number" ||
            !Name ||
            !description ||
            typeof stock !== "number" ||
            typeof price !== "number"
        ) {
            return { "update product failed": "Invalid input" };
        }

        if (!this.products[productId]) {
            return { "update product failed": "product does not exist" };
        }

        for (const p of Object.values(this.products)) {
            if (p.description === description && p.id !== productId) {
                return { "update product failed": "description already in use" };
            }
        }

        this.products[productId] = {
            id: productId,
            Name,
            description,
            stock,
            price,
            categoryId
        };
        return { "update product success": this.products[productId] };
    }

    // Delete product by productId
    DeleteProduct(productId) {
        if (this.products[productId]) {
            delete this.products[productId];
            return { "delete product success": productId };
        } else {
            return { "delete product failed": "product not found" };
        }
    }
}

/* let products = new clsProductManager();
console.log(products.CreateNewProduct(1, "Laptop", "A laptop", 10, 1000, 1));
console.log(products.CreateNewProduct(2, "Tablet", "A tablet", 5, 500, 2));
console.log(products.CreateNewProduct(2, "Tablet", "A tablet", 5, 500, 2));
console.log(products.CreateNewProduct(2, "Tablet", "A tablet", 5, 500, 8));
console.log(products.ListProducts());
console.log(products.GetProductByID(1));
console.log(products.UpdateProduct(1, "Laptop Pro", "A better laptop", 8, 1200, 1));
console.log(products.DeleteProduct(2));
console.log(products.ListProducts()); */

module.exports = clsProductManager;