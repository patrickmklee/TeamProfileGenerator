const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');

const { writeFile, copyFile } = require('./utils/generate-site');

const inquirer = require('inquirer');

const employeeTypes = ['Intern', 'Engineer']
// const employeeClassMap = new Map(employeeTypes,new Intern(), new Engineer())

//     new Intern(),
//     new Engineer()
// ]
const questions = [

    {   
        type : 'list',
        name : 'role',
        message : 'Please select Engineer or Intern',
        choices : employeeTypes.map( (item,index) => {return {name : item}}),
        filter : function(val) { 
            return val.toLowerCase() 
        }
    },

      {
        type: 'text',
        name: 'name',
        message: 'Name:',
        validate: function(value) {
          var pass = value.match(/\w+\b\s+\w+/);
          //var valid = !(value === null || value === undefined)
          if (pass) {
            return true;
          }
          return 'Please enter a full (first and last) name';
        },
      },
      {
        type: 'number',
        name: 'id',
        message: 'ID Number: ',
        validate: function (value) {
          var valid = (!isNaN(parseFloat(value)));
          return valid || 'Please enter a number';
        },
        filter: Number,
      },
      
      {
        type: 'input',
        name: 'email',
        message: `Email:`,
        validate: function (value) {
          var pass = value.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address';
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter the school',
        when: function(answers) {
          return (answers.role === 'intern');
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true
            } else {
                console.log("Please enter a school")
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number:',
        when: function(answers) {
          return (answers.role === 'manager');
        },
        validate: officeInput => {
            if (officeInput) {
                return true
            } else {
                console.log("Please enter a office number")
                return false
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter Github username: ',
        when: function(answers) {
          return (answers.role === 'engineer');
        },
        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log("Please enter a github account")
                return false
            }
        }
    },
    {
        type: 'confirm',
        message: 'Add another employee to the team?',
        name: 'action',
        default: false,
        
    }
];

function buildEmployee(role, info) {
    switch(role) {
        case 'engineer' : 
            return new Engineer(info.name,info.id,info.email,info.github)
            break;
        case 'intern' :
            return new Intern(info.name,info.id,info.email,info.school);
            break;
        case 'manager':
            return new Manager(info.name,info.id,info.email,info.officeNumber);
            break;
    }
}

function getInput(type='') {
    let promises = [];
    const preAnswers = {};
    if (type != '') {
        preAnswers.role = type
    }
    return new Promise(resolve => {
        inquirer.prompt( questions, preAnswers)
            .then( (answers) => {
                resolve(answers)
        })
    });
}
async function promptLoop(employeeArray) {
    let {role,action,...rest} = await getInput();
    let nextEmployee = buildEmployee(role, rest);
    employeeArray.employees.push(nextEmployee);
    if (action === true) {
        await promptLoop(employeeArray);
    } else {
        return Promise.all([employeeArray.employees]);
    }
}
async function start () {
    var employeeArray = {
        employees: []
    };
    
    console.log("## TeamProfileGenerator ##");
    console.log("##########################");
    console.log("To begin, we need some information about the Team Manager (you)")
    
    let {role,action,...rest} =  await getInput('manager');
    let manager = buildEmployee(role, rest);
    employeeArray.employees.push(manager); 
    
    if ( action===true ) {
        try {
            let promptArray = await promptLoop(employeeArray);
            console.log(promptArray);
            let allPromises = await Promise.all([promptArray]);
            console.log(allPromises);
        } catch(error) {
            console.log("### error in loop\n" + error)
        }
    }
    return employeeArray
}
   
function buildWebpage(templateData) {
    console.log(`BUILD WEBPAGE: ${templateData}`)
    writeFile(generatePage(templateData))
}

start().catch( (err) =>  {
    console.log(err)
})
.then( data => {
    return buildWebpage(data);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})              
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
    