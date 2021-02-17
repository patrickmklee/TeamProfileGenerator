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
    ${manager.map(({name,id,email,officeNumber}) => {
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
const generateTeamMembers = employees => {
  return `
      ${employees
        .filter(({ role }) => role)
        .map(({ name, id, email, ... details}) => {
          console.log(languages);
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">Role: ${role}</h5>
            <p>Email: ${email}</p>
            <a>class="btn mt-auto"><i class="fab fa-github mr-2"></i>Details: ${details}</a>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const {employees, ...header } = templateData;

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
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>

      </div>
    </header>
    <main class="container my-5">
      ${generateTeamManager(employees)}
      
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};
//${generateAbout(about)}