// Function to return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache' || !license) {
    return '![License]: Apache](http//img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)' 
    }
    if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)' 
    }
    if (license === 'GPL') {
    return '![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)(https://opensource.org/licenses/GPL-3.0)' 
    }
    if (license === 'BSD') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)' 
    }
    if (license === 'Unlicense') {
    return '![License](https://img.shields.io/badge/License-Unlicense-blue.svg)(http://unlicense.org/)' 
    }

}

  // Function to return the license link
  // If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None' || !license) {
    return '';
    }
    return `- [License](#license)`;
}

  // Function to return the license section of README
  // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None' || !license) {
    return '';
    }
    return `## License

This project is licensed under the ${license} License.
    `;
}

  // Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the project, please feel free to reach out to me at ${data.email} or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).
- Name: ${data.name}
- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
