const { Given, When, Then } = require('@cucumber/cucumber');
const AmazonHomePage = require('../pages/AmazonHomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const data = require('../utils/testData.json');

Given('user opens Amazon website', async () => {
  await page.goto(data.url);
});

When('user searches a product', async () => {
  const home = new AmazonHomePage(page);
  await home.searchProduct(data.product);
});

When('user adds product to cart', async () => {
  const product = new ProductPage(page);
  await product.selectProductAndAdd();
});

Then('product should be visible in cart', async () => {
  const cart = new CartPage(page);
  await cart.validateProductInCart();
});
