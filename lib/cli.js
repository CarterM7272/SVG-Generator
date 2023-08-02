const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

const questions = [
  {
    type: 'input',
    message: 'Enter text for the logo. (Must not be more than 3 characters.)',
    name: 'text'
  },
  {
    type: 'input',
    message: 'Enter a text color',
    name: 'fontColor'
  },
  {
    type: 'list',
    message: 'Select a shape for the logo',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    message: 'Enter a shape color',
    name: 'shapeColor'
  },
];

const generateSVG = (shape, shapeColor, fontColor, text) => {
  const shapeClasses = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
  };

  const ShapeClass = shapeClasses[shape];
  if (ShapeClass) {
    return new ShapeClass(shapeColor, fontColor, text).render();
  } else {
    throw new Error("Invalid shape: " + shape);
  }
};

const writeToFile = async (logo) => {
  try {
    await writeFile("logo.svg", logo);
    console.log("SVG Generated");
  } catch (err) {
    console.error("Couldn't create logo, please try again!");
  }
};

class CLI {
  async run() {
    try {
      const userInput = await this.promptUser();
      const logo = this.generateLogo(userInput);
      await this.saveLogoToFile(logo);
    } catch (err) {
      console.error(err);
    }
  }

  async promptUser() {
    const { text, fontColor, shape, shapeColor } = await inquirer.prompt(questions);
    return { text, fontColor, shape, shapeColor };
  }

  generateLogo(userInput) {
    const { shape, shapeColor, fontColor, text } = userInput;
    return svgGen(shape, shapeColor, fontColor, text);
  }

  async saveLogoToFile(logo) {
    try {
      await writeToFile(logo);
      console.log("SVG Generated");
    } catch (err) {
      console.error("Something went wrong when trying to write to file:", err);
    }
  }
}

module.exports = CLI;