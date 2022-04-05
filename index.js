// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter instructions for installing your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter any usage information for your user',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter guidelines for users to contribute to this project',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter any instructions for testing',
        },
        {
            type: 'list',
            message: 'Please choose a license for your project from the following options',
            name: 'license',
            choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
        },
        {
            type: 'input',
            name: 'e-mail',
            message: 'Please enter your e-mail address',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username'
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // initFunction = process.argv("npm init -y")
    console.log("npm init -y");

}

// Function call to initialize app
init();
