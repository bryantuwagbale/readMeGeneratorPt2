// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMd');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'please enter project name',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'please describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'what dependcies do you need to run this app',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'what license is being used for this project',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'ISC'],
    },
    {
        type: 'input',
        message: 'what is your github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'what is your email address',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName, data, err=> {
        if (err) {
            return console.log(err);
        }
        console.log('successfully wrote' + fileName);
    })
   }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('Generated-ReadMe', generateMd(data));
    })
}

// Function call to initialize app
init();
