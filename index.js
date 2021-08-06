// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMd = require('./generateMd');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('/.demo/'+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ('succesfully wrote: ' + fileName);
    })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('readmegenerator', generateMd(data));
    })
}

// Function call to initialize app
init();
