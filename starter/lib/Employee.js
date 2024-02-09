//! TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
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