const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "Project Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Application Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Install Instructions:",
        name: "install",
        default: "npm i"
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage"
    },
    {
        type: "list",
        message: "License Used:",
        name: "license",
        choices: ["MIT", "APACHE", "GPL", "Affero GPL", "Artistic License 2.0", "Public Domain (unlicense)", "n/a"]
    },
    {
        type: "input",
        message: "Contributing:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Testing Instructions:",
        name: "test",
        default: "run 'npm test'"
    },
    {
        type: "input",
        message: "GitHub Username:",
        name: "github"
    },
    {
        type: "input",
        message: "Email Address:",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
