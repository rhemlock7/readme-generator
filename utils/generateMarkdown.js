// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // Define a mapping of license names to their corresponding badge URLs
  const licenseBadges = {
    'GNU General Public License v3.0': 'https://img.shields.io/badge/license-GPL--3.0-brightgreen.svg',
    'MIT License': 'https://img.shields.io/badge/license-MIT-brightgreen.svg',
    'BSD 2-Clause "Simplified" License': 'https://img.shields.io/badge/license-BSD--2--Clause-brightgreen.svg',
    'BSD 3-Clause "New" or "Revised" License': 'https://img.shields.io/badge/license-BSD--3--Clause-brightgreen.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/license-BSL--1.0-brightgreen.svg',
    'Creative Commons Zero v1.0 Universal': 'https://img.shields.io/badge/license-CC0--1.0-brightgreen.svg',
    'Eclipse Public License 2.0': 'https://img.shields.io/badge/license-EPL--2.0-brightgreen.svg',
    'GNU Affero General Public License v3.0': 'https://img.shields.io/badge/license-AGPL--3.0-brightgreen.svg',
    'GNU Lesser General Public License v2.1': 'https://img.shields.io/badge/license-LGPL--2.1-brightgreen.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/license-MPL--2.0-brightgreen.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-brightgreen.svg',
  };

  // Get the badge URL for the provided license
  const licenseBadgeUrl = licenseBadges[license];

  return `![License](${licenseBadgeUrl})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Object containging license names and their corresponding URLs
  const licenseUrls = {
    'GNU General Public License v3.0': 'https://opensource.org/licenses/GPL-3.0',
    'MIT License': 'https://opensource.org/licenses/MIT',
    'BSD 2-Clause "Simplified" License': 'https://opensource.org/licenses/BSD-2-Clause',
    'BSD 3-Clause "New" or "Revised" License': 'https://opensource.org/licenses/BSD-3-Clause',
    'Boost Software License 1.0': 'https://opensource.org/licenses/BSL-1.0',
    'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/publicdomain/zero/1.0/',
    'Eclipse Public License 2.0': 'https://opensource.org/licenses/EPL-2.0',
    'GNU Affero General Public License v3.0': 'https://opensource.org/licenses/AGPL-3.0',
    'GNU Lesser General Public License v2.1': 'https://opensource.org/licenses/LGPL-2.1',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'The Unlicense': 'https://opensource.org/licenses/Unlicense',
  };

  // If the input matches the object, get the correct corresponding url
  const licenseUrl = licenseUrls[license];

  return `[License](${licenseUrl})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

Licensed under [${license}] ${renderLicenseLink(license)}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description

${data.description}


## Installation

${data.installation}


## Usage

${data.usage}

${renderLicenseSection(data.license)}


## Contributing

${data.contribution}


## Tests

${data.testing}


## Questions

For questions please visit my GitHub profile (github.com/${data.github}) or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
