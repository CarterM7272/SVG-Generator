# SVG Generator

![SVG Generator]()

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

SVG Generator is a command-line tool that allows users to create SVG files dynamically using Inquirer for input prompts and the FS module to save the generated SVG files to their local system. This project simplifies the process of creating custom SVG graphics by providing an interactive interface in the terminal.

## Installation

N/A
## Usage

To run the SVG Generator, execute the following command in your terminal:

```bash
node index.js
```

The application will present a series of prompts, asking for information to customize your SVG file. Follow the instructions on the terminal to provide the required details.

After completing the prompts, the SVG file will be generated with the provided information and saved in the `output` directory within the project.

**Note**: Make sure the `output` directory exists before running the application.

## Dependencies

The SVG Generator project utilizes the following npm modules:

- [Inquirer](https://www.npmjs.com/package/inquirer): A powerful library for handling interactive command-line prompts.
- [FS (File System)](https://nodejs.org/api/fs.html): A built-in Node.js module that enables reading from and writing to files.

These modules are already included in the `package.json` file, so there is no need to install them separately.

## Contributing

N/A
## License

N/A