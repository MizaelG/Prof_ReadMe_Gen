// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title'
},{
    type: 'input',
    message: 'Provide a brief description of your project.',
    name: "description"
},{
    type: 'input',
    message: 'What problem does your project solve?',
    name: 'problem'
}, {
    type: 'input',
    message: 'What have you learned from your project?',
    name: 'learn'
}, {
    type: 'input',
    message: 'How can a user install this application?',
    name: 'install'
}, {
    type: 'input',
    message: 'What does the user need to know about this application?',
    name: 'usage'
}, {
    tyoe: 'input',
    message: 'what does the user need to know about contributing to the project?',
    name: 'contribute',
}, {
    type: 'input',
    message: 'What command should be used to run on the project?',
    name: 'test'
}, {
    type: 'input',
    message: 'what kind of license should your project have?',
    name: 'license',
    choices: [
        'MIT',
        'APACHE',
        'GPL',
        'BSD',
        'None'
    ]
}, {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
}, {
    type: 'input',
    message: 'What is your GitHub email address?',
    name: 'email'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var content = generateMarkdown(data);
    fs.writeFile(fileName, content, function(error) {
        if(error) {
            return console.log(error);
        }
        console.log('success');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'ReadMe.md';
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
