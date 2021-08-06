// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    let icon ="";
    if (data.License == "MIT") {
      icon = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    } else if (data.License == 'isc') {
      icon = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
    } else if (data.License == 'GPLv3') {
      icon = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else {
      icon = "None"
    }
    return icon 
  }
  
  // TODO: Create a function that returns the License link
  // If there is no License, return an empty string
  function renderLicenseLink(data) {
    let link ="";
      if (data.License == "MIT") {
        link = '[MIT License](https://opensource.org/licenses/MIT)'
      } else if (data.License == 'ISC') {
        link = '[ISC License](https://opensource.org/licenses/ISC)'
      } else if (data.License == 'GPLv3') {
        link = '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)'
      } else {
        link = "None"
      }
      return link
  }
  
  // TODO: Create a function that returns the License section of README
  // If there is no License, return an empty string
  function renderLicenseSection(License) {}
  
  // TODO: Create a function to generate markdown for README
  function generateMd(data) {
    return `# ${data.Title} ${renderLicenseBadge(data)}
   
    # Description
    ${data.Description}
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#License)
    * [Contributors](#contributors)
    * [Tests](#tests)
    * [Questions](#questions)
    
    # Installation
    The following dependencies are needed to be installed to run the application: 
    ${data.Installation}
    # Usage
    ${data.Usage}
    # License
    This application runs under the ${data.License} license.
    ${renderLicenseLink(data)}
    # Contributors:
    ${data.Contributors}
    # Tests
    How to run tests: ${data.Tests}
    # Questions
    If there are any questions, issues contact ${data.Username} or email at ${data.Email}
  `;
  }
  
  module.exports = generateMd;