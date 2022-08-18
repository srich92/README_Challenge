// TODO: Include packages needed for this application

const inquirer= require('inquirer');
const fs = require('fs');


const generateMarkdown = require('README_GenChallenge/Develop/utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome! Please provide your full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide an email address for clients to contact you');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a github username to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Oops! Lets try that again. Please enter a title for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your app here',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('We would love to know more about your app');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide instructions for installation');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Providing instructions for usage will help users /properly navigate your app');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to this app?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide contribution details');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Description of the tests written for your application and how to use them:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide instructions on how others can contribute to your project.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license did you use?',
        choices: ['MIT', 'GPL', 'CC--0'],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
];

        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,err=> {
        if (err) {
            return console.log (err);
        }
        console.log('Your README.md file has been generated!')
        });
    }


// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prpmpt(questions);
}

// Function call to initialize app
init()
.then(userInput =>{
    return generateMarkdown(userInput);
})

.then(readmeInfo => {
    return writeToFile(readmeInfo);
})

.catch(err =>{
    console.log (err);
})


