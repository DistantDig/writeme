const npmVersion = 'v8.2.4';


// <-- TITLE RENDERING -->

// Function that returns the title section of README
function renderTitleSection(title) {
  return `# ${title}`;
}


// <-- DESCRIPTION RENDERING -->

// Function that returns the description section of README
function renderDescriptionSection(description) {
  return `## Description

  ${description}`;
}


// <-- TABLE OF CONTENTS RENDERING -->

// Function that returns the table of contents section of README
function renderTableSection() {
  
  return `## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)`;
}


// <-- INSTALLATION RENDERING -->

// Function that returns the installation section of README
function renderInstallationSection(installation) {
  return `## Installation

  ${installation}`;
}


// <-- USAGE RENDERING -->

// Function that returns the usage section of README
function renderUsageSection(usage) {
  return `## Usage

  ${usage}`;
}


// <-- CREDITS RENDERING -->

// Function that returns the credits section of README
function renderCreditsSection(username, email) {
  return `## Credits

  This project was designed by ${username}. Thier Github profile can be found [here](https://github.com/${username}), and they can be reached via email at ${email}.`;
}


// <-- CONTRIBUTING RENDERING -->

// Function that returns the contributing section of README
function renderContributingSection(contributing) {
  return `## Contributing

  ${contributing}`;
}


// <-- TEST RENDERING -->

// Function that returns the tests section of README
function renderTestsSection(testing) {
  return `## Tests

  ${testing}`;
}


// <-- LICENSE RENDERING -->

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

  This project is covered under the ${license} license. The full documentation on this license can be found [here](${renderLicenseLink(license)})`
}


// <-- MARKDOWN GENERATION -->

// Function to generate markdown for README
function generateMarkdown(data) {
  const markdown = 
  `${renderLicenseBadge(data.license)}

  ${renderTitleSection(data.title)}

  ${renderDescriptionSection(data.description)}

  ${renderTableSection()}

  ${renderInstallationSection(data.installation)}

  ${renderUsageSection(data.usage)}

  ${renderCreditsSection(data.username, data.email)}

  ${renderLicenseSection(data.license)}

  ${renderContributingSection(data.contributing)}

  ${renderTestsSection(data.testing)}

`;
  return markdown;
}


module.exports = {generateMarkdown};
