const { Given, When, Then } = require('@cucumber/cucumber');
const { launchBrowser, closeBrowser } = require('../utils/browser');
const LoginPage = require('../pages/LoginPage');
// //const Hellosignin=require('../pages/Hellosignin');
const data = require('../utils/testData.json');
// //const AmazonSignupPage = require('../pages/AmazonSignupPage');
let page;
let loginPage;
Given('user navigates to application', async () => {
    page = await launchBrowser();
    await page.goto(data.url);
});
When('user clicks Continue shopping button', async ()=> {
    
    loginPage = new LoginPage(page);
//     await loginPage.login();
});

When('And user enters mobile number or email', async ()=>{
    await loginPage.enterEmail(data.user.email);
});

When('clicks Continue button', async ()=> {
    await loginPage.clickContinue();
});
// // When('user enters email id', async () => {
// //   const login = new LoginPage(page);
// //   await login.login(data.user.email);
// ......................................................................................................
