const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [{
        type: "input",
        message: "Title of Project: ",
        name: "title"
    },
    {
        type: "input",
        message: "Description of the project:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "install",
        default: "npm i"
    },
    {
        type: "input",
        message: "Usage Information:",
        name: "use"
    },
    {
        type: "input",
        message: "Testing Instructins:",
        name: "test",
        default: "npm test"
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: ["MIT", "ISC", "APACHE-2.0", "BSD 3--Clause", "none"]
    },
    {
        type: "input",
        message: "Contribution:",
        name: "contribution"
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "username"
    },
    {
        type: "input",
        message: "Email Address:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, createFile) {
    fs.writeFile(fileName, createFile, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Your README has been created!");
    });
}

// function to initialize program
async function init() {
    try {
        const information = await inquirer.prompt(questions);
        const fileName = await information.title.toLowerCase().split(' ').join('') + "_README.md";
        const createFile = await generateMarkdown(information);
        const writefile = await writeToFile(fileName, createFile);
    } catch (error) {

        console.log(error);
    }
}
init();