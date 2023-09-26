const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can users install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can users test your project?',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully generated ${fileName}`);
    }
  });
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate README content based on user input
    const readmeContent = generateMarkdown(answers);

    // Specify the filename where you want to save the README
    const fileName = 'README.md';

    // Call the writeToFile function to write the README
    writeToFile(fileName, readmeContent);
  });
}

// Initialize the application
init();
