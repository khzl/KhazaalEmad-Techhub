class clsStudent{
    constructor(name,course){
        this.name = name;
        this.course = course;
        this.IsStudent = true;
    }

    enroll(){
        if (this.IsStudent)
        {
            this.IsStudent = false;
            return `${this.name} Is Student.`;
        }
        else 
        {
            return `${this.name} IS Not Student.`;
        }
    }

    drop(){
        this.IsAvailable = true;
        return `${this.name} Drop In This Course.`;
    }
}

let Student1 = new clsStudent("Sara" , "JS Foundation");
console.log(Student1.enroll());
console.log(Student1.enroll());
console.log(Student1.drop());