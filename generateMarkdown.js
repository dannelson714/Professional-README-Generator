// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseInput) {
  if (licenseInput.license === "MIT") {
    return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (licenseInput.license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (licenseInput.license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (licenseInput.license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInput) {
  if (licenseInput.license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  }
  else if (licenseInput.license === "APACHE 2.0") {
    return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (licenseInput.license === "GNU GPL v3") {
    return "[GNU GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (licenseInput.license === "BSD 3") {
    return "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInput) {
  return `This project is licensed according to a ${renderLicenseLink(licenseInput)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data);
  const license = renderLicenseSection(data);


  markdownString = `# ${data.title} ${badge} \t## Description\t${data.description}\t
  ## Table of Contents\t
  - [Installation](#installation)\t
  - [Usage](#usage)\t
  - [Credits](#credits)\t
  - [License](#license)\t
  ## Installation\t
  ${data.installation}\t
  ## Usage\t
  ${data.usage}\t
  ## Credits\t
  ${data.credits}\t
  ## License\t
  ${license}\t
  ## Tests\t
  ${data.tests}\t
  ## Questions\t
  If you have any questions or comments please reach me at ${data.e-mail} or https://github.com/${data.github}.`
  
  return markdownString;
}

module.exports = generateMarkdown;
