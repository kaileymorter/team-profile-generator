 const inquirer = require('inquirer');
 const Employee = require('./lib/Employee');
 const Manager = require('./lib/Manager');
 const Engineer = require('./lib/Engineer');
 const Intern = require('./lib/Intern');

const PromptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role",
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please select a role!');
                }
            }
        }, 
        {
            type: 'text',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your employee!');
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please give your employee's ID number");
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide an email for your employee's profile");
                }
            }
        }
    ])
}

PromptUser();