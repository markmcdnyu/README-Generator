const inquirer = require("inquirer");
const fs = require('fs');


const questions = [
    // Question for the Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        //validate an input here
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project.",
        //validate an input here
    },

    // Table of Contents
    // not 100% sure how I will do this


    // Question for Installation
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program.",
        //validate an input here
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Please enter a description for your project.",
        //validate an input here
    },

    // Question for License 
    {
        type: "list",
        name: "description",
        message: "Please select a license for this project.",
        choices: [
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        //validate an input here
    },

    // Question for Contributing 
    {
        type: "input",
        name: "contributing",
        message: "Please instruct how users can contribute to your project.",
        //validate an input here
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        //validate an input here
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        //validate an input here
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        }
    },

];
