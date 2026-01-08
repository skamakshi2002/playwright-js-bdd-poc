const { sign } = require("node:crypto");

class LoginPage {
   constructor(page) {
         this.page=page;
    this.continueshoppingBtn='//button[@class="a-button-text"]';
    this.hellosigninBtn ='//span[text()="Hello, sign in"]';
    this.email='//input[@aria-label="Enter mobile number or email"]';
    this.continueBtn='#a-button-input';
}

async login() {
    await this.page.click(this.continueshoppingBtn);
    await this.page.click(this.hellosigninBtn);
  }

    async enterEmail(email){
await this.page.type(this.email, email);
 }
   
  async clickContinue(){
     await this.page.click(this.continueBtn);
 }
}

// module.exports = LoginPage;
// //export default LoginPage;
