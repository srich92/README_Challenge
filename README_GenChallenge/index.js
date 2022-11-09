// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err? console.error(err) : console.log('Success !')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([{
        type: 'input',
        message: "What is the title of your application?",
        name: 'title',

        type: 'input',
        message: "What is the description of your application?",
        name: 'description',


        


    }])
}

// Function call to initialize app
init();
