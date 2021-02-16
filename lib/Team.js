const inquirer = require("inquirer");
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.types = ['intern','manager','engineer'];
        this.members = [];
    }
    newTeamMember(answers) {
        switch (answers.role) {
            case 'engineer':
                this.add(new Engineer(answers.employeeName,answers.id,answers.email,answers.github));
                break;
            case 'intern':
                this.add(new Intern(answers.employeeName,answers.id,answers.email,answers.school));
                break;
            case 'manager':
                this.add(new Manager(answers.employeeName,answers.id,answers.email,answers.officeNumber));
                break;
            }
    };
    add(member) {
        this.members.push(member);
    }
    getTeamList() {
        if (this.members.length > 0){
            return this.members;
        } else {
            return false;
        }
    }
    getTeamData() {
        this.getTeamList().map( (item) => {
            console.log(item);
            const teamData = {};
            teamRoles[item] = `name: ${item.name}, id: ${item.id}, email: ${item.email}`
            return teamData
        });
    }
    createEmployees(data) {
        data.map( (item,index) => {
            console.log(item);
            console.log(index);
            // const container  = {};
            // container[] = ;
        });
        
    }
    addNextEmployee() {
        inquirer.prompt([{
              type: 'confirm',
              message: 'Add another employee to the team?',
              name: 'addNextConfirm',
              default: true
            },
            { type: 'list',
              name: 'role',
              message: 'Please select either an Engineer or Intern for your team',
              choices: ['Engineer', 'Intern'],
              when: function(response) {return (response.addNextConfirm===true)}
            }
          ])
          .then( ({role}) => {
            if (role === 'Engineer') {
              console.log("Adding engineer");
            } else if (role === 'Intern') {
              console.log("Adding intern");
            } else {
                this.generateTeamPage();
            }
          })
        }
    generateTeamPage(){
        return this.getTeamData();
    }
    getInfo() {
        console.log(this.teamManager);
        console.log(this.members);
    }
    initializeTeam() {
        this.teamManager = new Manager()
        inquirer
        .prompt(
            {
                type: 'input',
                name: 'manager_name',
                message: "Enter the Team Manager's name:",
            }).then( () => {
                this.promptInformation();
            })
            .then( ({ manager_name, id, email, officeNumber }) => {
                this.teamManager = new Manager(manager_name,id,email,officeNumber);
                this.addNextEmployee();
            });
        }
        // this.manager = new Manager();
        // console.log(newManager.getRole())
        // this.promptMember(newManager.getRole.then(({ manager_name, id, email, officeNumber }) => {
        //     this.manager = new Manager(manager_name,id,email,officeNumber);
        // }))
        // }).then( (manager) => {
            
        // })
    
}

module.exports = Team;