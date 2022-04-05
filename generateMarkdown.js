// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  markdownString = `# ${data.title}\t## Description\t${data.description}\t
  ## Table of Contents\t
  - [Installation](#installation)\t
  - [Usage](#usage)\t
  - [Credits](#credits)\t
  - [License](#license)\t
  ## Installation\t
  ${installation}\t
  ## Usage\t
  ${usage}\t`

  ## Description
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
    
  ## Usage
  
  ## Credits
  
  ## License
    
  ---
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
  ## Features
    
  ## How to Contribute
    
  ## Tests"
    
  
  
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
