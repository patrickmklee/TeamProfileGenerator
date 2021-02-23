
class Employee {
    constructor(name='',id,email) {
        this.name  = name;
        this.id    = id;
        this.email = email;   
    }
    // static makeEmployee(answerData) {
    //     return new Promise((resolve, reject) => {
    //         getData(pathToData).then(data => {
    //           resolve(new Engine(data))
    //         }).catch(reject);
    //     });
    getName() {
        return this.name;
    }

    getId() {
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