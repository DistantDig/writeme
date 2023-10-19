const npmVersion = 'v8.2.4';

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![Static Badge](https://img.shields.io/badge/npm-${npmVersion}-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-yellow)`;
    case 'CC':
      return `![Static Badge](https://img.shields.io/badge/npm-${npmVersion}-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-lightgrey)`;
    case 'GPL':
      return `![Static Badge](https://img.shields.io/badge/npm-${npmVersion}-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-blue)`;
    case 'LGPL':
      return `![Static Badge](https://img.shields.io/badge/npm-${npmVersion}-blue) ![Static Badge](https://img.shields.io/badge/License-${license}-blue)`;
    default:
      return `![Static Badge](https://img.shields.io/badge/npm-${npmVersion}-blue)`;
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'CC':
      return `http://creativecommons.org/publicdomain/zero/1.0/`;
    case 'GPL':
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case 'LGPL':
      return `https://www.gnu.org/licenses/lgpl-3.0`;
    default:
      return ``;
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  return `## License

  This project is covered under the ${data.license} license. The full documentation on this license can be found [here](${renderLicenseLink(data.license)})
  
  `
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const markdown = 
  `${renderLicenseBadge(data.license)}

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

## Contributing

${data.contributing}

## Tests

${data.testing}

`;
  return markdown;
}

module.exports = {generateMarkdown};
