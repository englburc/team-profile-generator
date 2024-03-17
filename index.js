const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
let EmployeeArray = [];


function init() {
    const manager_questions = [
        {
            type: "input",
            message: "Manager's name?",
            name: "managerName",
            required: true
        },
        {
            type: "input",
            message: "Manager's Id?",
            name: "managerId",
            required: true
        },
        {
            type: "input",
            message: "Manager's email?",
            name: "managerEmail",
            required: true,
            validate: function (email) {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: "input",
            message: "Office number?",
            name: "officeNumber",
            required: true
        }
    ]
    inquirer
        .prompt(manager_questions)
        .then((response) => {
            EmployeeArray.push(new Manager(name = response.managerName, id = response.managerId, email = response.managerEmail, officeNumber = response.officeNumber));
        }
        )
        .then(() => option())
}

function addEngineer() {
    const engineer_questions = [
        {
            type: "input",
            message: "Engineer's name?",
            name: "engineerName",
            required: true
        },
        {
            type: "input",
            message: "Engineer's Id?",
            name: "engineerId",
            required: true
        },
        {
            type: "input",
            message: "Engineer's email?",
            name: "engineerEmail",
            required: true,
            validate: function (email) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: "input",
            message: "Engineer's GitHub username?",
            name: "github",
            required: true
        }
    ]
    inquirer
        .prompt(engineer_questions)
        .then((response) => {
            EmployeeArray.push(new Engineer(name = response.engineerName, id = response.engineerId, email = response.engineerEmail, github = response.github));
        }
        )
        .then(() => option())
}

const questions = [
    {
        type: 'list',
        message: "Provide the project license.",
        name: 'option',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        required: true,
        default: 'Add an engineer'
    }
];


function option() {
    inquirer
        .prompt(questions)
        .then((response) => {
            if (response.option === 'Add an engineer') {
                addEngineer();
            }
            else if (response.option === 'Add an intern') {
                addIntern();
            }
            else {
                writeToFile(outputPath, render(EmployeeArray));
            }
        })
};

function writeToFile(fileName, data) {
    fs.writeFile(file = fileName,
        data, (err) => err ? console.error(err) : console.log('html created!'))
};

