// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // if (license === 'No License') {
  //   return `![Static Badge](https://img.shields.io/badge/npm-v8.2.4-blue)`;
  // } else {
  //   return `![Static Badge](https://img.shields.io/badge/npm-v8.2.4-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-green)`;
  // }
  switch (license) {
    case 'MIT':
      return `![Static Badge](https://img.shields.io/badge/npm-v8.2.4-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-yellow)`;
    case 'CC':
      return `![Static Badge](https://img.shields.io/badge/npm-v8.2.4-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-lightgrey)`;
    case 'GPL':
      return `![Static Badge](https://img.shields.io/badge/npm-v8.2.4-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-blue)`;
    case 'LGPL':
      return `![Static Badge](https://img.shields.io/badge/npm-v8.2.4-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-blue)`;
    default:
      return `![Static Badge](https://img.shields.io/badge/npm-v8.2.4-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}

# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

This project was designed by ${data.username}. Thier Github profile can be found [here](https://github.com/${data.username}), and they can be reached via email at ${data.email}.

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.testing}

`;
}

module.exports = {generateMarkdown};
