// Packages required for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: "What is the author's Github username?",
        name: 'username'
    },
    {
        type: 'input',
        message: "What is the author's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: 'Write a description for your README.',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What license does your project use?',
        name: 'license',
        choices: ['MIT', 'CC', 'GPL', 'LGPL']
    }
    // {
    //     type: 'checkbox',
    //     message: 'What languages do you know?',
    //     name: 'languages',
    //     choices: ['English', 'Spanish', 'French'],
    // },
    // {
    //     type: 'list',
    //     message: 'What is your preferred method of communication?',
    //     name: 'communication',
    //     choices: ['email', 'phone'],
    // }
];

inquirer.prompt(questions).then((data) => {
    console.log(data);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
