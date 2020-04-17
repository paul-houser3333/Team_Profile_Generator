const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const ManagerProfile = require('./templates/ManagerProfile');
const EngineerProfile = require('./templates/EngineerProfile');
const InternProfile = require('./templates/InternProfile');
const TeamRoster = require('./templates/TeamRoster');

class App {
    constructor() {
        this.db = {
            manager: null,
            engineers: [], // Array of engineer object 
            interns: [], // Array of intern object 
        }
    }

    async getEmployeeInfo() {

        console.log(`\nPlease enter employee information:\n`);

        let employeeInfo =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "ID: ",
                        name: "id"
                    },
                    {
                        type: "input",
                        message: "Name: ",
                        name: "name"
                    },
                    {
                        type: "input",
                        message: "Email: ",
                        name: "email"
                    },
                    {
                        type: "input",
                        message: "Title: ",
                        name: "title"
                    }
                ]);

        switch (employeeInfo.title.toLowerCase()) {
            case 'manager':
                employeeInfo = await this.getOfficeNumber(employeeInfo);
                break;
            case 'engineer':
                employeeInfo = await this.getGithubHandle(employeeInfo);
                break;
            case 'intern':
                employeeInfo = await this.getSchoolInfo(employeeInfo);
                break;
            default:
                break;

        }

        return employeeInfo;
    }

    async getOfficeNumber(employeeInfo) {
        const managerInfo =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Office Number: ",
                        name: "officeNumber"
                    }
                ])

        employeeInfo.officeNumber = await managerInfo.officeNumber;

        return employeeInfo;
    }