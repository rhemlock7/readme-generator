// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `[![License](https://img.shields.io/badge/license-${license.replace(/\s+/g, '%20')}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[License](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

Licensed under [${license}](https://opensource.org/licenses/${license}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.testing}

  ## Questions

  For questions please visit my GitHub profile (${data.github}) or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
