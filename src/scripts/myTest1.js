function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter1(user1);
