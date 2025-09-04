class clsCategoryManager{
    constructor() {
       this.categories = {};
    }

    // create new category 
    CreateNewCategory(categoryId,Name,description) {
       if (typeof categoryId != "number" || !Name || !description)
       {
        return {"create category failed": "Invalid input"};
       }

       if (this.categories[categoryId])
       {
        return {"create category failed": "category already exists"};
       }

       for (const c of Object.values(this.categories))
       {
        if (c.description == description){
            return {"create category failed": "category already exists"};
        }
       }
       this.categories[categoryId] = {id: categoryId , Name , description};
       return {"create category success": this.categories[categoryId]};
    }

    // List Categories
    ListCategories() {
        return Object.values(this.categories).sort((category1, category2) => {
            if (category1.id !== category2.id) 
                return category1.id - category2.id;
            if (category1.Name !== category2.Name) 
                return category1.Name.localeCompare(category2.Name);
            return category1.Email.localeCompare(category2.Email);
        });
    }

    // Get category By CategoryID 
    GetCategoryByID(categoryId)
    {
        return this.categories[categoryId] || "category Not Found";
    }

    // Update categories 
    UpdateCategories(categoryId, Name, description)
    {
        if (typeof categoryId !== "number" || !Name || !description) {
            return {"update category failed": "Invalid input"};
        }

        if (!this.categories[categoryId]) {
            return {"update category failed": "category does not exist"};
        }

        for (const c of Object.values(this.categories)) {
            if (c.description === description && c.id !== categoryId) {
                return {"update category failed": "description already in use"};
            }
        }

        this.categories[categoryId] = {id: categoryId, Name, description};
        return {"update category success": this.categories[categoryId]};
    }

    // delete category by CategoryID
    DeleteCategory(categoryId) {
        if (this.categories[categoryId]) {
            delete this.categories[categoryId];
            return {"delete category success": categoryId};
        } else {
            return {"delete category failed": "category not found"};
        }
    }

    // Category Exists
    CategoryExists(categoryId)
    {
        return !!this.categories[categoryId];
    }

}

let category1 = new clsCategoryManager();
category1.CreateNewCategory(1,"Laptop","this is laptop description");
category1.CreateNewCategory(2,"MAC","this is mac description");
category1.CreateNewCategory(3,"TAB","this is tab description");
category1.CreateNewCategory(4,"Camera","this is camera description");
console.log(category1.ListCategories());
console.log(category1.GetCategoryByID(2));
console.log(category1.GetCategoryByID());
console.log(category1.UpdateCategories(2,"Laptop","this is description"));
console.log(category1.UpdateCategories("Laptop","this is description"));
console.log(category1.DeleteCategory(2));
console.log(category1.DeleteCategory(5));

module.export = clsCategoryManager;
//export default clsCategoryManager;