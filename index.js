const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/page-template")
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

var employeeArray = [];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your team manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your team manager's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your team manager's email address?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is your team manager's office number?"
    },
];

const addMore = {
    type: "list",
    name: "options",
    message: "Please select an option:",
    choices: ["Add an intern", "Add an engineer", "Finish building team"],
}

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your intern's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "Where did your intern go to school?"
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your engineer'Github username?"
    },
];

async function init() {
    const a = await inquirer.prompt(managerQuestions);
    const manager = new Manager(a.name, a.id, a.email, a.officenumber);
    employeeArray.push(manager);
    options();
}

init();

async function options() {
    const a = await inquirer.prompt(addMore);
    if (a.options == "Add an intern") {
        makeIntern();
    } else if (a.options == "Add an engineer"){
        makeEngineer();
    } else {
        generateHTML.printEmployeeArray(employeeArray);
        const customHTML = generateHTML.createHTML();
        writeToFile(customHTML);
    }
}

async function makeIntern() {
    const a = await inquirer.prompt(internQuestions);
    const intern = new Intern(a.name, a.id, a.email, a.school);
    employeeArray.push(intern);
    options();
}

async function makeEngineer() {
    const a = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(a.name, a.id, a.email, a.github);
    employeeArray.push(engineer);
    options();
}

function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, (err) => {
        err ? console.error(err) : console.log("Your team profile page has been generated");
    });
}