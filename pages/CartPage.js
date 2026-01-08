const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartCount = '#nav-cart-count';
  }

  async validateProductInCart() {
    const count = await this.page.textContent(this.cartCount);
    expect(Number(count)).toBeGreaterThan(0);
  }
}

module.exports = CartPage;
