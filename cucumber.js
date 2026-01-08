module.exports = {
  default: {
    require: ['step-definitions/*.js'],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    timeout: 60000
  }
};
