const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, email, username, from  }) =>

inquirer
  .prompt([
   {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
   },
   {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
   },
   {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
   },
   {
    type: 'input',
    message: 'Where are you from?',
    name: 'from',
   }
])


.then((answer) =>

      console.log(response),
      console.log(response.name),
      fs.append(),
  );
