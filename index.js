// const inquirer = require('inquirer)
// const fs = require('fs')

// think I will need to write logic to answer different questions based on if they want to add a Manager, Intern or Engineer
// type: "checkbox",
// message: "Please select what type of team member you wold like to add:",
// choices: ['Manager', 'Engineer', 'Intern'],
// name: "type"

// if input === Manager
// then answer this array of questions []
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter your team members name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter your team members id #:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your team members email:",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter your team members office number:",
            name: "officeNumber"
        }
    ]);
}

// if input === Intern
// then answer this array of questions []
const internQuestions = () => {
    return inquirer.prompt([

        {
            type: "input",
            message: "Please enter your team members name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter your team members id #:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your team members email:",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter your team members school name:",
            name: "school"
        }
    ]);
}

// if input === Engineer
// then answer this array of questions []
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter your team members name:",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter your team members id #:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter your team members email:",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter your team members GitHub:",
            name: "github"
        },
    ]);
};


// Need this to create a separate file for each employee
    // Then to take all the files to generate a team view