const { Before, After, Status } = require('@cucumber/cucumber');
const { launchBrowser, closeBrowser } = require('../utils/browser');

Before(async () => {
  global.page = await launchBrowser();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    await page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name}.png`,
      fullPage: true
    });
  }
  //await closeBrowser();
});
