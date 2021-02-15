// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Team = require('./lib/Team');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');



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
  }
];
      // when: function(employee){
      //    return (employee === 'Engineer');
      // }
//     {
//       type: 'confirm',
//       name: 'confirmAdd',
//       message: 'Add another team member?',
//       default: false,
//     },
    
// ];
// const teamProfile = new Team();
// TODO: Create a function to write HTML file
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
// const promptEmployee = role => {
//   inquirer.prompt()
// }
const promptAddNextEmployee = () => {
  return inquirer.
    prompt([{
        type: 'confirm',
        message: 'Add another employee to the team?',
        name: 'addNextConfirm',
        default: true
      },
      { type: 'list',
        name: 'role',
        message: 'Please select either an Engineer or Intern for your team',
        choices: ['Engineer', 'Intern'],
        //default: []
        when: function() { return (addNextConfirm===true) }
      },
    ])
    .then( (answers) => {
        // teamData.push(answers);
        console.log(answers);
        if (!answers.addNextConfirm) {
          return teamData;
        } else {
          
          //if (answers.role === 'Engineer') {
          let questionsList = genericQuestions.splice(genericQuestions.length, 0, roleQuestion[answers.role]);
          console.log(questionsList);
          teamProfile.promptAddNextEmployee();
        }
      });
        //} else (answers.role === 'Intern') {
    
//        }
        
  };
  const teamProfile = new Team();

  function promptTeamMember(teamData) {
    return inquirer.
    prompt([{
        type: 'confirm',
        message: 'Add another employee to the team?',
        name: 'addNextConfirm',
        default: true
      },
      { type: 'list',
        name: 'role',
        message: 'Please select either an Engineer or Intern for your team',
        choices: ['engineer', 'intern'],
        //default: []
        when: function(answers) { return (answers.addNextConfirm===true) }
      },
    ])
    .then(({role}) => {
      inquirer.prompt(questions,({role:`${role}`}))
        .then( (answers) => {
          console.log(JSON.stringify(answers, null, "  "));
        });
      });
    
    // return inquirer.prompt(questions).then( ({answers}) => {
    //   console.log(JSON.stringify(answers, null, "  "));
      
    //   // return (new Manager(answers.employeeName,answers.id,answers.email,answers.officeNumber));
    // })
  }
  
  function promptManager() {
    return inquirer.prompt(questions,({role:'manager'}))
      .then( (answers) => {
      console.log(JSON.stringify(answers, null, "  "));
      teamProfile.add(new Manager(answers.employeeName,answers.id,answers.email,answers.officeNumber));
    });
  }
  function init() {
    console.log("## TeamProfileGenerator ##")
    console.log("##########################");
    console.log("To begin, we need some information about the Team Manager (you)");
    promptManager().then( (teamData) => {
      promptTeamMember(teamData);
    });
    //console.log(initTeam);
    // const newTeamMember = await promptTeamMember();
    // console.log(newTeamMember);
  };
// const teamProfile = new Team();
// const promptTeamManager = () => {
//   inquirer.
//     prompt([...genericQuestions])
//     // .then( ({}) => }
//   };
//const teamProfile = new Team();
// init();
init();
//.then( (teamData) => {
//    generatePage();
//  }); 

// init();
// let currQuestionList = genericQuestions.splice(-1,0,genericQuestions[0]);
// promptTeam()
//   .then( (answers) => {
//     // console.log(answers);
//     const myTeam = new Team(answers.name,answers.id,answers.email);//Manager(manager_name,id,email,officeNumber);
//     // console.log(myTeam);
//     myTeam.initializeTeam();
//     // this.addNextEmployee();
// });



