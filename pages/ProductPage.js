class ProductPage {
  constructor(page) {
    this.page = page;
    this.firstProduct = 'div[data-component-type="s-search-result"] h2 a';
    this.addToCartBtn = '#add-to-cart-button';
  }

  async selectProductAndAdd() {
    await this.page.click(this.firstProduct);
    await this.page.waitForLoadState('networkidle');
    await this.page.click(this.addToCartBtn);
  }
}

module.exports = ProductPage;
