// Packages required for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        default: 'Title'
    },
    {
        type: 'input',
        message: "What is the author's Github username?",
        name: 'username',
        default: 'Author'
    },
    {
        type: 'input',
        message: "What is the author's email?",
        name: 'email',
        default: 'example@gmail.com'
    },
    {
        type: 'input',
        message: 'Write a description for your README.',
        name: 'description',
        default: 'Description here.'
    },
    {
        type: 'input',
        message: 'Write installation instructions for your project.',
        name: 'installation',
        default: 'Installation guide here.'
    },
    {
        type: 'input',
        message: 'Write a usage guide for your project.',
        name: 'usage',
        default: 'Usage guide here.'
    },
    {
        type: 'list',
        message: 'What license does your project use?',
        name: 'license',
        choices: ['MIT', 'CC', 'GPL', 'LGPL', 'No License']
    },
    {
        type: 'input',
        message: 'How would you like others to contribute to your project?',
        name: 'contributing',
        default: 'https://www.contributor-covenant.org/'
    },
    {
        type: 'input',
        message: 'How would you like others to test your project?',
        name: 'testing',
        default: 'Testing guide here.'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (error) => {
        error ? console.error(error) : console.log('README generated successfully!');
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md.new", data);
    });
}

// Function call to initialize app
init();
