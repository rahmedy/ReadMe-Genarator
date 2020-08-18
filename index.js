const inquierer = require("inquirer");
const fs = require("fs");
const readMe = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
    {
        type: "prompt",
        message: "What is the title of your repository?",
        name: "title"
    },
    {
        type: "prompt",
        message: "How would you like to describe this project?",
        name: "description"
    },
    {
        type: "prompt",
        message: "Please provide installation instructions.",
        name: "install"
    },
    {
        type: "prompt",
        message: "Enter usage information.",
        name: "usage"
    },
    {
        type: "prompt",
        message: "Enter other contributers.",
        name: "contribution"
    },
    {
        type: "prompt",
        message: "Enter test instructions.",
        name: "test"
    },
    {
        type: "list",
        message: "Select a license(s).",
        name: "license",
        choices: [
            "Apache",
            "Boost",
            "BSD",
            "Mozilla",
        ],
    },
    {
        type: "prompt",
        message: "Please provide your GitHub username.",
        name: "username"
    },
    {
        type: "prompt",
        message: "Enter email address.",
        name: "email"
    },

];

// function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName , answers , function(err){
        if(err){
            throw err;
        }
    })
}

// function to initialize program
function init() {
    console.log("its starting")
    inquierer
        .prompt(questions)
        .then(answers => {
            const md = readMe(answers)
            writeToFile(answers.title + "README.md", md)
        })

}

// function call to initialize program
init();