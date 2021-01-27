class Student { 
    fullName: string;
    /*생성자 같은애야  */
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string; 
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.","User");
document.body.textContent = greeter(user);

