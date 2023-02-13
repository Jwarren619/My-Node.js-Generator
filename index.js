const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'Name',
   },
   {
    type: 'input',
    message: 'What is your email?',
    name: 'Email',
   },
   {
    type: 'input',
    message: 'What license did you use for your project?',
    name: 'License',
   },
   {
    type: 'input',
    message: 'What is the description of this project?',
    name: 'Description' },

    {
        type: 'input',
        message: 'What installation did you use?',
        name: 'Installation',
       },
       {
        type: 'input',
        message: 'What is your usuage for your project?',
        name: 'Usuage' },
        {
            type: 'input',
            message: 'What are the contributing guidelines of your project?',
            name: 'Contributing',
           },
           {
            type: 'input',
            message: 'What test commands are you using for this project? If you are using it.',
            name: 'Test commands',
   }]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => 
   
    {
 console.log(answer)
      })
    }

  //  console.log(answer),
  //  console.log(answer.),
   // fs.append(),
  //  )};



// Function call to initialize app
init();


