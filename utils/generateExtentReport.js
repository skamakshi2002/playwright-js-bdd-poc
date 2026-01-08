const report = require('multiple-cucumber-html-reporter');

console.log('>>> Extent report generation started');

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/extent-report',
  reportName: 'Playwright BDD Automation Report',
  pageTitle: 'Automation Execution Report',

  metadata: {
    browser: {
      name: 'Edge',
      version: 'Latest'
    },
    platform: {
      name: 'Windows'
    }
  },

  customData: {
    title: 'Run Information',
    data: [
      { label: 'Project', value: 'Playwright BDD Amazon POC' },
      { label: 'Environment', value: 'QA' },
      { label: 'Executed By', value: 'Kamakshi' }
    ]
  }
});

console.log('>>> Extent report generation completed');
