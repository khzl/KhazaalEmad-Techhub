const CategoryManager = require('./clsCategoryManager');
const clsProductManager = require('./clsProductManager');
const UserManager = require('./clsUserManager');

let Products = new clsProductManager();

// Create Users 
console.log(UserManager.CreateNewUser(1,"Khazaal","Khazaal@gmail.com"));
console.log(UserManager.CreateNewUser(2,"Omer","Omer@gmail.com"));
// Create Categories
console.log(CategoryManager.CreateNewCategory(1,"Electronics","this Category For Electronics"));
console.log(CategoryManager.CreateNewCategory(2,"Books", "This Category For Books"));
// Get Category By ID
console.log(CategoryManager.GetCategoryByID(2));
// Create Product Link By category
console.log(Products.CreateNewProduct(1,"Laptop", "HP LAptop",10,1000,1));
console.log(Products.CreateNewProduct(2,"Tablet","Honor Pad X8a",5,500,99));
// List All 
console.log("Users: " , UserManager.ListUsers());
console.log("Categories: ", CategoryManager.ListCategories());
console.log("Products: " , Products.ListProducts());