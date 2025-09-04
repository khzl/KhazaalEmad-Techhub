class clsUserManager {
    constructor() {
       this.users = {};
    }

    // create new user 
    CreateNewUser(UserId,Name,Email) {
       if (typeof UserId != "number" || !Name || !Email)
       {
        return {"create user failed": "Invalid input"};
       }

       if (this.users[UserId])
       {
        return {"create user failed": "user already exists"};
       }

       for (const u of Object.values(this.users))
       {
        if (u.email == Email){
            return {"create user failed": "user already exists"};
        }
       }
       this.users[UserId] = {id: UserId , Name , Email};
       return {"create user success": this.users[UserId]};
    }

    // List User 
    ListUsers() {
        return Object.values(this.users).sort((user1, user2) => {
            if (user1.id !== user2.id) 
                return user1.id - user2.id;
            if (user1.Name !== user2.Name) 
                return user1.Name.localeCompare(user2.Name);
            return user1.Email.localeCompare(user2.Email);
        });
    }

    // Get User By ID 
    GetUserByID(UserId)
    {
        return this.users[UserId] || "user Not Found";
    }

    // Update User 
    UpdateUsers(UserId, Name, Email)
    {
        if (typeof UserId !== "number" || !Name || !Email) {
            return {"update user failed": "Invalid input"};
        }

        if (!this.users[UserId]) {
            return {"update user failed": "user does not exist"};
        }

        for (const u of Object.values(this.users)) {
            if (u.Email === Email && u.id !== UserId) {
                return {"update user failed": "email already in use"};
            }
        }

        this.users[UserId] = {id: UserId, Name, Email};
        return {"update user success": this.users[UserId]};
    }

    // delete users by UserID
    DeleteUsers(userId) {
        if (this.users[userId]) {
            delete this.users[userId];
            return {"delete user success": userId};
        } else {
            return {"delete user failed": "user not found"};
        }
    }

    
}


let UserManager1 = new clsUserManager();
UserManager1.CreateNewUser(1,"Omer","Omer@gmail.com");
UserManager1.CreateNewUser(2,"Ali","Ali@gmail.com");
UserManager1.CreateNewUser(3,"Khazaal","Khazaal@gmail.com");
UserManager1.CreateNewUser(4,"Zahraa","Zahraa@gmail.com");
console.log(UserManager1.ListUsers());
console.log(UserManager1.GetUserByID(2));
console.log(UserManager1.GetUserByID());
console.log(UserManager1.UpdateUsers(2,"Hiba","Hiba@gmail.com"));
console.log(UserManager1.UpdateUsers("Hiba","Hiba@gmail.com"));
console.log(UserManager1.DeleteUsers(2));
console.log(UserManager1.DeleteUsers(5));


