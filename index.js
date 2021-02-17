// TODO: Include packages needed for this application
//const fs = require('fs');
const inquirer = require('inquirer');
const Team = require('./lib/Team');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./utils/generate-site');

const generatePage = require('./src/page-template');
const Employee = require('./lib/Employee');

const teamProfile = new Team();

//const DIST_HTML_FILENAME = './dist/index.html'
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'list',
    name: 'role',
    choices: ['engineer','intern'],
    message: 'Please select Engineer or Intern',
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate: function(value) {
      var pass = value.match(/\w+\b\s+\w+/);
      //var valid = !(value === null || value === undefined)
      if (pass) {
        return true;
      }
      return 'Please enter a full (first and last) name';
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'ID Number:',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
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
      name: 'officeNumber',
      message: 'Enter office number:',
      when: function(employee) {
        return (employee.role === 'manager');
      }
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter the school',
    when: function(employee) {
      return (employee.role === 'intern');
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter github username',
    when: function(employee) {
      return (employee.role === 'engineer');
    }
  },
  {
    type: 'confirm',
    message: 'Add another employee to the team?',
    name: 'addNextConfirm',
    default: true
  },
];
function writeToFile(fd, data) {
    var stream = fs.createWriteStream(fileName)
    stream.once('open', function(fd) {
        var html = buildHtml();
        stream.end(html);
  });
}

function buildPage() {
    //console.log(JSON.stringify(teamProfile))
    var header = `<h1>${data.name}</h1>`;
    var body = JSON.stringify(teamProfile.getTeamData());
      
    // concatenate header string
    // concatenate body string
    return '<!DOCTYPE html>'
    + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};



// Prompt Functions



function promptTeamMember(teamData) {
  //debugger;
 // if (!managerData.addNextConfirm) {
   // return teamProfile.getTeamData();
 // } else {
    return inquirer
    .prompt(questions)
      .then( (answers) => {
        console.log(JSON.stringify(answers, null, "  "));
        //debugger;
        //teamData.unshift(teamProfile);
        teamData.employees.unshift(answers);
        teamProfile.newTeamMember( teamData.employees[0]);
        //answers.join(

        if(answers.addNextConfirm) {
          promptTeamMember(teamData);
        } else {
          //generatePage()
          return teamProfile.getTeamData();
          
          //console.log(teamProfile.getTeamData());
          // teamProfile.buildPage();
          //console.log(JSON.stringify(teamProfile.getTeamList(),null," "));
        }

      })
    }
  //}


function promptManager () {
  //debugger;
  return inquirer.prompt(questions,({role:'manager'}))
    .then(answers => {
      console.log(JSON.stringify(answers, null, "  "));
      //return {role,..}
      //eamProfile.newTeamMember(answers);//answers.name,answers.id,answers.email,answers.officeNumber));
      teamProfile.newTeamMember(answers);
      return teamProfile.getManagerData();
      // if (answers.addNextConfirm === false) {
        
      // } else {
      //   teamProfile.getManagerData(); 
      // }
    });
      //return {answers}
    //   if (!answers.addNextConfirm) {
    //     promptTeamMember(); 
    //   } else {
    //     return teamProfile.getTeamData();
    //   }
    // }
     

}
const teamArr = []
function init () {
  console.log("## TeamProfileGenerator ##")
  console.log("##########################");
  console.log("To begin, we need some information about the Team Manager (you)");
  // try {
  //debugger;
  //const teamObj = new Team();
  promptManager().then( (teamData) => {
    if (teamData.employees === null){
      teamData.employees =[];
    }
    // if (managerData)
      //console.log(managerData);
      //managerData;
      //teamProfile.push(managerData);
      //teamData.employees.push()

      if (teamData.addNextConfirm) {
        return promptTeamMember(teamData);
      } else {
        return teamData;
      }
      //return teamProfiile.getTeamData();
      }).then( templateData => {
          return generatePage(templateData);
      })
      .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(writeFileResponse => {
        consoole.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      })  
  }

  init();
  // .then( ( ) => { 
      //   promptTeamMember(teamObj);
      //   }
      // )
//init().then( () => {

//.then(promptManager()
  //.then( (data) => {
   //   generatePage(data)
   // }
  //)



                  
        

      
  



