
const fs = require('fs');
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
},{
    type: 'input',
    name: 'description',
    message: 'What is the project about?',
}, {
    type: 'checkbox',
    message: 'Please select a license applicable to this project.',
    choices: ['Mit', 'APACHE License 2.0', 'Boost Software License 1.0', 'Mozilla Public License 2.0'],
}, {
    type: 'input',
    name: 'require',
    message: 'List any project dependencies here.',
}, {
    type: 'input',
    name:'usage',
    message: 'List the languages or technologies you used within this project.',
},{
    type:'input',
    name: 'creator',
    message: 'Write your GitHub Username',
},{
    type:'input',
    name:'email',
    message:'Provide your email',
},{
    type:'input',
    name:'contributors',
    message:'List any contributors, also add their github usernames',
}, {
    type:'input',
    name:'test',
    message: 'What is the test process for this subject?'
}    
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};


function init(){
    inquirer.createPromptModule(questions).then(responses) => {
        console.log('Creating Professional README.ms File.');
        writeToFile('./dist/README.md', generateMarkdown({...responses}));
    };
}


init();
