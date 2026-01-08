module.exports = {
  default: {
    require: ['step-definitions/*.js'],
    format: [
      'progress',
      'html:reports/cucumber-report.html'
    ],
    timeout: 60000
  }
};
