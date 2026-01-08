const { chromium } = require('@playwright/test');

let browser, context, page;

module.exports = {
  launchBrowser: async () => {
    browser = await chromium.launch({
      channel: 'msedge',
      headless: false
    });
    context = await browser.newContext();
    page = await context.newPage();
    return page;
  },

  closeBrowser: async () => {
    await browser.close();
  }
};
