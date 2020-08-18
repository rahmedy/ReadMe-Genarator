// function to generate markdown for README
function generateMarkdown(data) {
  const badge = data.license
  const badgeObj = {
    "Apache" : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost" : "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD" : "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Mozilla" : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
    return `# ${data.title}
    ${badgeObj[badge]}
    
    ### Description: ${data.description} 
       
    ## 1. Installation:
    * ${data.install}
    ## 2. Usage:
    * ${data.usage}
    ## 3. Contribution:
    * ${data.contribution}
    ## 4. License:
    * ${data.license} (License badge below title above.)
    ## 5. Tests:
    * ${data.test} 
    ## 6. Contact Me:
    * Email: ${data.email}
    * GitHub Username: ${data.username}
      `
  ;
  }
  
  module.exports = generateMarkdown;