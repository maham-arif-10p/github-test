interface Person {
    firstName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user1 = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter1(user1);