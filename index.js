// License function and  if/else section here 



function valiateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}


const questions = [
    // Question for the Title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: valiateInput,
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
        validate: valiateInput,
    },

    // Table of Contents
    // not 100% sure how I will do this


    // Question for Installation
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program.",
        validate: valiateInput,
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this program/project.",
        validate: valiateInput,
    },

    // Question for License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: valiateInput,
    },

    // Question for Contributing 
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
        validate: valiateInput,
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        validate: valiateInput,
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: valiateInput,
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
        },
    },
];

// need the const fs variable here
const fs = require('fs');

// need inquirer variable here
const inquirer = require("inquirer");

// need a markdown js file here and make it a const variable


// function to generate the ReadMe here
