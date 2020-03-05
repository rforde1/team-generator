const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const generateHTML = require("./generateHTML");
const fs = require("fs");
const myhtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
<nav class="navbar navbar-light bg-warning text-lg-center">
  <span class="navbar-brand mb-0 h1 text-lg-center">MY TEAM</span>
</nav>
    {Placeholder}
    <script src="https://kit.fontawesome.com/71a24ccb38.js" crossorigin="anonymous"></script>
</body>
</html>`;


const Employee = [];
runStart();
function runStart() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      choices: ["create manager", "create engineer", "create intern", "IM DONE"],
      name: "createEmployee"
    })
    .then(answer => {
      switch (answer.createEmployee){
        case "create manager":
          addManager();
          break;
        case "create engineer":
          addEngineer()
          break;
        case "create intern":
          addIntern()
          break;
        case "IM DONE":
          finished()
          break;
      }
    });
}
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee name?",
        name: "empName"
      },
      {
        type:"number",
        message: "What is your employee id?",
        name: "empId"

      },
      {
        type: "input",
        message: "What is your email?",
        name: "empEmail"
      },
      {
        type: "number",
        message: "What is your office number?",
        name: "empOfficeNum"
      }
    ])
    .then(function(input) {
      let manager = new Manager(
        input.empName,
        input.empId,
        input.empEmail,
        input.empOfficeNum
      );
      Employee.push(manager);
      managerHTML(manager);
      runStart();
    })
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee name?",
        name: "empName"
      },
      {
        type:"number",
        message: "What is your employee id?",
        name: "empId"

      },
      {
        type: "input",
        message: "What is your email?",
        name: "empEmail"
      },
      {
        type: "input",
        message: "What is your github?",
        name: "empGithub"
      }
    ])
    .then(function(input) {
      let engineer = new Engineer(
        input.empName,
        input.empId,
        input.empEmail,
        input.empGithub
      );

      Employee.push(engineer);
      engineerHTML(engineer);
      runStart();
    })
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee name?",
        name: "empName"
      },
      {
        type:"number",
        message: "What is your employee id?",
        name: "empId"

      },
      {
        type: "input",
        message: "What is your email?",
        name: "empEmail"
      },
      {
        type: "input",
        message: "What is your school?",
        name: "empSchool"
      }
    ])
    .then(function(input) {
      let intern = new Intern(
        input.empName,
        input.empId,
        input.empEmail,
        input.empSchool,
        
      );

      Employee.push(intern);
      internHTML(intern);
      runStart();
    })
}
function managerHTML(answer){
  console.log(answer);
  const html = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answer.empName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${answer.empEmail}</h6>
    <p>ID: ${answer.empId} </p>
    <p class="card-text">${answer.empOfficeNum}</p>
  </div>
</div>`

Employee.push(html);
}

function engineerHTML(answer){
  console.log(answer);
  const html = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answer.empName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${answer.empEmail}</h6>
    <p>ID: ${answer.empId} </p>
    <p class="card-text">${answer.empGithub}</p>
  </div>
</div>`

Employee.push(html);
}

function internHTML(answer){
  console.log(answer);
  const html = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answer.empName.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${answer.empEmail.getEmail()}</h6>
    <p>ID: ${answer.empId.getId()} </p>
    <p class="card-text">${answer.empSchool.getSchool()}</p>
  </div>
</div>`
Employee.push(html);
}


function finished(){
  const finalHtml = Employee.join('');
  const fileToWrite = myhtml.replace('{Placeholder}', finalHtml)
  fs.writeFile("index.html", fileToWrite,(err)=>{
    if(err) console.log(err);
  })
}