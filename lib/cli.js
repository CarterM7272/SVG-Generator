const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");


class CLI {
  run() {
    const questions = [
      {
        type: 'input',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        name: 'text'
      },
      {
        type: 'input',
        message: 'Enter a text color',
        name: 'color'
      },
      {
        type: 'input',
        message: 'Select a shape for the logo',
        name: 'shape',
        choices: {Circle, Triangle, Square},
      },
      {
        type: 'input',
        message: 'Enter a shape color',
        name: 'shapeColor'
      },
    ]


      fs.writeFile('logo.svg', data, (error) => {
        if (error) throw error;
          console.log('SVG created!')
      })
    }



  }


module.exports = CLI;
