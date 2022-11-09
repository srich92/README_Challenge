const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function init() {
    inquirer
        .prompt([{
                type: 'input',
                message: "What is the title of your application?",
                name: 'title',
            },
            {
                type: 'input',
                message: "What is the description of your application?",
                name: 'description',
            },
            {
                type: 'input',
                message: "What are the installation instructions for your application?",
                name: 'installation',
            },
            {
                type: 'input',
                message: "What is the usage information for your application?",
                name: 'usage',
            },
            {
                type: 'input',
                message: "What are the contribution guidelines for your application?",
                name: 'contribution',
            },
            {
                type: 'input',
                message: "What are the testing instructions for your application?",
                name: 'testing',
            },
            {
                type: 'input',
                message: "What is you GitHub username?",
                name: 'github',
            },
            {
                type: 'input',
                message: "What is you email address?",
                name: 'email',
            },
            {
                type: 'list',
                message: "Please choose a license for your application:",
                choices: ["mit",
                    "lgpl-3.0",
                    "mpl-2.0",
                    "agpl-3.0",
                    "unlicense",
                    "apache-2.0",
                    "gpl-3.0",
                    "gpl-2.0",
                    "epl-1.0",
                    "cc0-1.0",
                    "bsd-3-clause",
                    "bsd-2-clause",
                ],
                name: 'license',
            },
        ])
        .then((response) =>
            writeToFile("README.md", generateMarkdown(response))
        );
}

// function call to initialize program
init();