//const inquirer = require("inquirer");
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.members = [];
        this.types = ['engineer', 'intern', 'manager']
    }
    newTeamMember(answers) {
        // var role = 
        //const found = this.types.find(r => {r===answers.role})
        //console.log(found);

        switch (answers.role) {
            case this.types[0]:
                this.members.push(new Engineer(answers.name,answers.id,answers.email,answers.github));
                break;
            case this.types[1]:
                this.members.push(new Intern(answers.name,answers.id,answers.email,answers.school));
                break;
            case this.types[2]:
                this.members.push(new Manager(answers.name,answers.id,answers.email,answers.officeNumber));
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
    getManagerData() {
        const manager = this.members.filter(member => member.getRole() === "Manager");
        console.log(manager);
        return {'manager': manager};
        //{ name,id,email,officeNumber } = this.members.filter()
    }
    getTeamData() {
        //debugger;
        //map(({name,id,email,role...details} )
        //console.log(JSON.stringify(this.getTeamList(),null,"    "));
        const engineers = this.members.filter(member => member.getRole() === "Engineer");
        const interns = this.members.filter(member => member.getRole() === "Intern");
        const manager = this.members.filter(member => member.getRole() === "Manager");
        console.log(engineers);
        console.log(manager);
        // const teamData = this.types.map( (item,index) => {
        //         this.members.find(
        //             member => {
        //                 return (member.getRole()===item);
        //                 }
        //         )
        //         );
        // console.log(teamData);
        
        return this.members.map( (item,index) => 
        `
        ${item.getRole()} : 
            {
                name: ${item.getName()},
                id: ${item.getId()},
                email: ${item.getEmail()},
            }
        `
        )
    
        
          
                    
        //debugger;
        // console.log(memberDetails);
        return memberDetails;// {engineers, interns, manager};
        //return this.getTeamList().map(({name,...details}) => { return `${this.getRole()}: ${name},${details}`})
        //console.log(data);
    }
        // {
        //     console.log(item);
        //     const teamData = {};
        //     teamRoles[item] = `name: ${item.name}, id: ${item.id}, email: ${item.email}`
        //     return teamData
        // });
    
    // createEmployees(data) {
    //     data.map( (item,index) => {
    //         console.log(item);
    //         console.log(index);
    //         // const container  = {};
    //         // container[] = ;
    //     });
        
    // }
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