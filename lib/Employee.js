class Employee {
    constructor(name='',id,email) {
        this.name  = name;
        this.id    = id;
        this.email = email;
    }

    getName() {
        console.log(`getName: ${this.name}`);
        return this.name;
    }

    getId() {
        console.log(`getId: ${this.id}`)
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;