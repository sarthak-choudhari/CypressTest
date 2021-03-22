class ProductPage{
    allProduct(){
        return cy.get('.inventory_item')
    }
    addToCartButton(){
       return cy.get('[class="btn_primary btn_inventory"]')
      // return cy.get('.pricebar>button')
    }
    allProductName(){
        return cy.get('.inventory_item_name')
    }
    productInCart(){
        return cy.get('[class="fa-layers-counter shopping_cart_badge"]')
    }
    cartButton(){
        return cy.get('svg[data-icon="shopping-cart"]')
    }
    bagItemPrice(){
        return cy.xpath("//div[.='Sauce Labs Backpack']/../..//following-sibling::div/div")
        //return cy.get('.inventory_item_price').eq(0)
    }
    tshirtPrice(){
        return cy.xpath("//div[.='Sauce Labs Bolt T-Shirt']/../..//following-sibling::div/div")

        //a[@id='item_1_title_link']/..//following-sibling::div/div
    }
    itemPrice(){
        //return cy.xpath('//div[@class="inventory_item_name"]/../..//following-sibling::div/div')
        return cy.get('.inventory_item_price')
    }
    
    filterDropdown(){
        return cy.get('select')
    }
    
}
export default ProductPage