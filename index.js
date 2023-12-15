// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description for your project:'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Why did you build this project? What was your motivation?'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which license does your project need?',
        choices: ["GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause \"Simplified\" License",
            "BSD 3-Clause \"New\" or \"Revised\" License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",]
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {

    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
