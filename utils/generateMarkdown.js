// function to generate markdown for README
function generateMarkdown(information) {


  const badge = information.license.split(' ').join('%20');

  return `# ${information.title}
      
    
![License](https://img.shields.io/badge/License-${badge}-blue.svg)
## Description
${information.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To installrun the following command:
\`\`\` ${information.install} \`\`\`
## Use
${information.use}
## License
This project is licensed under ${information.license} license.
## Contribution 
${information.contribution}
## Tests
Run the following command:
\`\`\` ${information.test} \`\`\`


Contact ${information.email}
##
GitHub account:  https://github.com/${information.username}
`;
}

// make generateMarkdown function available to index.js
module.exports = generateMarkdown;