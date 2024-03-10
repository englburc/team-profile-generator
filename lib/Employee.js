//! TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || typeof id !== "number" || typeof email !== "string") {
            throw new Error("Invalid input");
        }

        if (!name) {
            throw new Error('Name is required');
        } else {
            this.name = name;
        }

        if (!email) {
            throw new Error(`Name cannot be null or undefined`);
        } else if (email.indexOf('@') === -1) {
            throw new Error(`Email must contain '@'`);
        } else {
            this.email = email;
        }

        if ((id <= 0)) {
            throw new Error("Id should be a positive number");
        } else {
            this.id = id;
        }

    };
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    // Returns the role of employee as "Employee" by default. Can be overridden in child classes for different roles (Manager/Engineer/Intern
    // Returns the role of employee as "Employee" by default. Can be overridden in child classes if needed.
    getRole() {
        return 'Employee';
    }
}
// Exporting the Employee class so it can be used elsewhere in our application
module.exports = Employee;

//// name
// //id
// //email
// //getName()
// //getId()
// //getEmail()
// //getRole()—returns 'Employee'