class Employee {
    
    constructor(name, id, email) {
        this.title = Employee;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.Employee;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;