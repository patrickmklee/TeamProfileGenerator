// TODO: Include packages needed for this application
const fs = require('fs');
const Team = require('./lib/Team');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');


//const DIST_HTML_FILENAME = './dist/index.html'
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'list',
    name: 'role',
    choices: ['engineer','intern'],
    message: 'Please select Engineer or Intern',
  },
  {
    type: 'input',
    name: 'employeeName',
    message: 'Name:'
  },
  {
    type: 'number',
    name: 'id',
    message: 'ID Number:'
  },
  {
    type: 'input',
    name: 'email',
    message: `Email:`,
    validate: function (value) {
      var pass = value.match(
        /^(\w+)@\w+\.[(com)|(net)$]/
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
    console.log(JSON.stringify(teamData))
    var header = `<h1>${data.name}</h1>`;
    var body = JSON.stringify(data);
      
    // concatenate header string
    // concatenate body string
    return '<!DOCTYPE html>'
    + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};
// TODO: Create a function to initialize app

  const teamProfile = new Team();

  function promptTeamMember(teamData) {
    //debugger;
    return inquirer
      .prompt(questions)
        .then( (answers) => {
          console.log(JSON.stringify(answers, null, "  "));
          teamProfile.newTeamMember(answers);
          if(answers.addNextConfirm) {
            promptTeamMember(teamData)
          } else {
            console.log(teamProfile.getTeamList())
          }
        })
      }
  
  
  function promptManager() {
    return inquirer.prompt(questions,({role:'manager'}))
      .then( (answers) => {
      console.log(JSON.stringify(answers, null, "  "));
      teamProfile.add(new Manager(answers.employeeName,answers.id,answers.email,answers.officeNumber));
      debugger;
    });
  }
  function init() {
    console.log("## TeamProfileGenerator ##")
    console.log("##########################");
    console.log("To begin, we need some information about the Team Manager (you)");
    promptManager().then( (teamData) => {
      promptTeamMember(teamData);
    });

  };

init();




