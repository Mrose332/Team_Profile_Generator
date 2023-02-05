const inquirer = require('inquirer');
const fs = require('fs'); 
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


const questions = [{
    type: 'input',
    name: 'name',
    message: 'Who is the manager?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter Managers name');
            return false; 
        }
    } 
}, {

    type: 'input',
    name: 'id',
    message: 'Enter manager ID?'

}, {
    type: 'input',
    name: 'email',
    message: 'Enter managers email'

}, {
    type: 'input',
    name: 'description',
    message: 'Enter managers office number?'

    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

    })

    
}, {
    type: 'list',
    name: 'license',
    choices: ['MIT', 'GPU'],
    message: 'Pick a license for your project?'
}, {
    type: 'input',
    name: 'installation',
    message: 'What are the steps to install your project?'

}, {
    type: 'input',
    name: 'usage',
    message: 'Enter a usage description'

}, {
    type: 'input',
    name: 'contributors',
    message: 'what are the contributing guidelines for the repo?' 

}, {
    type: 'input',
    name: 'test', 
    message: 'What command to use to run tests?',
    default: 'npm test'
}];
