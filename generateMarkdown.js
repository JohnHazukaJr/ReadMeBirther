// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Function to generate Markdown content for the README
function generateMarkdown(data) {
  // Extract data from 'data' object
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    username,
    email,
  } = data;

  // Create the Markdown content
  const markdownContent = `# ${title}

${renderLicenseSection(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## Questions
- GitHub: [${username}](https://github.com/${username})
- Email: ${email}
`;

  return markdownContent;
}

// Function to render the license badge
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    Apache: '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    GPL: '![License: GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)',
    None: '', // No badge for "None"
  };

  return licenseBadges[license];
}

// Function to render the license link
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)',
    Apache: '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)',
    GPL: '[GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)',
    None: '', // No link for "None"
  };

  return licenseLinks[license];
}

// Function to render the license section
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (licenseBadge && licenseLink) {
    return `
## License
${licenseBadge}  
This project is licensed under the ${licenseLink} license.
`;
  } else {
    return '';
  }
}

// Export the generateMarkdown function for use in other files
module.exports = generateMarkdown;
