const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generator = require('./util/generateHtml');
const team = [];

const selectType = () => {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Manager", "Engineer", "Intern", "Exit"],
            name: "employeeType"
        }
    ]).then(answer => {
        if (answer.employeeType === "Manager") {
            managerQuestions();
        } else if (answer.employeeType === "Engineer") {
            internQuestions();
        } else if (answer.employeeType === "Intern") {
            engineerQuestions();
        } else if (answer.employeeType === "Exit") {
            fs.writeFile(`teams.html`, generator(team),
                function (err) {
                    if (err) {
                        throw err
                    }
                })
            }
    })
};


const managerQuestions = () => {
    inquirer.prompt([
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
    ])
        .then(function (response) {
            const mngr = new Manager(response.name, response.id, response.email, response.officeNumber)
            team.push(mngr);
            selectType();
        });
}

const internQuestions = () => {
 inquirer.prompt([

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
    ])
    .then(function (response) {
        const intrn = new Intern(response.name, response.id, response.email, response.school)
        team.push(intrn);
        selectType();
    });
}

const engineerQuestions = () => {
     inquirer.prompt([
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
    ])
    .then(function (response) {
        const engnr = new Engineer(response.name, response.id, response.email, response.github)
        team.push(engnr);
        selectType();
    });
};

const init = () => {
    selectType();
}

init();
