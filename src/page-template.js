// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
};
const generateTeamManager = manager => {
  return `
    <section class="my-3" id="portfolio">
    ${manager.filter(({name,id,email,officeNumber}) => {
        return `
      <h2 class="text-dark bg-primary p-2 display-inline-block">${officeNumber}</h2>
      <div class="flex-row justify-space-between">
    
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">${role}</h5>
            <p>Employee ID: ${id}</p>
            <a href="mailto:">${email}</a>
          </div>
        `;
        })
        .join('')}
      `};
      
// create the projects section
const generateTeamMembers = employeeArr => {
  console.log(employeeArr.employees)
  return `
    <section class="my-3" id="portfolio">
    ${employeeArr.filter( (employee) => { return employee.getRole() === 'Manager'} )
    .map( employee => {
          return `
          <h2 class="text-dark bg-primary p-2 display-inline-block">${employee.getName()}</h2>
          <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <p>ID#${employee.getId()}</p>
              <h3 class="portfolio-item-title text-light">${employee.getName()}</h3>
              <h5 class="portfolio-languages">${employee.getRole()}</h5>
              <span class="text-secondary"><a href="mailto:">${employee.getEmail()}</a></span>
            </div>
            `;
        })
        .join('')}
        <div class="col-12 col-md-6 text-light flex-column">
        ${employeeArr
        .filter( employee => {return employee.getRole() === 'Engineer'})
        .map( engineer => { 
          return `
          <div class="card mt-2">
            <div class="card-header">
              <h3 class="portfolio-item-title text-light">${engineer.getName()}</h3>
              <p class="portfolio-item-body text-light"><a href="mailto:"><span class="text-secondary">${engineer.getEmail()}</span></a></p>
            </div>
            <div class="card-body">
              <h5 class="portfolio-languages">${engineer.getRole()}</h5>
              <a class="btn mt-auto" href=www.github.com/${engineer.getGithub()}><i class="fab fa-github mr-2"></i></a>
              <p><span>ID #${engineer.getId()}</span></p>
            </div>
          </div>
          `;
        })
        .join('')}
        </div>
        <div class="col-12 col-md-6 mb-2 text-light flex-column">
        ${employeeArr
          .filter( employee => {return employee.getRole() === 'Intern'})
          .map( intern => {
            return `
            <div class="card p-3">
              <div class="card-header">
                <h3 class= "portfolio-item-title text-light">${intern.getName()}</h3>
                <p class = "portfolio-item-body text-light"><a href="mailto:"><span class="text-secondary">${intern.getEmail()}</span></a></p>                
              </div>
              <div class="card-body">
                <h5 class="portfolio-languages">${intern.getRole()}</h5>
                <p class="portfolio-item-text text-light">${intern.getSchool()}</p>
                <p><span>ID: #${intern.getId()}</span></p>
              </div>
            </div>
            `;
          })
          .join('')}
          </div>
      </div>
    </section>
  `;
};
            
// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  //const employees = teamplateData.getEmployees
  console.log("Template Data HERE")
  console.log(templateData)
  //const manager = templateData.manager
  const {employees}= templateData;
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
      <h1 class="page-title text-secondary bg-dark py-2 px-3">Office #${employees.find( (employee) => {return employee.getRole() === 'Manager'}).getOfficeNumber()}</h1> 
      </div>
    </header>
    <main class="container my-5">
      ${generateTeamMembers(employees)}
    </main>
    <footer class="container text-center py-3">
    </footer>
  </body>
  </html>
  `;
};
// ${manager.role} : ${manager.email}
//${generateAbout(about)}
//     <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
