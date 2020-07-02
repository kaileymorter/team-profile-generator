const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateProfile = require('./src/profile-template')
const writeFile = require('./src/generate-site')

const manager = [];
const engineer = [];
const intern = [];
const employeeArr = {manager, engineer, intern}

const promptUser = () => {
    return inquirer.prompt([ 
        {
            type: 'text',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the Manager profile!');
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the manager's employee ID number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please provide an employee ID number!");
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide an email for your manager's profile");
                }
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeNumInput => {
                if (officeNumInput) {
                    return true;
                } else {
                    console.log("Please provide the manager's office number!");
                }
            }
        }
    ])
    .then(({name, id, email, officeNumber}) => {
        manager.push(new Manager(name, id, email, officeNumber))
    })
};

const promptProfile = (employeeArr) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: "Would you like to add an Engineer, Intern or done with building your team profile?",
            choices: ['Add Engineer!', 'Add Intern!', 'Finished with Team Profile!'],
            validate: roleNumInput => {
                if (roleNumInput) {
                    return true;
                } else {
                    console.log("Please select an option!");
                }
            }
        }
    ])
    .then(({employee}) => {
        if (employee === 'Add Engineer!') {
            return inquirer.prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "Enter Engineer's name.",
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter Engineer's employee ID number."
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Provide Engineer's work email address."
                },
                {
                    type: 'text',
                    name: 'github',
                    message: "Provide Engineer's GitHub username for their team profile."
                },
            ])
            .then(({name, id, email, github}) => {
                engineer.push(new Engineer(name, id, email, github))
                return promptProfile()
            })
        } else if (employee === 'Add Intern!') {
            return inquirer.prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: "Enter Intern's name."
                },
                {
                    type: 'text',
                    name: 'id',
                    message: "Enter Intern's employee ID number."
                },
                {
                    type: 'text',
                    name: 'email',
                    message: "Provide Intern's email address."
                },
                {
                    type: 'text',
                    name: 'school',
                    message: "What school did or is the intern going to?"
                },
            ])
            .then(({name, id, email, school}) => {
                intern.push(new Intern(name, id, email, school))
                return promptProfile()
            })
        } else {
            console.log('View your team profile!')
            return employeeArr
        }
    });
}

promptUser()
    .then(promptProfile)
    .then(teamProfileData => {
        return generateProfile(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err);
    });
