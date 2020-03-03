const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");


const Employee = [];

function runStart() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      choices: ["create manager", "create engineer", "create intern"],
      name: "createEmployee"
    })
    .then(function(input) {
      if (input.createEmployee === "add manager") {
        addManager();
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
        type: "input",
        message: "What is your email?",
        name: "empEmail"
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "empOfficeNum"
      }
    ])
    .then(function(input) {
      let manager = new Manager(
        input.empName,
        input.empEmail,
        input.empOfficeNum
      );

      Employee.push(manager)
      runStart();
    })
}