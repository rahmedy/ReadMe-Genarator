// function to generate markdown for README
function generateMarkdown(getAnswers) {

  // formatting the license string so it works in the badge link
  const badge = getAnswers.license.split(' ').join('%20');

  return `# ${getAnswers.title}
      
    
![License](https://img.shields.io/badge/License-${badge}-blue.svg)
## Description
${getAnswers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\` ${getAnswers.install} \`\`\`
## Usage
${getAnswers.use}
## License
This project is licensed under the ${getAnswers.license} license.
## Contribution Guidelines
${getAnswers.contribution}
## Tests
To run tests, run the following command:
\`\`\` ${getAnswers.test} \`\`\`


Contact ${getAnswers.email}
GitHub account [https://github.com/${getAnswers.username}
`;
}

// make generateMarkdown function available to index.js
module.exports = generateMarkdown;