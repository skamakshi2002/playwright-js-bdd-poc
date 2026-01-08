class AmazonHomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = '#twotabsearchtextbox';
    this.searchBtn = '#nav-search-submit-button';
  }

  async searchProduct(product) {
    await this.page.fill(this.searchBox, product);
    await this.page.click(this.searchBtn);
  }
}

module.exports = AmazonHomePage;
