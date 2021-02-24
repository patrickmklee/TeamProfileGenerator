// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }
  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Team Profile</h2>
      <p>${aboutText}</p>
    </section>
  `;
};
const generateTeamManager = manager => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Office ${manager.getOfficeNumber()}</h2>
      <div class="flex-row justify-space-between">
        <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="portfolio-item-title text-light">${manager.getName()}</h3>
          <h5 class="portfolio-languages">${manager.getRole()}</h5>
          <p class="portfolio-item-body text-light"><a href="mailto:"><span class="text-secondary">${manager.getEmail()}</span></a></p>
          <p><span class="text-right">ID #${manager.getId()}</span></p>
        </div>
      </div>
      `;
};
      
// create the projects section
const generateTeamMembers = employeeArr => {
  if (!employeeArr) {
    return `
    </div>
  </section>
  `
  } else {
    return `
    <div class="flex-row justify-space-between">
      <div class="col-6 mx-auto text-light flex-column mt-2">
      ${employeeArr
        .filter( employee => {return employee.getRole() === 'Engineer'})
        .map( engineer => { 
          return `
          <div class="container w-100">
            <div class="card mt-3">
              <div class="card-header pb-0">${engineer.getRole()}</div>
              <div class="card-body">
                <h3 class="text-light">${engineer.getName()}</h3>
                <a href="mailto:" class="text-secondary">${engineer.getEmail()}</a>
                <p class="portfolio-languages">ID: #${engineer.getId()}</p>
                <a class="btn ml-2" href="http://www.github.com/${engineer.getGithub()}"><i class="fab fa-github mb-2"></i></a>
              </div>
            </div>
          </div>
          `;
        })
        .join('')}
      </div>
      <div class="col-6 mx-auto text-light flex-column mt-2">
        ${employeeArr
          .filter( employee => {return employee.getRole() === 'Intern'})
          .map( intern => {
            return `
            <div class="container">
              <div class="card mt-3">
              <div class="card-header pb-0">${intern.getRole()}</div>
                <div class="card-body">
                  <h3 class= "text-light">${intern.getName()}</h3>
                  <a href="mailto:" class="text-secondary">${intern.getEmail()}</a>
                  <p class="portfolio-languages">ID: #${intern.getId()}</p>
                  <p class="text-light">${intern.getSchool()}</p> 
                </div>
              </div>
            </div>
            `;
          })
          .join('')}
        </div>
      </div>
    </section>
  `;
        }
};
            
// export function to generate entire pages
module.exports = templateData => {
  // destructure page data by section
  //const employees = teamplateData.getEmployees
  console.log("Template Data HERE")
  console.log(templateData)
  //const manager = templateData.manager
  const {employees, manager}= templateData;
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${manager.getName()}'s Team</h1> 
      </div>
    </header>
    <main class="container my-5">
      ${generateTeamManager(manager)}
      ${generateTeamMembers(employees)}
    </main>
    <footer class="container text-center py-3">
    <h3 class="text-dark">&copy;2020 by ${manager.getName()}</h3>
    </footer>
  </body>
  </html>
  `;
};
// ${manager.role} : ${manager.email}
// {/* <h1 class="page-title text-secondary bg-dark py-2 px-3">${manager.getName()}'s Team
//       ${employees.find( (employee) => {return employee.getRole() === 'Manager'}).getOfficeNumber()}
//       </h1>  */}