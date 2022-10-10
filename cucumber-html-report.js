// const report = require("multiple-cucumber-html-reporter");
// report.generate({
//   jsonDir: "jsonlogs", // ** Path of .json file **//
//   reportPath: "./reports/cucumber-htmlreport.html",
//   metadata: {
//     browser: {
//       name: "chrome",
//       version: "XX",
//     },
//     device: "Local test machine",
//     platform: {
//       name: "Ubuntu",
//       version: "20",
//     },
//   },
// });
const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'hierarchy',
  jsonDir: 'cypress/cucumber-json',
  output: 'reports/html_simple/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  104",
    "Platform": "Ubuntu",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
