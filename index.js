const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
},
{
    type: 'input',
    name: 'license',
    message: 'What is the license for this project?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
}
];

function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
    if (err) {
    console.log(err);
    } else {
    console.log('Success! Your README.md file has been generated');
    }
});
}

function init() {
console.log('Starting the app...');
inquirer.prompt(questions).then(answers => {
    console.log('Received answers:', answers);
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
});
}

init();

