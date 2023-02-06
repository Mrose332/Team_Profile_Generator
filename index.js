const inquirer = require('inquirer');
const fs = require('fs');
const { generateManager, generateEngineer, generateIntern } = require('./src/generatehtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const questions = [{
    type: 'input',
    name: 'managerName',
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
    name: 'managerId',
    message: 'Enter manager ID?'

}, {
    type: 'input',
    name: 'managerEmail',
    message: 'Enter managers email?'

}, {
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'Enter managers office number?',

}, {
    type: 'list',
    name: 'role',
    choices: ['ENGINEER', 'INTERN'],
    message: 'Choose Role?'

}, {
	type: 'input',
	name: 'enginnerName',
	message: 'Enter engineers name?',
}, {
    type: 'input',
	name: 'enginnerId',
	message: 'Enter engineer ID?',

}, {
    type: 'input',
	name: 'enginnerGithub',
	message: 'Enter engineers Github username?',

}, {
    type: 'input',
    name: 'engineerEmail',
    message: 'Enter engineer email?'

}, {

    type: 'input',
    name: 'internName',
    message: 'Enter intern name?'


}, {

    type: 'input',
    name: 'InternId',
    message: 'Enter intern ID?'

}, {
    type: 'input',
    name: 'internEmail',
    message: 'Enter intern email?'

}, {
    type: 'input',
    name: 'internSchool',
    message: 'Enter intern school?'


}];

inquirer.prompt(questions).then(data => {
	const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
	const enginner = new Engineer(data.enginnerName, data.engineerId, data.engineerGithub, data.engineerEmail);
    const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
	const managerHtml = generateManager(manager);
	const enginnerHtml = generateEngineer(enginner);
    const internHtml = generateIntern(intern);
	const htmlToWrite = enginnerHtml + managerHtml + internHtml;
	fs.writeFile('test.html', htmlToWrite, (error) => console.log(error))
})

