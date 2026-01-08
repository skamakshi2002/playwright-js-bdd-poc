Feature: Amazon Add to Cart
Scenario: Add product to cart and validate
    Given user opens Amazon website
    When user searches a product
    And user adds product to cart
    Then product should be visible in cart