class CartPage{
checkoutButton(){
    return cy.contains('CHECKOUT')
}
contiuneShopping(){
    return cy.contains('Continue Shopping').should('be.visible')
}
cartItem(){
    return cy.get('.cart_item_label>a div')
}
removeButton(){
    return cy.get('.btn_secondary.cart_button').should('be.visible')
}
itemPrice(){
    return cy.get('.inventory_item_price')
}

}
export default CartPage