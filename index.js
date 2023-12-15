// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should this project be installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should this project be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can someone contribute to this project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How can someone test your project?'
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
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

// TODO: Create a function to write README file

function writeToFile(data) {

    const filename = `${data['title'].toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(data);
    });
}

// Function call to initialize app
init();
